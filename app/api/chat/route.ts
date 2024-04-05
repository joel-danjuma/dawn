import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIStream, StreamingTextResponse } from "ai";
import crypto from "crypto";
import { NextResponse } from "next/server";

<<<<<<< HEAD:app/api/startChat/route.ts
export async function POST(res: NextApiResponse) {
=======
export async function POST(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 554e0a522159c217f4712a219e553fa60f3527ee:app/api/chat/route.ts
  const random = crypto.randomBytes(32).toString("hex"),
    hash = crypto
      .createHmac("sha256", process.env.LINGOLETTE_AUTH_SECRET || "")
      .update(random)
      .digest("hex");

  const response = await fetch("https://lingolette.com/api/binary", {
    method: "POST",
    cache: "no-cache",
    keepalive: true,
    headers: {
      "Content-Type": "application/json",
      "x-api-version": "1",
      "x-random": random,
      "x-auth-id": process.env.LINGOLETTE_AUTH_ID || "",
      "x-auth-key": hash,
    },
    body: JSON.stringify({
      method: "startChat",
      data: {
        timeStamp: new Date(),
        useVoiceOut: false,
      },
    }),
  });

  // const stream = response.body;

  // if (!stream) {
  //   // Handle the case where stream is null, e.g., by returning an error response
  //   return new Response("Stream is null", {
  //     status: response.status,
  //   });
  // }
  // return new Response("Succesful", {
  //   status: response.status,
  // });

  if (!response.ok) {
    console.log("It failed boss");
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
