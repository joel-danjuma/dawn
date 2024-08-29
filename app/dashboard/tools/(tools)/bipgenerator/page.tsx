"use client";
import { ChatSection } from "@/app/dashboard/explore/components/ChatSection";
import BipGenerator from "@/components/bipgenerator";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
import { useChat } from "ai/react";

const BipGeneratorPage = () => {
  const [grade_level, setGradeLevel] = useState(""); // Declare and initialize the grade_level state
  const [input_field, setInputField] = useState(""); // Declare and initialize the input_field state
  const handleGradeLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradeLevel(e.target.value); // Update the grade_level state when the input value changes
  };
  // const handleInputFieldChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setInputField(e.target.value); // Update the input_field state when the textarea value changes
  // };
  const { input, handleInputChange, handleSubmit, messages, isLoading } =
    useChat({
      // api: "https://dawnaistudy.com/api/bip-generator",
      api: "http://localhost:3000/api/bip-generator",
      body: {
        grade_level: grade_level,
      },
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
      <form onSubmit={handleSubmit} className="w-full h-fit space-y-4">
        <Input
          id="grade_level"
          value={grade_level}
          onChange={handleGradeLevelChange} // Bind the handleGradeLevelChange function to the onChange event
          placeholder="Grade Level"
          className="w-full resize-none border-0 shadow-none focus-visible:ring-0"
        />

        <Textarea
          id="input"
          value={input}
          minRows={2}
          onChange={handleInputChange}
          placeholder="Brief description of student's strengths, behavioral challenges, and other relevant information..."
          className="w-full resize-none border-0 shadow-none focus-visible:ring-0"
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
      </form>
    </>
  );
};

export default BipGeneratorPage;
