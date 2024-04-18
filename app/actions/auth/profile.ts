"use server";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { LingoletteClient } from "@/lib/lingolette";
import { LingoletteCreateUserType } from "./action";

export { updateProfile };

async function updateProfile(formdata: FormData) {
  const supabase = createClient();
  const {
    error,
    data: { user },
  } = await supabase.auth.getUser();

  if (error || user === null) {
    redirect("/login");
  }

  const userProfile = await db.userProfile.findUnique({
    where: { id: user.id },
    include: { LingoletteCredential: true },
  });

  if (userProfile === null) {
    redirect("/login");
  }

  // perform proper sanitization
  const data = {
    name: formdata.get("name") ?? userProfile.name,
    nativeLng:
      formdata.get("native-language") ??
      userProfile.LingoletteCredential?.nativeLng ??
      "en",
    targetLng:
      formdata.get("language-studying") ??
      userProfile.LingoletteCredential?.targetLng ??
      "fr",
    langLevel:
      parseInt(formdata.get("level")?.toString() ?? "") ??
      userProfile.LingoletteCredential?.languageLevel ??
      7,
    grammaticalGender:
      formdata.get("grammatical-gender") ??
      userProfile.grammatical_gender ??
      "prefer-not-to-say",
  };

  // check if lingolette table properties are changed
  try {
    if (
      data.nativeLng !== userProfile.LingoletteCredential?.nativeLng ||
      data.targetLng !== userProfile.LingoletteCredential?.targetLng ||
      data.langLevel !== userProfile.LingoletteCredential?.languageLevel
    ) {
      // delete user
      // The user id passed to the lingolette api is not the same as the user id from the users table
      const deleteResponse = await LingoletteClient.call("org", "removeUser", {
        userId: userProfile.LingoletteCredential?.id,
      });

      // create new user
      const result = await LingoletteClient.call("org", "addUser", {
        name: user.email,
        targetLng: data.targetLng,
        nativeLng: data.nativeLng,
        languageLevel: data.langLevel,
      });

      if (!result.data) {
        console.error("Failed to renew user credentials on Lingolette API");
        console.error(result);
        return redirect(
          "/error?error=Error updating your information. Contact customer relations to solve this problem"
        );
      }

      const userPayload = result.data as LingoletteCreateUserType;

      await db.userProfile.update({
        include: { LingoletteCredential: true },
        where: { id: user.id },
        data: {
          name: data.name.toString(),
          grammatical_gender: data.grammaticalGender.toString(),
          LingoletteCredential: {
            connect: {
              userid: user.id,
            },
            update: {
              id: userPayload.id,
              languageLevel: data.langLevel,
              nativeLng: data.nativeLng.toString(),
              targetLng: data.targetLng.toString(),
            },
          },
        },
      });
    } else {
      await db.userProfile.update({
        where: { id: user.id },
        data: {
          name: data.name.toString(),
          grammatical_gender: data.grammaticalGender.toString(),
        },
      });
    }
  } catch (error) {
    console.log("Error updating user profile", error);
    return redirect(
      "/error?error=Error updating your information. Contact customer relations to solve this problem"
    );
  }

  revalidatePath("/dashboard/profile", "layout");
  redirect("/dashboard/profile");
}
