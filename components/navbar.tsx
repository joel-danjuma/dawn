import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import logo from "../public/logo.svg";

const Nav = () => {
  return (
    <header>
      <Navbar
        maxWidth="full"
        className=" mx-auto container px-0 py-4 flex justify-between bg-opacity-90"
      >
        <NavbarContent justify="start">
          <Image src={logo} width={158} height={32} alt="logo"></Image>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
            <Button className="bg-white text-black p-2">Join Waitlist</Button>
          </NavbarItem>
          <NavbarMenuToggle />
          
        </NavbarContent>
      </Navbar>
    </header>
  );
};

export default Nav;
