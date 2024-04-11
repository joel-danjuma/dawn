
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LoadingImage } from "./components/LoadingImg";

async function Page() {
  const authClient = createClient();

  const {
    error,
    data: { user },
  } = await authClient.auth.getUser();

  if (user === null) {
    redirect("/usedawn");
  }

  return (
    <LoadingImage />
  );
}

export default Page;
