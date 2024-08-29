import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

const groq = createOpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
});

const model = groq("llama3-70b-8192");

export async function POST(req: Request) {
  const { text } = await req.json();

  const response = await generateText({
    model,
    system: `Task: Rewrite the input text to convey the same information in a clear and concise manner, using language that is engaging and easy to understand.

Input: [CUSTOMER/USER PROVIDES TEXT TO BE REWRITTEN]

Constraints:
Retain the original meaning and intent of the text
Use language that is concise and easy to understand
Avoid introducing new information or taking a position on the topic
Respect the tone and style of the original text (e.g. formal, informal, persuasive, etc.)
Avoid any tone or language that is offensive, discriminatory, or inappropriate

[REWRITTEN TEXT]
Use your best judgment to create a rewritten text that meets the constraints above
If you are unsure about any aspect of the rewrite, please indicate this in the output and provide an explanation
Please ensure the rewritten text is free of grammatical errors, typos, and punctuation issues . NEVER start with an introduction in the form of a greeting or any other text eg "Here is a rewritten version of the input text:".
Return ONLY the text that was given to you, rewritten as per the instructions above.
`,
    prompt: `rewrite the following ${text} `,
  });

  return new Response(JSON.stringify(response.text), {
    headers: { "Content-Type": "application/json" },
  });
}
