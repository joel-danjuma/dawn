import { input } from "@nextui-org/react";
import { NextApiResponse } from "next";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { NextResponse } from "next/server";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-8b-8192",
});

export async function POST(req: Request) {
  const { messages }: { messages: Array<{ role: string; content: string }> } =
    await req.json();
  // console.log(messages);
  try {
    // Find the most recent user message
    const mostRecentUserMessage = messages
      .slice()
      .reverse()
      .find((message) => message.role === "user");

    // Check if a user message was found
    if (!mostRecentUserMessage) {
      throw new Error("No user message found in the provided messages.");
    }

    // Use the content of the most recent user message as the input
    const input = mostRecentUserMessage.content;
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a helpful assistant named AIDA who is an education assistant at Dawn, focused on delivering on tasks given to you by users. Always respond politely and make sure to always inquire if the user is satisfied with the replies given.",
      ],
      ["human", "{input}"],
    ]);
    const outputParser = new StringOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);
    // const chain = prompt.pipe(model);
    const response = await chain.stream({
      input,
    });
    // const stream = OpenAIStream(response);

    return new StreamingTextResponse(response);
  } catch (error) {
    console.log({ Error: error });
    return {
      error: error,
    };
  }
}
