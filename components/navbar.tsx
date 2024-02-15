"use client";
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
import React from "react";
import { MenuToggle } from "@/public/icons/menuToggle";
import { siteConfig } from "@/config/site";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <header>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className=" mx-auto container px-0 py-4 flex justify-between"
      >
        <NavbarContent justify="start">
          <Image src={logo} width={158} height={32} alt="logo"></Image>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-4">
          <NavbarMenuToggle className="text-4xl" icon={<MenuToggle />} />
          <NavbarItem className="lg:flex hidden">
            <Button className="bg-white text-black p-4">
              <Link
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                href="#cta"
              >
                Join Waitlist
              </Link>
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="lg:px-[100px] px-4 py-12 space-y-4">
          {siteConfig.navItems.map((item, i) => (
            <NavbarMenuItem key={i}>
              <Link
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarItem className="lg:hidden flex">
            <Button className="bg-white w-full text-black p-4">
              <Link
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
                href="#cta"
              >
                Join Waitlist
              </Link>
            </Button>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </header>
  );
};

export default Nav;
