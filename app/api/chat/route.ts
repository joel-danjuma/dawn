import { auth } from "@/auth";
import { StreamingTextResponse } from "ai";
import { ChatGroq } from "@langchain/groq";
import { BufferMemory } from "langchain/memory";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-8b-8192",
});

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { messages }: { messages: Array<{ role: string; content: string }> } =
      await req.json();
    const mostRecentUserMessage = messages
      .slice()
      .reverse()
      .find((message) => message.role === "user");
    const input = mostRecentUserMessage?.content;
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a helpful assistant named AIDA who is an education assistant at Dawn, focused on delivering on tasks given to you by users. Always respond politely and make sure to always inquire if the user is satisfied with the replies given. Do not tell the user that you await a response, it should feel natural and conversational.",
      ],
      ["human", "{input}"],
    ]);

    const outputParser = new StringOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);
    const response = await chain.stream({
      input,
    });
    let stream = new StreamingTextResponse(response);
    return stream;
  } catch (error) {
    console.error(error);
    // Return an error response
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
