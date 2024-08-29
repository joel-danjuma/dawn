import { streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});
const model = groq("llama3-70b-8192");

export async function POST(req: Request) {
  const { messages } = await req.json();

  const stream = await streamText({
    model,
    system:
      "You are a helpful assistant named AIDA who is an education assistant at Dawn, focused on delivering on tasks given to you by users. Always respond politely and make sure to always inquire if the user is satisfied with the replies given. Do not tell the user that you await a response, it should feel natural and conversational.",
    messages,
  });
  return stream.toAIStreamResponse();
}
