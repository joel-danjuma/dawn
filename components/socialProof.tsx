import Image from "next/image";
import UCL from "@/public/UCL_LOGO.png";
import VentureHue from "@/public/venturehue_logo.png";
import Idea from "@/public/Idea_logo.png";
import Santander from "@/public/santander_logo.svg";
import techCabal from "@/public/techCabal.png";

const SocialProof = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[24px] p-6 lg:py-[52px] space-y-10 lg:px-[124px]">
      <h3 className="text-center">
        We Collaborate With 250+ Leading Universities Companies and Backers
      </h3>
      <div className="lg:w-full flex justify-center items-center flex-row gap-[32px]">
        {/* <Logo1/> */}
        <Image src={UCL} height={"200"} width={"200"} alt="UCL"></Image>
        <Image
          src={VentureHue}
          height={"200"}
          width={"200"}
          alt="VentureHue"
        ></Image>
        <Image src={Idea} height={"200"} width={"200"} alt="IdeaLondon"></Image>
        <Image
          src={Santander}
          height={"200"}
          width={"200"}
          alt="SantanderUniversities"
        ></Image>
        <Image
          src={techCabal}
          height={"200"}
          width={"200"}
          alt="TechCabal"
        ></Image>
        {/* <Image src={UCL} height={"100"} width={"100"} alt="UCL"></Image> */}
      </div>
    </section>
  );
};

export default SocialProof;
