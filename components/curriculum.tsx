"use client";
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
  const [gradeLevel, setGradeLevel] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [courseDescription, setCourseDescription] = React.useState("");
  const [requiredMaterial, setRequiredMaterial] = React.useState("");
  const [gradingPolicy, setGradingPolicy] = React.useState("");
  const [classPolicyExpectation, setClassPolicyExpectation] =
    React.useState("");
  const [courseOutline, setCourseOutline] = React.useState("");
  const [additionalCustomization, setAdditionalCustomization] =
    React.useState("");

  const handleGradeLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradeLevel(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };

  const handleCourseDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCourseDescription(e.target.value);
  };

  const handleRequiredMaterialChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRequiredMaterial(e.target.value);
  };

  const handleGradingPolicyChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGradingPolicy(e.target.value);
  };

  const handleClassPolicyExpectationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClassPolicyExpectation(e.target.value);
  };

  const handleCourseOutlineChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCourseOutline(e.target.value);
  };

  const handleAdditionalCustomizationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAdditionalCustomization(e.target.value);
  };

  return (
    <section className="w-full h-screen">
      <form
        action={() => {
          console.log("submitting");
          fetch("http://localhost:3000/api/curriculum", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              grade_level: gradeLevel,
              subject: subject,
              course_description: courseDescription,
              required_material: requiredMaterial,
              grading_policy: gradingPolicy,
              class_policy_expectation: classPolicyExpectation,
              course_outline: courseOutline,
              additional_customization: additionalCustomization,
            }),
          });
          console.log("submitted");
        }}
        className="w-full h-full gap-2 mt-10"
        onSubmit={handleSubmit}
      >
        <div className="py-2 space-y-2 px-2">
          <Label>Grade Level</Label>
          <Input
            id="grade_level"
            value={gradeLevel}
            placeholder="Grade Level"
            onChange={(e) => handleGradeLevelChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>
        <div className="py-2 px-2">
          <Label>Subject</Label>
          <Input
            id="subject"
            value={subject}
            placeholder="Subject"
            onChange={(e) => handleSubjectChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>
        <div className="py-2 px-2">
          <Label>Course Description</Label>
          <Input
            id="course_description"
            value={courseDescription}
            placeholder="Course Description"
            onChange={(e) => handleCourseDescriptionChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>
        <div className="py-2 px-2">
          <Label>Required Material</Label>
          <Input
            id="required_material"
            value={requiredMaterial}
            placeholder="Required Material"
            onChange={(e) => handleRequiredMaterialChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>
        <div className="py-2 px-2">
          <Label>Grading Policy</Label>
          <Input
            id="grading_policy"
            value={gradingPolicy}
            placeholder="Grading Policy"
            onChange={(e) => handleGradingPolicyChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>
        <div className="py-2 px-2">
          <Label>Class Policy/Expectation</Label>
          <Input
            id="class_policy_expectation"
            value={classPolicyExpectation}
            placeholder="Class Policy/Expectation"
            onChange={(e) => handleClassPolicyExpectationChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>

        <div className="py-2 px-2">
          <Label>Course Outline/What is Covered</Label>
          <Input
            id="course_outline"
            value={courseOutline}
            placeholder="Course Outline/What is Covered"
            onChange={(e) => handleCourseOutlineChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>
        <div className="py-2 px-2">
          <Label>Additional Customization(Optional)</Label>
          <Input
            id="additional_customization"
            value={additionalCustomization}
            placeholder="Additional Customization(Optional)"
            onChange={(e) => handleAdditionalCustomizationChange(e)}
            className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]"
          ></Input>
        </div>

        <ButtonGenerate />
      </form>
    </section>
  );
};
