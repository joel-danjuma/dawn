import Image from "next/image";
import { navItems } from "@/data";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="hidden md:flex md:flex-col h-[895px]  pt-3  w-[300px] items-center ml-[6px] mt-[35px]  text-[#ffffff] border-solid border-2 rounded-xl border-white">
      <div>
        <Image
          src="/logo.png"
          alt="DAWN LOGO"
          width={158}
          height={33}
          className="w-[120px]"
        />
      </div>

      <div className="flex flex-col py-2.5 items-start  gap-4 mt-24">
        {navItems.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className="flex items-center lg:gap-3.5 py-2 px-4  rounded-[15px]  hover:bg-gradient-to-r from-[#9A4FFF] to-[#A124B6]"
          >
            <div>
              <Image src={nav.img} alt={"img"} width={25} height={25} />
            </div>
            {nav.name}
          </Link>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-2 items-center">
        <Image src="/ai.png" alt="AI Image" width={205} height={136} />
        <p>Dawn Teachers</p>
      </div>
    </div>
  );
};
