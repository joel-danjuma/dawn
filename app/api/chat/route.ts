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

// import { auth } from "@/auth";
// import { Message } from "ai";
// import { StreamingTextResponse } from "ai";
// import { ChatGroq } from "@langchain/groq";
// import { BufferMemory } from "langchain/memory";
// import { StringOutputParser } from "@langchain/core/output_parsers";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { ConversationChain } from "langchain/chains";
// import { UpstashRedisChatMessageHistory } from "@langchain/community/stores/message/upstash_redis";

// const model = new ChatGroq({
//   apiKey: process.env.GROQ_API_KEY,
//   model: "llama3-70b-8192",
// });

// export async function POST(req: Request) {
//   try {
//     const session = await auth();
//     // const nativeLanguage = session?.user.nativeLanguage
//     // const targetLanguage = session?.user.targetLanguage
//     const { messages }: { messages: Array<{ role: string; content: string }> } =
//       await req.json();
//     const mostRecentUserMessage = messages
//       .slice()
//       .reverse()
//       .find((message) => message.role === "user");
//     const input = mostRecentUserMessage?.content;

//     // const memory = new BufferMemory({
//     //   chatHistory: new UpstashRedisChatMessageHistory({
//     //     sessionId: session?.user.id as string,
//     //     config: {
//     //       url: "https://still-garfish-34854.upstash.io",
//     //       token: process.env.UPSTASH_TOKEN,
//     //     },
//     //   }),
//     // });
//     // const prompt = ChatPromptTemplate.fromMessages([
//     //   [
//     //     "system",
//     //     "You are AIDA, a multilingual educational assistant at Dawn, dedicated to providing high-quality, personalized support for users. Respond using clear and concise language while maintaining a friendly and approachable tone. Continuously inquire about user satisfaction, ensuring they feel heard and understood. Avoid using language that sounds robotic or impersonal.",
//     //   ],
//     //   ["human", "{input}"],
//     // ]);
//     const prompt = ChatPromptTemplate.fromMessages([
//       [
//         "system",
//         "You are a helpful assistant named AIDA who is an education assistant at Dawn, focused on delivering on tasks given to you by users. Always respond politely and make sure to always inquire if the user is satisfied with the replies given. Do not tell the user that you await a response, it should feel natural and conversational.",
//       ],
//       ["human", "{input}"],
//     ]);
//     const outputParser = new StringOutputParser();
//     const chain = prompt.pipe(model).pipe(outputParser);
//     // const chain = new ConversationChain({
//     //   llm: model,
//     //   memory,
//     //   prompt,
//     // });
//     // const chain = runnable.pipe(outputParser)
//     const response = await chain.stream({
//       input,
//     });
//     // const response = await chain.call({
//     //   input
//     // })
//     let stream = new StreamingTextResponse(response);
//     return stream;
//   } catch (error) {
//     console.error(error);
//     // Return an error response
//     return new Response(JSON.stringify({ error: error }), {
//       status: 500,
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   }
// }
