import { NextApiResponse } from "next";
import { StreamingTextResponse } from "ai";

export async function POST(req: Request, res: NextApiResponse) {
  const { input, token } = await req.json();

  const response = await fetch(
    `https://lingolette.com/api/binary?token=${token}&input=${input}`,
    {
      method: "POST",
      body: JSON.stringify({
        method: "postToChat",
      }),
    }
  );

  if (!response.ok) {
    response.text().then((t) => console.error(t));
    // res.status(response.status).json({ error: "Failed to fetch data" });
    return new Response("Failed to fetch data", {
      status: response.status,
    });
  }

  const stream = response.body;

  if (!stream) {
    // Handle the case where stream is null, e.g., by returning an error response
    return new Response("Stream is null", {
      status: response.status,
    });
  }
  return new StreamingTextResponse(stream);
}
