import { SideNav } from "./ui/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
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
