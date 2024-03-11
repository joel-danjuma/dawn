import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Button,
  Pagination,
  Select,
  SelectItem,
  Avatar,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-slate.svg";
import img from "@/public/signUpCardImg.png";

const Card1 = () => {
  return (
    <Card
      radius="lg"
      className="flex-col lg:h-[732px] lg:w-[520px] w-full h-fit rounded-lg"
    >
      <CardHeader className="w-full flex  py-2 px-4 h-[40px] lg:justify-start justify-center items-center ">
        <Link href={"/"}>
          <Image src={logo} width={64} height={32} alt="logo"></Image>
        </Link>
      </CardHeader>

      <CardBody className="flex flex-col justify-center items-center py-1 p-0 px-4">
        <Image src={img} width={400} height={400} alt="img" />
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Join thousands of learners</h3>
          <p className="text-xl text-justify">
            Dawn offers a combination of Early Childhood Education (K1-K3),
            Primary Education (Grade 1-6), Middle School (Grade 7-8), High
            School (Grade 9-12), Higher Education (College/University),
            Postgraduate Education (Master&apos;s, Ph.D.), courses and also Web3
            education
          </p>
          <div className="flex gap-4 items-center pb-2">
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Card1;
