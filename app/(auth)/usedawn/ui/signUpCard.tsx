"use client";
import {
  Input,
  Button,
  Pagination,
  Select,
  SelectItem,
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
// import SignUpCard2 from "./signUpCard2";
// import SignUpCard3 from "./signUpCard3";
// import SignUpCard4 from "./signUpCard4";
import React, { useState, useTransition } from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";
import Card2 from "./card2";
import Card1 from "./card1";
import { CustomCheckbox } from "./checkbox";
import { LoadingIcon } from "@/public/icons/loading";
import { signup } from "@/app/actions/auth/action";

// eslint-disable-next-line @next/next/no-async-client-component
function SignUpCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");
  const [clientDesc, setClientDesc] = useState("");
  const { isOpen, onOpen } = useDisclosure();
  const [_, startTransition] = useTransition();

  const [currentPage, setCurrentPage] = React.useState(1);

  const courses = [
    "Primary / middle school",
    "Higher education",
    "Post graduate",
    "Professional",
    "Web-3",
  ];

  const handlePaginationChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <div className="flex-col space-y-1 justify-start items-center">
            <h2 className="text-[18px] text-white font-bold">Identification</h2>
            <Input
              value={email}
              label="Email"
              type="email"
              onValueChange={setEmail}
            />
            <Input
              value={password}
              label="Password"
              type="password"
              onValueChange={setPassword}
            />
          </div>
        );
      case 2:
        return (
          <div className="flex-col space-y-1 justify-start items-center">
            <h2 className="text-[18px] text-white font-bold">
              Choose Your Learning Path
            </h2>
            <h3 className="lg:text-[50px] text-[32px] text-white">
              What would you like to learn?
            </h3>
            <Select
              className="py-4"
              label="Select Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              {courses.map((course, i) => (
                <SelectItem key={i}>{course}</SelectItem>
              ))}
            </Select>
          </div>
        );
      case 3:
        return (
          <div className="flex-col space-y-1 justify-start items-center">
            <h2 className="text-[18px] text-white font-bold">
              Customize your learning profile
            </h2>
            <h3 className="lg:text-[32px] text-[24px] lg:py-2 py-4 text-white">
              What best describes you ?
            </h3>
            <CustomCheckbox selected={clientDesc} setSelected={setClientDesc} />
          </div>
        );

      default:
        return null;
    }
  };
  const renderCardBody = () => {
    switch (currentPage) {
      case 1:
      case 2:
        return <Card1 />;
      case 3:
        return <Card2 />;
      default:
        return null;
    }
  };

  function authenticate() {
    onOpen();
    startTransition(async () => {
      onOpen();
      const formdata = new FormData();
      formdata.set("email", email);
      formdata.set("password", password);
      formdata.set("client_description", clientDesc);
      formdata.set("course", course);
      // await signup(formdata);
    });
  }

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
              total={3}
              page={currentPage}
              className="text-[#FFFFFF]"
              onChange={handlePaginationChange}
              isDisabled={true}
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
              onPress={function () {
                if (currentPage < 3) {
                  setCurrentPage(currentPage + 1);
                } else if (currentPage >= 3) {
                  authenticate();
                }
              }}
              className={`lg:text-2xl text-lg lg:p-8 p-4 flex  items-center  w-full rounded-lg bg-[#FFFFFF] text-black`}
            >
              <p className="text-center"> Continue →</p>
            </Button>
          </div>
        </div>
        <div className="w-full h-full">{renderCardBody()}</div>
        <Modal
          isOpen={isOpen}
          placement="center"
          className="bg-white"
          isDismissable={false}
          isKeyboardDismissDisabled={false}
          hideCloseButton={true}
        >
          <ModalContent>
            <ModalBody className="bg-white flex flex-col items-center">
              <div className="animate-spin">
                <LoadingIcon height={70} width={70} />
              </div>
              <p className="text-black">
                Please wait while we get you started....
              </p>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default SignUpCard;
