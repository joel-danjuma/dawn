"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import ai from "@/public/ai.png";
import { useEffect } from "react";
import logo from "@/public/logo.svg";
import { signOut } from "next-auth/react";
import { HomeIcon } from "@/public/icons/home";
import { UserIcon } from "@/public/icons/user";
import { LogoutIcon } from "@/public/icons/Logoout";
import { CompassIcon } from "@/public/icons/compass";
import { FeedbackIcon } from "@/public/icons/feedback";
import { createClient } from "@/utils/supabase/client";
import { usePathname, useRouter } from "next/navigation";
import { HamburgerIcon } from "@/public/icons/Hamburger";
import { DawnToolsIcon } from "@/public/icons/dawnTools";
import { SignOutButton } from "@/components/signout-button";
import { ChatbotsIcon } from "@/public/icons/chatbots";
// import { LogoutIcon } from "@/public/icons/Logoout";

type NavLink = {
  title: string;
  icon: any;
  href: string;
};

const navLinks: NavLink[] = [
  { title: "Home", icon: HomeIcon, href: "/dashboard" },
  { title: "Explore", icon: CompassIcon, href: "/dashboard/explore" },
  { title: "Feedback", icon: FeedbackIcon, href: "" },
  { title: "Profile", icon: UserIcon, href: "/dashboard/profile" },
  { title: "Dawn Tools", icon: DawnToolsIcon, href: "/dashboard/tools" },
  { title: "Chatbots", icon: ChatbotsIcon, href: "/dashboard/chatbots" },
];

function SideNav() {
  const pathName = usePathname();
  // const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // closeNav onPathChange
    onClose();
  }, [pathName, onClose]);

  return (
    <nav className="backdrop-blur-lg border-1 border-white bg-white/[10%] lg:h-full flex lg:flex-col justify-between lg:justify-normal  lg:items-start text-white py-4 px-4 w-[200px] lg:px-0 rounded-[10px] p-4">
      <Image
        src={logo}
        width={158}
        height={33}
        alt="Dawn logo"
        className="lg:mb-[64px] md:mx-auto"
      />

      <div className="hidden lg:flex flex-col gap-[14px] w-full px-4">
        {navLinks.map((navLink, i) => (
          <Link
            key={i}
            href={navLink.href}
            className={clsx(
              "gap-3 flex transition-colors py-2 px-4 rounded-lg",
              {
                "bg-gradient-to-r from-[#CC00E3] from-2% to-[#70007D]/[54%]":
                  navLink.href == pathName,
              }
            )}
          >
            <div className="flex gap-4 text-md justify-start items-center w-full">
              <navLink.icon />
              {navLink.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-2 items-center">
        <Image src={ai} alt="AI Image" width={180} height={100} />
        <p>Dawn Teachers</p>
      </div>
      <div className="hidden w-full lg:flex justify-center mt-auto p-4">
        <SignOutButton />
      </div>

      <div className="lg:hidden">
        <Button onClick={onOpen}>
          <HamburgerIcon pathFill="white" />
        </Button>
      </div>
      <Modal
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
        className="w-[80%]"
      >
        <ModalContent>
          <ModalBody className="px-9">
            {navLinks.map((navLink, i) => (
              <Link
                key={i}
                href={navLink.href}
                className={clsx(
                  "flex gap-3 items-center transition-colors py-[5px] px-[7px] rounded-md",
                  {
                    "bg-clip-text text-transparent bg-gradient-to-r from-[#CC00E3] from-2% to-[#70007D]/[54%]":
                      navLink.href == pathName,
                  }
                )}
              >
                <navLink.icon />
                {navLink.title}
              </Link>
            ))}
            <SignOutButton />
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
}

export { SideNav };
