import SectionTitle from "@/components/sectionTitle";
import { Card, CardFooter, CardBody } from "@nextui-org/react";
import Image from "next/image";
// import img from "./images/victor.JPG";
import Link from "next/link";
import { redirect } from "next/dist/server/api-utils";

const team = [
  {
    name: "Victor Ogunbiyi",
    role: "Founder & CEO",
    linkedIn: "https://www.linkedin.com/in/victor-ogunbiyi-7b945b289/",
    img: "https://utfs.io/f/b804492c-d74c-45e2-89f7-4162a344c590-1xcj24.JPG",
  },
  {
    name: "Oluwabukola Dada",
    role: "Co-Founder & Head of Educational Development",
    linkedIn: "https://www.linkedin.com/in/oluwabukola-dada-134424260/",
    img: "https://utfs.io/f/e1d3ad2c-879b-4c37-a9aa-64a1a2dd7cb6-bqhoyo.jpg",
  },
  {
    name: "Arome Ibrahim",
    role: "Metaverse Advisor",
    linkedIn: "https://www.linkedin.com/in/aromeibrahim/",
    img: "https://utfs.io/f/94f063f6-0cc0-404e-bea1-f1b51cc5cba9-drlaz7.JPG",
  },
  {
    name: "Adekemi Fasobu",
    role: "Project Manager",
    linkedIn: "https://www.linkedin.com/in/fasobu-adekemi/",
    img: "https://utfs.io/f/b4e50210-3c49-4875-a514-7df2fcf08159-vuz077.JPG",
  },
  {
    name: "Reginald Osei-Marfoh",
    role: "Chief Product Officer",
    linkedIn: "https://www.linkedin.com/in/reginald-osei-marfoh-514bab1a9/",
    img: "/user.png",
  },
  {
    name: "Leo",
    role: "UI Designer",
    linkedIn: "#",
    img: "/user.png",
  },
  {
    name: "Bolaji",
    role: "UX Designer",
    linkedIn: "#",
    img: "/user.png",
  },
  {
    name: "Kelvin Clark Owusu",
    role: "Full Stack & AI Developer",
    linkedIn: "https://www.linkedin.com/in/kelvin-clark-owusu-3b6778194/",
    img: "https://utfs.io/f/c2cd9015-e3c3-4027-9289-3bb6edfc7679-dgtgc1.JPG",
  },

  // {
  //   name: "Abi Joseph",
  //   role: "Brand Designer",
  //   linkedIn :"",
  //   img: "",
  // },
  // {
  //   name: "Sekinah Ibrahim",
  //   role: "Data Analyst",
  //   linkedIn :"",
  //   img: "",
  // },
  // {
  //   name: "Michael Jimoh",
  //   role: "Project Manager",
  //   linkedIn :"",
  //   img: "",
  // },
  // {
  //   name: "Ayobamidele O.",
  //   role: "Student Influencer",
  //   linkedIn :"",
  //   img: "",
  // },
  {
    name: "Danjuma Joel",
    role: "CTO / Full Stack Developer",
    linkedIn: "https://www.linkedin.com/in/joel-danjuma/",
    img: "https://utfs.io/f/4fa85cd3-1f55-4bad-89a0-8b83411e2d16-1x9b9g.jpg",
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
          <Card key={i} className=" space-y-4 col-span-1 row-span-1">
            <CardBody className="relative w-[340px] h-[340px] lg:w-[400px] lg:h-[400px]">
              <Link className="px-0" href={member.linkedIn}>
                <Image src={member.img} alt="img" fill className="px-0" />
              </Link>
            </CardBody>
            <CardFooter className=" px-4 flex-col space-y-2">
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
