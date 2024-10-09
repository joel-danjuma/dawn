"use client";
import { ChatSection } from "@/app/dashboard/explore/components/ChatSection";
import Rewriter from "@/components/rewriter";
import { Textarea } from "@nextui-org/react";
import { useChat } from "ai/react";
import React from "react";

const RewriterPage = () => {
  const [input_field, setInputField] = React.useState("");

  const { handleInputChange, handleSubmit, messages, isLoading } = useChat({
    api: "https://dawnaistudy.com/api/text-rewriter",
    // api: "http://localhost:3000/api/bip-generator",
    body: {
      text: input_field,
    },
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
      <div className="h-[35%] overflow-auto rounded-xl bg-muted/50 p-4">
        <ChatSection messages={messages} isLoading={isLoading} />
      </div>
      <h4 className="regular-h3 py-4 px-8 ">Original Text:</h4>

      <form onSubmit={handleSubmit} className="w-full h-fit">
        <Textarea
          id="text"
          value={input_field}
          minRows={5}
          onChange={(e) => {
            setInputField(e.target.value);
            handleInputChange(e);
          }}
          placeholder="Paste the text you want to rewrite here..."
          className="w-full resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <>
          <button
            type="submit"
            className="mt-[20px] md:mt-[23px] mb-[60px] rounded-full w-full bg-white  "
          >
            <p className="regular-h2 py-[15px] bg-gradient-to-r from-[#721181] from-100% to-[#50055B] to-0% inline-block text-transparent bg-clip-text">
              Generate
            </p>
          </button>
        </>
        {/* <ButtonGenerate /> */}
      </form>
      {/* <Rewriter
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      /> */}
    </>
  );
};

export default RewriterPage;
