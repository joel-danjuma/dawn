import Cta from "@/components/cta";
import About from "./ui/about";
import AboutHero from "./ui/hero";
import Team from "./ui/team";

const AboutPage = () => {
  return (
    <section className="container mx-auto lg:space-y-[100px] space-y-[40px]">
      <AboutHero />
      <About />
      <Team />
      <Cta />
    </section>
  );
};

export default AboutPage;
