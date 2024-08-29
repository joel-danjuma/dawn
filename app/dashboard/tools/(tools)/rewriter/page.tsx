"use client";
import Rewriter from "@/components/rewriter";
import { useChat } from "ai/react";
import React from "react";
import { ChatSection } from "@/app/dashboard/explore/components/ChatSection";

const RewriterPage = () => {
  const { input, handleInputChange, handleSubmit, messages, isLoading, data } =
    useChat({
      api: "/api/rewriter",
    });

  return (
    <>
      <div className="flex-col w-full text-center py-4">
        <h2 className=" regular-h2 text-center">Text Rewriter</h2>
        <p className="regular-p header-p">
          Seamlessly rewrite texts to create unique content for lessons,
          assignments, and assessments.
        </p>
      </div>
      <h4 className="regular-h3 py-4 px-8">Rewritten Text:</h4>
      <div className="h-[50%] overflow-auto rounded-xl bg-muted/50 p-4">
        <ChatSection messages={messages} isLoading={isLoading} />
      </div>
      <h4 className="regular-h3 py-4 px-8 ">Original Text:</h4>
      <Rewriter
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </>
  );
};

export default RewriterPage;
