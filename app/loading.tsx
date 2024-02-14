"use client";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spinner size="lg" color="default" />
    </div>
  );
};

export default Loading;
