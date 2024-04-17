import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

function Header() {
  return (
    <div>
      <h4 className="font-[600] text-[28px]">Profile</h4>
      <Breadcrumbs>
        <BreadcrumbItem href="/dashboard">Dashboard</BreadcrumbItem>
        <BreadcrumbItem href="/dashboard/profile">Profile</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
}

export {Header}
