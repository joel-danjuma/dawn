"use server"

import { createClient } from "@/utils/supabase/server";
import { SideNav } from "./ui/Sidebar";
import { redirect } from "next/navigation";
import { DashboardContextCreator } from "./components/DashboardContextCreator";
import { db } from "@/lib/db";
import { LingoletteClient } from "@/lib/lingolette";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const authClient = createClient();

  const {
    error,
    data: { user },
  } = await authClient.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const lingoletteCredentials = await db.lingoletteCredential.findUnique({
    where: { userid: user!!.id },
  });

  if (!lingoletteCredentials) {
    console.error("Failed to fetch lingolette credentials");
    return redirect("/error?error=Error fetching user credentials")
  }

  const tokenResult = await LingoletteClient.call("org", "createUserSession", {
    userId: lingoletteCredentials?.id,
  });

  if (!tokenResult.data) {
    console.error("Lingolette error", tokenResult);
    return redirect("/error?error=Failed to create user and ai session. Try again later");
  }

  const token = tokenResult.data as { token: string };

  return (
    <div className="md:flex md:flex-row w-full h-screen relative p-4 gap-12">
      <div className="lg:block md:w-[270px]">
        <SideNav />
      </div>

      <div>
        <DashboardContextCreator user={user} token={token.token}>
          {children}
        </DashboardContextCreator>
      </div>
    </div>
  );
}

export default DashboardLayout;
