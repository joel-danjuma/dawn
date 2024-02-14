"use client";
// import { faqs } from "@/config/constants";
import SectionTitle from "./sectionTitle";
import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
  {
    title: "What is DAWN?",
    description:
      "DAWN is an EDtech platform that leverages blockchain technology and AI to make education and job opportunities accessible to everyone, regardless of location, language, or abilities.",
  },
  {
    title: "What sets DAWN apart from other Edtech platforms?",
    description:
      "DAWN utilizes cutting-edge technologies such as blockchain, natural language processing, machine learning, virtual and augmented reality, and AI recruitment services to provide a unique and engaging learning experience.",
  },
  {
    title: "How does DAWN make education accessible to learners worldwide?",
    description:
      "DAWN transcribes courses into localized languages through the use of AI, making educational resources accessible to learners in their native tongue.",
  },
  {
    title:
      "Is DAWN's platform inclusive to individuals with learning disabilities?",
    description:
      "Yes, DAWN is committed to creating a platform that is inclusive and accessible to everyone. Our platform is dyslexia-friendly, incorporating a specialized font that is easier for individuals with dyslexia to read and comprehend. We also incorporate closed captioning and sign language interpretation into our resources and courses, making education accessible to individuals with hearing problems and speech disorders.",
  },
  {
    title: "Can job seekers benefit from DAWN's platform?",
    description:
      "Yes, DAWN offers AI recruitment services to connect job seekers with opportunities that match their skills and experience. Job seekers can also create a profile, upload a resume, and receive job alerts and notifications.",
  },
  {
    title: "How can learners benefit from DAWN's platform?",
    description:
      "Learners can access course materials, track progress, and earn badges. Additionally, learners can participate in the Learn and Earn program in the metaverse, where they can earn tokens by completing educational challenges and tasks in virtual worlds.",
  },
  {
    title: "Can content creators earn tokens on DAWN's platform?",
    description:
      "Yes, content creators can create and publish educational content and earn tokens based on engagement and views.",
  },
  {
    title: "How does DAWN's tokenized affiliate marketing program work?",
    description:
      "Users can earn tokens by referring new users to our platform. This creates a collaborative ecosystem that benefits everyone involved, including individuals, content creators, and outsourcing companies.",
  },
  {
    title: "Is there a social platform on DAWN's platform?",
    description:
      "Yes, learners can connect with educators and other learners through a social platform.",
  },
  {
    title: "How can educators benefit from DAWN's platform?",
    description:
      "Educators can access a course creation tool, upload courses, questions, and resources, and view insights and analytics on course performance. They can also add closed captioning and sign language interpretation to courses to make them more accessible to learners.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="w-full h-full p-4  ">
      <SectionTitle title="FAQs">
        The most common questions answered.
      </SectionTitle>
      <div className="w-full h-full container mx-auto flex flex-col items-center">
        {faqs.map((faq, i) => (
          <Accordion key={i} variant="light">
            <AccordionItem key="1" aria-label="Accordion 1" title={faq.title}>
              {faq.description}
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
