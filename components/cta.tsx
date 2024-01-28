import { Button } from "@nextui-org/react";
import React from "react";
import img1 from "../public/ctaImg1.png"
import img2 from "../public/ctaImg2.png"
import img3 from "../public/ctaImg3.png"
import img4 from "../public/ctaImg4.png"
import Image from "next/image";

const Cta = () => {
  return (
    <section id="cta" className="p-4 relative">
      <div className="absolute -top-[220px] left-[0px] z-0 lg:flex hidden">
        <Image src={img1} alt="img1" width={428} height={428}/>
      </div>
      <div className="absolute -top-[220px] -right-[90px] z-0 lg:flex hidden">
      <Image src={img2} alt="img2" width={500} height={500}/>
      </div>
      <div className="absolute -bottom-[120px] left-64 z-0 lg:flex hidden">
      <Image src={img3} alt="img3" width={240} height={240}/>
      </div>
      <div className="absolute -bottom-12 right-32 z-0 lg:flex hidden">
      <Image src={img4} alt="img4" width={252} height={252}/>
      </div>
    <div className="w-full lg:h-[420px] h-fit flex flex-col justify-center items-center text-center space-y-[64px] z-20">
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
