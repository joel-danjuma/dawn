import * as z from "zod";

export const LoginSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({
    message: "Invalid Email Address",
  }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});



export const CurriculumGeneratorSchema = z.object({
  grade_level: z.string().min(1, {
    message: "Grade Level is Required",
  }),
  subject: z.string().min(1, {
    message: "Subject is Required",
  }),
  course_description: z.string().min(1, {
    message: "Course description is Required",
  }),
  required_material: z.string().min(1, {
    message: "Required Material is Required",
  }),
  grading_policy: z.string().min(1, {
    message: "Grading Policy is Required",
  }),
  class_policy_and_expectations: z.string().min(1, {
    message: "Class Policy and Expectations is Required",
  }),
  course_outline: z.string().min(1, {
    message: "Course Outline is Required",
  }),
  additional_customization: z.string().optional(),
});

export const RegisterSchema = z.object({
  name: z.string().optional(),

  email: z.string().email({
    message: "Invalid Email Address",
  }),

  password: z
    .string()
    .min(1, {
      message: "password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[A-Z]/, {
      message: "At least one capital letter is required",
    })
    .regex(/[0-9]/, {
      message: "At least one number is required",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "At least one special character is required",
    }),
});
