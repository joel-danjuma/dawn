"use client";
import { ButtonGenerate } from "./buttonGenerate";
import { input, Textarea } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { useState } from "react";

interface BipGeneratorProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  input: string;
}
// interface BipGeneratorProps {
//   handleSubmit: React.FormEventHandler<HTMLFormElement>;
//   handleInputChange: (
//     e:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLTextAreaElement>
//   ) => void;
//   input: {
//     grade_level: string;
//     input: string;
//   };
// }

const BipGenerator = ({
  handleSubmit,
  handleInputChange,
  input,
}: BipGeneratorProps) => {
  const [grade_level, setGradeLevel] = useState(""); // Declare and initialize the grade_level state
  const [input_field, setInputField] = useState(""); // Declare and initialize the input_field state

  const handleGradeLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradeLevel(e.target.value); // Update the grade_level state when the input value changes
  };

  return (
    <section className="w-full h-fit py-4">
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
          value={input_field}
          minRows={2}
          onChange={handleInputChange}
          placeholder="Paste the text you want to rewrite here..."
          className="w-full resize-none border-0 shadow-none focus-visible:ring-0"
        />

        <ButtonGenerate />
      </form>
    </section>
  );
};

export default BipGenerator;
