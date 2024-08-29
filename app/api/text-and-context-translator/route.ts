// import { generateText } from "ai";
import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const model = groq("llama3-70b-8192");

export async function POST(req: Request) {
  const { grade_level, input } = await req.json();

  const response = await streamText({
    model,
    system: `Generate Behavior Intervention Plan

Inputs:

Grade Level: [Insert grade level, e.g., 3, 6, 9, etc.]
Input: [Insert brief description of student's strengths, behavioral challenges, and other relevant information, e.g., "Student has difficulty staying focused on academic tasks, often gets easily distracted, and has a strong interest in art and music. History of behavioral challenges, including throwing objects and interrupting peers."]
Task:

Generate a comprehensive Behavior Intervention Plan (BIP) tailored to the specific needs of the student based on the provided grade level and input text. The plan should include:

Behavioral Goal: Clearly define the target behavior(s) to be addressed.
Functional Assessment: Provide an analysis of the factors contributing to the student's behavioral challenges.
Intervention Strategies: Offer a range of evidence-based strategies to support the student's behavioral change, including:
Behavioral reinforcement systems
Environmental modifications
Teaching of social skills and self-regulation strategies
Verbal redirection and response strategies
Other relevant interventions
Data Collection and Assessment: Outline a plan for collecting and assessing data on the student's behavior, including:
Measurement tools
Data collection schedules
Criteria for determining behavioral progress
Assessment and Progress Monitoring: Describe the process for regularly assessing and monitoring the student's progress toward the behavioral goal.
Communication and Collaboration: Outline steps for communicating the BIP to relevant parties, including teachers, parents, and support staff.
Plan Review and Revision: Provide a plan for reviewing and revising the BIP as needed to ensure its effectiveness.
`,
    prompt: `Please provide a comprehensive Behavior Intervention Plan that meets the requirements for grade :${grade_level} for the student withe the following description : ${input}.`,
  });

  return response.toAIStreamResponse();

  //   return new Response(JSON.stringify(response.text), {
  //     headers: { "Content-Type": "application/json" },
  //   });
}
