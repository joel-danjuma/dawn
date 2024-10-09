"use client";
import * as z from "zod";
import { CurriculumGeneratorSchema, LoginSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { startTransition, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

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

export const Curriculum = () => {
  // const [input, setInput] = useState("");
  // const [curriculum, setCurriculum] = useState<Record<string, string>>({});

  // const form = useForm(z.infer<typeof CurriculumGeneratorSchema>)({
  //   resolver: zodResolver(LoginSchema),
  //   defaultValues: {
  //     grade_level: "",
  //     subject: "",
  //     course_description: "",
  //     required_material: "",
  //     grading_policy: "",
  //     class_policy_expectation: "",
  //     course_outline: "",
  //     additional_customization: "",
  //   },
  // });

  return <div className="grid gap-4"></div>;
};
