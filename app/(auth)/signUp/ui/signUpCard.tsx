"use client";
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
// import SignUpCard2 from "./signUpCard2";
// import SignUpCard3 from "./signUpCard3";
// import SignUpCard4 from "./signUpCard4";
import React from "react";
import logo from "@/public/logo.svg";
import img from "@/public/signUpCardImg.png";
import Link from "next/link";
import Image from "next/image";
import Card2 from "./card2";
import Card1 from "./card1";
import { CustomCheckbox } from "./checkbox";

const SignUpCard = () => {
  const courses = ["course 1", "course 2", "course 3", "course 4", "course 5"];

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePaginationChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex-col space-y-1 justify-start items-center">
            <h2 className="text-[18px] text-white font-bold">
              Choose Your Learning Path
            </h2>
            <h3 className="lg:text-[50px] text-[32px] text-white">
              What would you like to learn?
            </h3>
            <Select className="py-4" label="Select Course">
              {courses.map((course, i) => (
                <SelectItem key={i}>{course}</SelectItem>
              ))}
            </Select>
          </div>
        );
      case 2:
        return (
          <div className="flex-col space-y-1 justify-start items-center">
            <h2 className="text-[18px] text-white font-bold">
              Customize your learning profile
            </h2>
            <h3 className="lg:text-[32px] text-[24px] lg:py-2 py-4 text-white">
              What best describes you ?
            </h3>
            <CustomCheckbox />
          </div>
        );

      // case 3:
      //   return <SignUpCard3 />;
      // case 4:
      //   return <SignUpCard4 />;
      default:
        return null;
    }
  };
  const renderCardBody = () => {
    switch (currentPage) {
      case 1:
        return <Card1 />;
      case 2:
        return <Card2 />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className=" lg:container lg:mx-auto w-full flex lg:flex-row flex-col p-4 justify-between lg:gap-[80px] gap-[40px]">
        <div className="w-full lg:relative p-4 flex-col space-y-8">
          <div>
            <Link href={"/"}>
              <Image src={logo} width={140} height={28} alt="logo"></Image>
            </Link>
          </div>
          {/* Pagination Section */}
          <div className="flex justify-start">
            <Pagination
              loop
              total={2}
              // color="secondary"
              page={currentPage}
              className="text-[#FFFFFF]"
              onChange={handlePaginationChange}
            />
          </div>
          <div className="flex justify-start max-w-lg">
            <h3 className="text-md font-bold">{` Step ${currentPage} of 2`}</h3>
          </div>

          <div className="">{renderPage()}</div>

          <div
            className={`w-full py-2 flex items-center  gap-8 ${
              currentPage === 1 ? "justify-center" : "justify-between"
            } `}
          >
            {currentPage > 1 && (
              <Button
                onPress={() => setCurrentPage((prev) => prev - 1)}
                className={
                  "lg:text-2xl text-lg lg:p-8 p-4 flex justify-center items-center w-full rounded-lg"
                }
              >
                ← Back
              </Button>
            )}
            <Button
              onPress={() =>
                setCurrentPage((prev) => (prev < 2 ? prev + 1 : prev))
              }
              className={`lg:text-2xl text-lg lg:p-8 p-4 flex  items-center  w-full rounded-lg bg-[#FFFFFF] text-black`}
            >
              <p className="text-center"> Continue →</p>
            </Button>
          </div>
        </div>
        <div className="w-full h-full">{renderCardBody()}</div>
      </div>
    </>
  );
};

export default SignUpCard;
