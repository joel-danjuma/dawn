"use client";
import { ChatSection } from "@/app/dashboard/explore/components/ChatSection";
import BipGenerator from "@/components/bipgenerator";
import { useChat } from "ai/react";

const BipGeneratorPage = () => {
  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      api: "http://localhost:3000/api/bip-generator",
    });

  return (
    <>
      <div className="flex-col w-full text-center py-4">
        <h2 className="regular-h2 text-center">
          Behavior Intervention Plan Generator
        </h2>
        <p className="regular-p header-p">
          Generate a comprehensive Behavior Intervention Plan (BIP) tailored to
          the specific needs of the student based on the provided grade level
          and input text.
        </p>
      </div>
      <div className="h-[50%] overflow-auto rounded-xl bg-muted/50 p-4">
        <ChatSection messages={messages} isLoading={isLoading} />
      </div>
      <div className="py-5">
        <label>Grade Level</label>
      </div>
      <BipGenerator
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </>
  );
};

export default BipGeneratorPage;
