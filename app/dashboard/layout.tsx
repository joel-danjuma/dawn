import { createClient } from "@/utils/supabase/server";
import { SideNav } from "./ui/Sidebar";
import { redirect } from "next/navigation";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const authClient = createClient();

  const {error, data: {user}} = await authClient.auth.getUser();

  console.log(user);

  if (!user) {
    redirect("/usedawn")
  }
  return (
    <div className="md:flex md:flex-row w-full h-screen relative p-4 gap-12">
      <div className="lg:block md:w-[270px]">
        <SideNav />
      </div>

      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;
