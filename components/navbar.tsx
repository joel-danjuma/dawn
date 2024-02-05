import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import { MenuToggle } from "@/public/icons/menuToggle";
import { siteConfig } from "@/config/site";

const Nav = () => {
  return (
    <header>
      <Navbar
        maxWidth="full"
        className=" mx-auto container px-0 py-4 flex justify-between"
      >
        <NavbarContent justify="start">
          <Image src={logo} width={158} height={32} alt="logo"></Image>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-4">
          <NavbarItem className="lg:flex hidden">
            <Button className="bg-white text-black p-4">
              <Link href="#cta">Join Waitlist</Link>
            </Button>
          </NavbarItem>
          <NavbarMenuToggle icon={<MenuToggle />} />
        </NavbarContent>

        <NavbarMenu className="lg:px-[100px] px-4 py-12 space-y-4">
          {siteConfig.navItems.map((item, i) => (
            <NavbarMenuItem key={i}>
              <Link href={item.href}>{item.label}</Link>
            </NavbarMenuItem>
          ))}
          <NavbarItem className="lg:hidden flex">
            <Button className="bg-white text-black p-4">
              <Link href="#cta">Join Waitlist</Link>
            </Button>
          </NavbarItem>

          {/* <NavbarMenuItem>
                  About Us
                </NavbarMenuItem> */}
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Nav;
