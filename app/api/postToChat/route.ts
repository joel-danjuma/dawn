import { NextApiResponse } from "next";
import { StreamingTextResponse } from "ai";
import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatGroq({
  apiKey: process.env.GROQ_API_KEY,
  model: "llama3-8b-8192",
});

export async function POST(req: Request, res: NextApiResponse) {
  const { input } = await req.json();
  try {
    const prompt = ChatPromptTemplate.fromMessages([
      [
        "system",
        "You are a helpful assistant named Dawn AI who is an education wizard, focused on delivering on tasks given to you by users. Always respond politely and make sure to always inquire if the user is satisfied with the replies given.",
      ],
      ["human", "{input}"],
    ]);
    const outputParser = new StringOutputParser();
    const chain = prompt.pipe(model).pipe(outputParser);
    const response = await chain.stream({
      input,
    });

    return new StreamingTextResponse(response);
  } catch (error) {
    console.log({ Error: error });
    return {
      error: error,
    };
  }
}
