import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-slate.svg";
import img from "@/public/signUpCardImg2.png";

const Card2 = () => {
  return (
    <Card
      radius="lg"
      className="flex-col lg:h-[732px] lg:w-[520px] w-full h-fit rounded-lg justify-between gap-2"
    >
      <CardHeader className="w-full flex  py-4 px-4 h-[40px] lg:justify-start justify-center items-center ">
        <Link href={"/"}>
          <Image src={logo} width={64} height={32} alt="logo"></Image>
        </Link>
      </CardHeader>

      <CardBody className="flex flex-col justify-center items-center p-0 px-4">
        <Image src={img} width={340} height={340} alt="img" />
        <div className="py-4 space-y-4">
          <h3 className="text-2xl font-bold">
            We cater for a diverse range of learners
          </h3>
          <p className="text-xl text-justify">
            With a range of learning profiles available, DAWN offers a
            personalized and flexible approach to education that empowers
            learners to achieve their full potential. Whether you are seeking to
            develop new skills, transition into a new career, or make a positive
            impact on society, DAWN has a profile that can help you achieve your
            goals.
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card2;
