import Hero from "@/components/hero";
import SocialProof from "@/components/socialProof";
import Services from "@/components/services";
import ValueProps from "@/components/valueProps";
import Faq from "@/components/faq";
import Cta from "@/components/cta";

const Home = () => {
  return (
    <section className="container mx-auto lg:space-y-[100px] space-y-[40px]">
      <Hero />
      <SocialProof />
      <Services />
      <ValueProps />
      <Faq />
      <Cta />
    </section>
  );
};

export default Home;
