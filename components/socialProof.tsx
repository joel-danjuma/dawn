import Image from "next/image";
import UCL from "@/public/UCL_LOGO.png";
import VentureHue from "@/public/venturehue_logo.png";
import Idea from "@/public/Idea_logo.png";
import Santander from "@/public/santander_logo.svg";
import techCabal from "@/public/techCabal.png";

const SocialProof = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-[24px] p-6 lg:py-[52px] space-y-10 lg:px-[124px]">
      <div className="flex max-w-5xl justify-center lg:gap-32 gap-10 items-center">
        <a href="https://aizones.io/tool/dawn-ai-study">
          {" "}
          <Image
            alt="img1"
            width={250}
            height={60}
            src="https://aizones.io/static/media/Embed DARK.99f25d736afbf408832f.png"
          />
        </a>
        <a href="https://www.toolify.ai/tool/dawn/?ref=embed" target="_blank">
          <Image
            src="https://cdn.toolify.ai/featured_dark.svg"
            width="250"
            height="60"
            alt="DAWN AI : Reviews, Pricing, Core features, Use cases, alternatives"
          />
        </a>
      </div>

      <h3 className="text-center">
        We Collaborate With 250+ Leading Universities Companies and Backers
      </h3>
      <div className="lg:w-full lg:flex grid grid-flow-row grid-cols-2 place-items-center lg:justify-center lg:items-center lg:flex-row gap-[32px] space-y-4">
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
