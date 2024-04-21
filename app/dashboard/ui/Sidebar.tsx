"use client";

import logo from "@/public/logo.svg";
import Image from "next/image";
import { HomeIcon } from "@/public/icons/home";
import { FeedbackIcon } from "@/public/icons/feedback";
import { UserIcon } from "@/public/icons/user";
import { CompassIcon } from "@/public/icons/compass";
import Link from "next/link";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { createClient } from "@/utils/supabase/client";
import { LogoutIcon } from "@/public/icons/Logoout";
import { HamburgerIcon } from "@/public/icons/Hamburger";
import { useEffect } from "react";

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
];

function SideNav() {
  const pathName = usePathname();
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // closeNav onPathChange
    onClose();
  }, [pathName, onClose]);

  function signOut() {
    createClient()
      .auth.signOut()
      .then(() => router.push("/"));
  }

  return (
    <nav className="backdrop-blur-lg border-1 border-white bg-white/[10%] md:h-full flex md:flex-col justify-between md:justify-normal  md:items-start text-white py-4 px-4 md:px-0 rounded-[10px] mx-auto">
      <Image
        src={logo}
        width={158}
        height={33}
        alt="Dawn logo"
        className="md:mb-28 md:mx-auto"
      />

      <div className="hidden md:flex flex-col gap-[18px] w-full">
        {navLinks.map((navLink, i) => (
          <Link
            key={i}
            href={navLink.href}
            className={clsx(
              "ms-7 flex gap-3 items-center transition-colors py-[5px] px-[7px] rounded-s-[10px]",
              {
                "bg-gradient-to-r from-[#CC00E3] from-2% to-[#70007D]/[54%]":
                  navLink.href == pathName,
              }
            )}
          >
            <navLink.icon />
            {navLink.title}
          </Link>
        ))}
      </div>

      <div className="hidden md:block mt-auto ms-7">
        <Button className="px-7" onClick={signOut}>
          <LogoutIcon />
          Log out
        </Button>
      </div>

      <div className="md:hidden">
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
            <Button className="px-7" onClick={signOut}>
              <LogoutIcon />
              Log out
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </nav>
  );
}

export { SideNav };
