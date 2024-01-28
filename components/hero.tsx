import { Button } from "@nextui-org/react";
// import heroImg from "../public/hero.svg";
import Image from "next/image";
import img from "../public/hero-img.png"

const heroImg = process.env.HERO_IMG || img

const features = [
  { headline: "10k", subtitle: "active students enrolled" },
  { headline: "200+", subtitle: "On-Demand Courses" },
  { headline: "180+", subtitle: "Countries Around The world" },
];

const Hero = () => {
  return (
    <section className="flex lg:flex-row flex-col p-4 justify-between lg:gap-[180px] gap-[60px]">
      <div className="w-full text-start flex-col space-y-[32px]">
        <h1 className="font-bold text-[18px]">INTRODUCING DAWN AI</h1>
        <h2 className="lg:text-7xl text-3xl font-bold">
          Revolutionizing <br />
          Education with <br />
          Blockchain & AI
        </h2>
        <p className="text-[18px] leading-tight">
          Welcome to DAWN, the EDtech platform that is changing the way we
          learn. Built on blockchain technology and powered by AI, our platform
          is designed to make education accessible to everyone, regardless of
          their location, language, or abilities.
        </p>
        <div className="w-full flex gap-2 justify-between">
          {features.map((feature, i) => {
            return (
              <span key={i} className="w-full">
                <h3 className="text-2xl font-bold">{feature.headline}</h3>
                <p className="text-sm">{feature.subtitle}</p>
              </span>
            );
          })}
        </div>
        <div className="space-x-5 flex-row">
          <Button className="bg-white p-2 text-black">Join Waitlist</Button>
          <span>
            Learn More
            
          </span>
      
        </div>
      </div>
      <div className="w-full flex justify-center items-center relative">

        <Image src={heroImg} alt="img" height={974} width={894} className="z-10"/>
     
      </div>
    </section>
  );
};

export default Hero;
