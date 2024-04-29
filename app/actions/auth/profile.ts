"use server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { LingoletteClient } from "@/lib/lingolette";
import { LingoletteCreateUserType } from "./action";
import { auth } from "@/auth";

export { updateProfile };

async function updateProfile(formdata: FormData) {
  const session = await auth();
  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
    include: { LingoletteCredential: true },
  });

  if (user === null) {
    redirect("/login");
  }
  // perform proper sanitization
  const data = {
    name: formdata.get("name") ?? user.name,
    nativeLng: formdata.get("native-language") ?? "en",
    targetLng: formdata.get("language-studying") ?? "en",
    langLevel: parseInt(formdata.get("level")?.toString() ?? "") ?? 2,
    grammaticalGender:
      formdata.get("grammatical-gender") ??
      user.grammatical_gender ??
      "prefer-not-to-say",
  };

  // check if lingolette table properties are changed
  try {
    if (
      data.nativeLng !== user.LingoletteCredential?.nativeLng ||
      data.targetLng !== user.LingoletteCredential?.targetLng ||
      data.langLevel !== user.LingoletteCredential?.languageLevel
    ) {
      // delete user
      // The user id passed to the lingolette api is not the same as the user id from the users table
      if (user.LingoletteCredential) {
        const deleteResponse = await LingoletteClient.call("org", "removeUser", {
          userId: user.LingoletteCredential.id,
        });
        console.info("Lingolette User delete operation: ", deleteResponse);
      }

      console.info("Creating new user profile on Lingolette...")

      // create new user
      const result = await LingoletteClient.call("org", "addUser", {
        name: user.name,
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

      await db.user.update({
        include: { LingoletteCredential: true },
        where: { id: user.id },
        data: {
          name: data.name?.toString(),
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
      await db.user.update({
        where: { id: user.id },
        data: {
          name: data.name?.toString(),
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
