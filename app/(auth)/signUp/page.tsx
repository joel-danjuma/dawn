// 'use client'
import React from "react";
import { Card } from "@nextui-org/react";
import SignUpCard from "./ui/signUpCard";

const SignUp = () => {
  return (
    <section className="w-full max-w-[1440px] flex items-center justify-center h-full  ">
      <div className="w-full h-full py-4 flex-col space-y-8">
        <SignUpCard />
      </div>
    </section>
  );
};

export default SignUp;
