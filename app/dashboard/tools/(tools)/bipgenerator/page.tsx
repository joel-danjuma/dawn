"use client";
import { ChatSection } from "@/app/dashboard/explore/components/ChatSection";
import BipGenerator from "@/components/bipgenerator";
import { useChat } from "ai/react";

const BipGeneratorPage = () => {
  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      api: "/api/bipgenerator",
    });

  return (
    <>
      <ChatSection messages={messages} isLoading={isLoading} />
      <label>Grade Level</label>
      <BipGenerator
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </>
  );
};

export default BipGeneratorPage;
