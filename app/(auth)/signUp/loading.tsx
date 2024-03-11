import React from "react";
import img from "@/public/ai-teacher-loading.png";
import Image from "next/image";

const SignUpLoading = () => {
  return (
    <section>
      <Image src={img} width={1000} height={980} alt="loading screen" />
    </section>
  );
};

export default SignUpLoading;
