import bg from "@/public/about-bg.svg";
import img from "@/public/aboutimg.svg";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="w-full flex lg:flex-row flex-col p-4 justify-between lg:gap-[180px] gap-[60px]">
      <div className="w-full flex-col text-start space-y-4 py-12">
        <span className="text-xl text-gray-500">About Us</span>
        <h1 className="lg:text-[80px] text-[48px] font-bold">Dawn AI Study</h1>
        <p className="lg:text-2xl text-xl">
          The DAWN platform features a unique meta-human educator and AI
          recruiter known as DAWN AI STUDY. She serves as a bridge between the
          real world and metaverse learning, earning, and employment approaches.
          As a tech futurist, she represents an example of how meta-humans can
          be utilized on social media.
        </p>
      </div>
      <div className="w-full flex justify-center items-center relative">
        <Image
          src={img}
          alt="img"
          height={1004}
          width={1004}
          className="z-10"
        />
        <Image src={bg} alt="img" fill className="z-0" />
      </div>
    </section>
  );
};

export default AboutHero;
