"use server";

import { Header } from "./ui/Header";
import { Input, Select } from "./ui/FormFields";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { SubmitButton } from "./ui/SubmitButton";
import { updateProfile } from "@/app/actions/auth/profile";
import { auth } from "@/auth";

const DEFAULT_LINGOLETTE_CREDENTIALS = {
  targetLng: "en",
  nativeLng: "en",
  id: null,
  languageLevel: 2,
  userid: null,
};

async function Page() {
  const session = await auth();

  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
    include: {
      LingoletteCredential: true,
    },
  });

  if (!user) {
    redirect("/login");
  }

  const lingoletteCredential = user.LingoletteCredential ?? {
    ...DEFAULT_LINGOLETTE_CREDENTIALS,
    userid: user.id,
    userProfile: user,
  };

  return (
    <>
      <Header />
      <form action={updateProfile}>
        <div className="grid grid-cols-[auto_1fr] gap-5 border-1 border-white/20 rounded-md p-10 md:w-[601px] my-7">
          <div className="flex flex-col gap-7">
            <label htmlFor="name">Name</label>
            <label htmlFor="native-language">Native language</label>
            <label htmlFor="language-studying">Language studying</label>
            <label htmlFor="level">Level</label>
            <label htmlFor="grammatical-gender">Grammatical gender</label>
          </div>

          <div className="flex flex-col gap-7">
            <Input type="text" id="name" name="name" value={user.name || ""} />
            <Select
              name="naitve-language"
              id="naitve-language"
              defaultSelected={lingoletteCredential.nativeLng}
              options={[
                { label: "Igbo", value: "ig" },
                { label: "Yoruba", value: "yo" },
                { label: "English", value: "en" },
              ]}
            />
            <Select
              name="language-studying"
              id="language-studying"
              defaultSelected={lingoletteCredential.targetLng}
              options={[
                { label: "English", value: "en" },
                { label: "Catalan", value: "ca" },
                { label: "German", value: "de" },
                { label: "Spanish", value: "es" },
                { label: "French", value: "fr" },
              ]}
            />
            <Select
              name="level"
              id="level"
              defaultSelected={lingoletteCredential.languageLevel.toString()}
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Prefer not to say", value: "prefer-not-to-say" },
              ]}
            />
            <label htmlFor="t-speed">Speed</label>
            <Select
name="grammatical-gender"
              id="grammatical-gender"
              defaultSelected={user.grammatical_gender ?? "prefer-not-to-say"}
              options={[
                { label: "Very slow", value: "very-slow" },
                { label: "Slow", value: "slow" },
                { label: "Fast", value: "fast" },
              ]}
            />
          </div>
        </div>

        <div className="mt-4">
          <SubmitButton label="Update" />
        </div>
      </form>
    </>
  );
}

export default Page;
