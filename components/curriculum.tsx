import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@nextui-org/react";
import React from "react";
import { ButtonGenerate } from "./buttonGenerate";

const items = [
  { label: "Grade Level", id: "grade_level" },
  { label: "Subject", id: "subject" },
  { label: "Course Description", id: "course_description" },
  { label: "Required Material", id: "required_material" },
  { label: "Grading Policy", id: "grading_policy" },
  { label: "Class Policy/Expectation", id: "class_policy_expectation" },
  { label: "Course Outline/What is Covered", id: "course_outline" },
  {
    label: "Additional Customization(Optional)",
    id: "additional_customization",
  },
];

interface CurriculumProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  input: string;
}

export const Curriculum = ({
  handleSubmit,
  handleInputChange,
  input,
}: CurriculumProps) => {
  return (
    <section className="w-full h-screen">
      {/* <Static /> */}

      <form className="w-full h-full gap-4 mt-10" onSubmit={handleSubmit}>
        {items.map((item) => (
          <div className="py-4 px-2" key={item.id}>
            <Input
              id={item.id}
              value={input}
              placeholder={item.label}
              onChange={handleInputChange}
              className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
            ></Input>
          </div>
        ))}
        <ButtonGenerate />
      </form>
    </section>
  );
};
