"use server";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

async function updateProfile(formdata: FormData) {
  const supabase = createClient();
  const {
    error,
    data: { user },
  } = await supabase.auth.getUser();

  if (error || user === null) {
    redirect("/login");
  }

  const userProfile = await db.userProfile.findUnique({where: {id: user.id}, include: {LingoletteCredential: true}})

  if (userProfile === null) {
    redirect("/login")
  }

  // perform proper sanitization 
  const data = {
    name: formdata.get("name") ?? userProfile.name,
    nativeLng: formdata.get("native-language") ?? userProfile.LingoletteCredential?.nativeLng,
    targetLng: formdata.get("language-studying") ?? userProfile.LingoletteCredential?.targetLng,
    langLevel: formdata.get("level") ?? userProfile.LingoletteCredential?.languageLevel,
    grammaticalGender: formdata.get("grammatical-gender") ?? userProfile.grammatical_gender
  }

  // check if lingolette table properties are changed
}
