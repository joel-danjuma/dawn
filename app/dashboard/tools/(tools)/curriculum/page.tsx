"use client";
import { Curriculum } from "@/components/curriculum";
import { useChat } from "ai/react";
import React from "react";

const CurriculumPage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "https://localhost:3000/api/curriculum-generator",
    });
  return (
    <>
      <div>
        <h2 className=" regular-h2 text-center">Curriculum Generator</h2>
        <p className="regular-p header-p">
          Design Comprehensive And Customized Curriculums Aligned With
          Educational Standards And Learning Objectives.
        </p>
      </div>
      <Curriculum
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </>
  );
};

export default CurriculumPage;
