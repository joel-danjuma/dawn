'use client'
// import { faqs } from "@/config/constants";
import SectionTitle from "./sectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
    {title:"Why DAWN  and Why education with blockchain and AI?",
description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
{
    title : "How can an DAWN  ensure the security and privacy of user data?",
    description : "some text"
},
{title : "What types of educational resources and services does DAWN offer?",
description : "some text"
}
]

const Faq = () => {
  return (
    <section id="faq" className="w-full h-full p-4 pb-20 ">
      <SectionTitle title="FAQs">
        The most common questions answered.
      </SectionTitle>
      <div className="w-full h-full container mx-auto flex flex-col items-center">
        <Accordion variant="light">
          <AccordionItem key="1" aria-label="Accordion 1" title={faqs[0].title}>
            {faqs[0].description}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title={faqs[1].title}>
            {faqs[1].description}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title={faqs[2].title}>
            {faqs[2].description}
          </AccordionItem>
          {/* <AccordionItem key="4" aria-label="Accordion 4" title={faqs[3].title}>
            {faqs[3].description}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title={faqs[4].title}>
            {faqs[4].description}
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6" title={faqs[5].title}>
            {faqs[5].description}
          </AccordionItem> */}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
