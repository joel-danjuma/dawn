import { StreamingTextResponse } from "ai";
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-70b-8192",
});
export async function POST(req: Request) {
  const { messages }: { messages: Array<{ role: string; content: string }> } =
    await req.json();
  // console.log(messages);
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
      "You are a helpful assistant named AIDA who is an education assistant at Dawn, focused on delivering on tasks given to you by users. Always respond politely and make sure to always inquire if the user is satisfied with the replies given. Do not tell the user that you await a response, it should feel natural and conversational.",
    ],
    ["human", "{input}"],
  ]);
  const outputParser = new StringOutputParser();
  const chain = prompt.pipe(model).pipe(outputParser);
  // const chain = prompt.pipe(model);
  const response = await chain.stream({
    input,
  });
  if ("error" in response) {
    console.log("Stream error");
    return Promise.resolve(
      new Response(JSON.stringify({ error: "Stream error" }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  }
  let stream = new StreamingTextResponse(response);
  return Promise.resolve(stream);
  // try {

  // } catch (error) {
  //   console.error(error);
  //   // Return an error response
  //   return new Response(JSON.stringify({ error: error }), {
  //     status: 500,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }
}
