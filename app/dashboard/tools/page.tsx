"use client";
import React from "react";
import Image from "next/image";
import { features, favourite, allTools } from "@/data";
import Link from "next/link";
import { Card } from "@nextui-org/react";
import { title } from "process";
import button from "@/public/Button.png";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import BipGenerator from "@/components/bipgenerator";
import { ButtonGenerate } from "@/components/buttonGenerate";
import { Iepgenerator } from "@/components/iepgenerator";
import Informative from "@/components/informative";
import { LessonPlaner } from "@/components/lessonplan";
import { Professional } from "@/components/professional";
import ResearchAssistance from "@/components/researchassistance";
import Rewriter from "@/components/rewriter";
import Rubic from "@/components/rubic";
import Sciencelab from "@/components/sciencelab";
import SyllabusGenerator from "@/components/syllabusgenerator";
import { useRouter } from "next/navigation";

const Landing = () => {
  // modify the landing page such that it maps over the allTools array and renders a Card component for each tool

  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); //Define mobile screen width less than 768px
    };
    handleResize(); //check on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full h-full flex-2 text-white container mx-auto mt-24">
      <div className="w-full flex flex-col items-center">
        <div className="flex max-md:w-[80vw] font-semibold text-[15px] md:w-[341px] bg-black rounded-full md:rounded-[15px] gap-5">
          <button className="button_gradient py-[8px] w-1/2 md:px-8 md:py-[23px] rounded-full md:rounded-[15px] ">
            Dawn School
          </button>
          <button className="active:button_gradient rounded-full items-center w-1/2 ">
            Dawn Student
          </button>
        </div>
        <div className=" w-[80vw] mt-2.5 pl-5 mb-5 bg-black md:hidden flex justify-between rounded-full gap-5">
          <input
            type="search"
            name=""
            id=""
            className="py-1 outline-none bg-inherit w-3/4 rounded-full"
          />
          <Image
            src={button}
            alt="search"
            width={25}
            height={25}
            className="flex-1/4"
          />
        </div>
      </div>
      <div className="w-full h-[334px] md:my-24  items-center max-sm:text-center rounded-[15px] bg-black py-10 px-1 lg:px-16 justify-around grid grid-cols-4">
        {features.map((feature) => (
          <div key={feature.id} className="flex  flex-col items-center">
            <Image src={feature.thumbnail} alt="icon" width={25} height={25} />
            <p className="regular-12 mt-3">{feature.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-sm:mt-24 max-sm:text-center">
        <div className="flex items-center gap-2 ml-8">
          <h2 className="regular-h3">Favorites</h2>
          <h3 className="regular-h3 hidden md:flex bg-gradient-to-r from-[#9A4FFF] from-0% to-[#A124B6] to-100% lg:inline-block text-transparent bg-clip-text">
            Change Order
          </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 mt-5 w-full">
          {favourite.map((item) => {
            const { id, title, href, desc } = item;
            const text = isMobile ? desc.substring(0, 50) + "..." : desc;
            return (
              <Link
                href={`/dashboard/tools/${href}`}
                key={item.id}
                className="box"
              >
                <div className="rounded-lg p-4 bg-black h-[200px] ">
                  <h4 className="regular-15">{item.title}</h4>
                  <p className="regular-12 mt-5">{text}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="regular-20 ml-8">All Tools</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 max-sm:text-justify gap-4 mt-5">
          {allTools.map((tool) => {
            const { id, title, desc, href } = tool;
            const text = isMobile ? desc.substring(0, 50) + "..." : desc;

            return (
              <Link key={id} href={`/dashboard/tools/${tool.href}`}>
                <Card className={`bg-black h-[200px] min-w-fit p-2 text-start`}>
                  <p className="regular-15">{tool.title}</p>

                  <p className="regular-12 mt-5"> {text}</p>
                </Card>
              </Link>
            );
          })}
        </div>
        {/* {allTools.map((tool) => {
                <Modal
                  backdrop="blur"
                  size="full"
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalBody className="">{tool.component}</ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            Action
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </Card>
            );
          })} */}
      </div>
    </section>
  );
};

export default Landing;
