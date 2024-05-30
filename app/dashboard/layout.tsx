"use server";

// import { createClient } from "@/utils/supabase/server";
import { SideNav } from "./ui/Sidebar";
import { redirect } from "next/navigation";
import { DashboardContextCreator } from "./ui/DashboardContextCreator";
import { db } from "@/lib/db";
// import { LingoletteClient } from "@/lib/lingolette";
import { auth } from "@/auth";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
  });

  if (!user) {
    redirect("/login");
  }

  // const token = tokenResult.data as { token: string };
  const token = session?.user.token;

  return (
 <div className="lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-1 w-full h-screen relative p-3 md:p-4 gap-4 md:gap-12 overflow-hidden">
      <div className="lg:block lg:w-max">
        <SideNav />
      </div>

      <div className="h-[90%] lg:h-full bg-transparent">
        {token && (
          <DashboardContextCreator user={user} token={token}>
            {children}
          </DashboardContextCreator>
        )}
      </div>
    </div>
  );
}

export default DashboardLayout;
