import logo from "@/public/logo.svg";
import Image from "next/image";
import { HomeIcon } from "@/public/icons/home";
import { FeedbackIcon } from "@/public/icons/feedback";
import { UserIcon } from "@/public/icons/user";
import { CompassIcon } from "@/public/icons/compass";
import Link from "next/link";

type NavLink = {
  title: string;
  icon: any;
  href: string;
};

const navLinks: NavLink[] = [
  { title: "Home", icon: HomeIcon, href: "" },
  { title: "Explore", icon: CompassIcon, href: "" },
  { title: "Feedback", icon: FeedbackIcon, href: "" },
  { title: "Profile", icon: UserIcon, href: "" },
];

function SideNav() {
  return (
    <nav className="border-1 border-white bg-white/[4%] h-full lg:flex flex-col items-start text-white py-4 rounded-[10px]">
      <Image
        src={logo}
        width={158}
        height={33}
        alt="Dawn logo"
        className="mb-28 mx-auto"
      />

      <div className="flex flex-col gap-3 bg-red-700 w-full">
        {navLinks.map((navLink) => (
          <Link
            href={navLink.href}
            className="bg-emerald-700 ps-7 flex gap-3 items-center h-[35px] transition-colors"
          >
            <navLink.icon />
            {navLink.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export { SideNav };
