import SectionTitle from "@/components/sectionTitle";
import { Card, CardFooter, CardBody } from "@nextui-org/react";
import Image from "next/image";
import img from "@/public/team-img.svg";

const team = [
  {
    name: "Victor Ogunbiyi",
    role: "Founder & CEO",
    img: "",
  },
  {
    name: "Adekunle Adeyemi",
    role: "Co-Founder & Head of Community",
    img: "",
  },
  {
    name: "Arome Ibrahim",
    role: "Advisor",
    img: "",
  },
  {
    name: "Enemor Gabriel",
    role: "CPO",
    img: "",
  },
  {
    name: "Abimbola Abe",
    role: "Story Teller & Digital Marketer",
    img: "",
  },
  {
    name: "Abi Joseph",
    role: "Brand Designer",
    img: "",
  },
  {
    name: "Sekinah Ibrahim",
    role: "Data Analyst",
    img: "",
  },
  {
    name: "Michael Jimoh",
    role: "Project Manager",
    img: "",
  },
  {
    name: "Ayobamidele O.",
    role: "Student Influencer",
    img: "",
  },
  {
    name: "Danjuma Joel",
    role: "Full Stack Developer",
    img: "",
  },
];

const Team = () => {
  return (
    <section>
      <SectionTitle title="Meet The Dawn Team">
        Revolutionising EdTech
      </SectionTitle>
      <div className="grid lg:grid-cols-3 grid-cols-1 grid-flow-row place-items-center gap-4 lg:p-0 px-4">
        {team.map((member, i) => (
          <Card key={i} className="px-4 space-y-4 col-span-1 row-span-1">
            <CardBody className="relative w-[340px] h-[340px] lg:w-[380px] lg:h-[380px]">
              <Image src={img} alt="img" fill />
            </CardBody>
            <CardFooter className="flex-col space-y-2">
              <p>{member.name}</p>
              <p>{member.role}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Team;
