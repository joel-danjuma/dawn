import { Button } from "@nextui-org/react";
import React from "react";
import {CtaImg1} from "@/public/icons/ctaImg1"

const Cta = () => {
  return (
    <section className="p-4 relative">
      <div className="absolute -top-[140px] -left-[84px] z-0 lg:flex hidden">
        <CtaImg1/>
      </div>
      <div className="absolute -top-[174px] -right-[80px] z-0 lg:flex hidden">
        <CtaImg1/>
      </div>
      <div className="absolute -bottom-[200px] -left-10 z-0 lg:flex hidden">
        <CtaImg1 />
      </div>
      <div className="absolute -bottom-12 right-20 z-0 lg:flex hidden">
        <CtaImg1/>
      </div>
    <div className="w-full h-[700px] flex flex-col justify-center items-center text-center space-y-[64px] z-20">
      <p className="lg:text-7xl text-2xl z-10">
      Join our waitlist to be the first <br />
       to know when DAWN is <br />
        available!
      </p>
      <Button className="bg-white text-black p-2">
        Join Waitlist
      </Button>

    </div>

  </section>
  )
  
};

export default Cta;
