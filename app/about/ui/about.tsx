import bg from "@/public/about-bg.svg";
import img from "@/public/valuePropImg2.png";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full flex lg:flex-row flex-col p-4 justify-between lg:gap-[180px] gap-[60px]">
      <div className="w-full grid place-items-center grid-flow-row grid-cols-1 grod-rows-2 relative">
        <span className="text-2xl col-auto row-span-1">
          <h1 className="text-8xl font-bold col-auto row-span-1">1M</h1> <br />{" "}
          Dawn Users
        </span>
        <Image
          src={img}
          alt="img"
          height={448}
          width={432}
          className="z-10 col-span-1 row-span-1"
        />
      </div>
      <div className="w-full flex-col text-start space-y-4 py-8">
        <span className="text-4xl">
          Empowering Inclusive Education with Cutting-edge AI
        </span>
        <h1 className="text-2xl text-gray-500">
          Revolutionizing Learning For All
        </h1>
        <p>
          Victor Ogunbiyi, founder of DAWN, was inspired to create the platform
          after witnessing his friends&apos; struggles with dyslexia and autism,
          fueling his ambition to make education accessible to all. DAWN AI
          Study, a cutting-edge bot, provides real-time solutions, translates
          courses into localized content, and connects learners with tutors.
          It&apos;s dyslexia-friendly, offering text-to-speech and sign
          translation, and provides personalized learning via AI. DAWN AI STUDY
          gathers valuable data to improve the platform, reflecting DAWN&apos;s
          commitment to personalized education. The future of education lies in
          the intersection of technology and humanity, and DAWN AI STUDY
          represents an exciting step in that direction.
        </p>
      </div>
    </section>
  );
};

export default About;
