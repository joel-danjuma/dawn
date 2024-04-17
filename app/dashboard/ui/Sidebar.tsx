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
import { Button } from "@nextui-org/react";
import { createClient } from "@/utils/supabase/client";
import { LogoutIcon } from "@/public/icons/Logoout";

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

  function signOut() {
    createClient()
      .auth.signOut()
      .then(() => router.push("/"));
  }

  return (
    <nav className="backdrop-blur-lg border-1 border-white bg-white/[10%] h-full flex flex-col items-start text-white py-4 rounded-[10px]">
      <Image
        src={logo}
        width={158}
        height={33}
        alt="Dawn logo"
        className="mb-28 mx-auto"
      />

      <div className="flex flex-col gap-[18px] w-full">
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

      <div className="mt-auto ms-7">
        <Button className="px-7" onClick={signOut}><LogoutIcon />Log out</Button>
      </div>
    </nav>
  );
}

export { SideNav };
