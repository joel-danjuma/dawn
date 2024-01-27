// import {Logo1, Logo2, Logo3, Logo4, Logo5} from "./icons"
import { Logo1 } from "@/public/icons/logo1";
import { Logo2 } from "@/public/icons/logo2";
import { Logo3 } from "@/public/icons/logo3";
import { Logo4 } from "@/public/icons/logo4";
import { Logo5 } from "@/public/icons/logo5";

const SocialProof = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[24px] p-6 lg:py-[52px] lg:px-[124px]">
      <h3 className="text-center">We Collaborate With 250+ Leading Universities And Companies</h3>
      <div className="w-full flex justify-center items-center flex-row  gap-[24px]">
        <Logo1/>
        <Logo2/>
        <Logo3/>
        <Logo4/>
        <Logo5/>
      </div>
    </section>
  );
};

export default SocialProof;
