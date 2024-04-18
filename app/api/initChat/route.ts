import { StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";

export async function POST(request: Request, res: NextResponse) {
  const { token } = await request.json();

  const response = await fetch(
    `https://lingolette.com/api/binary?token=${token}&timeStamp=${JSON.stringify(Date())}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        method: "startChat",
        data: {timeStamp: Date()},
      }),
    }
  );

  if (!response.ok) {
    response.text().then((t) => console.error(t));
    // res.status(response.status).json({ error: "Failed to fetch data" });
    return new Response("Failed to initialise chat", {
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
