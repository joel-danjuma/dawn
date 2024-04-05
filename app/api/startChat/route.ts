import { NextApiRequest, NextApiResponse } from "next";
import { OpenAIStream, StreamingTextResponse } from "ai";
import crypto from "crypto";

export async function GET(res: NextApiResponse) {
  const random = crypto.randomBytes(32).toString("hex"),
    hash = crypto
      .createHmac("sha256", process.env.LINGOLETTE_AUTH_SECRET || "")
      .update(random)
      .digest("hex");

  const response = await fetch("https://lingolette.com/api/binary", {
    method: "POST",
    // cache: "no-cache",
    // keepalive: true,
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

  if (!response.ok) {
    console.log("It failed boss");
    // res.status(response.status).json({ error: "Failed to fetch data" });
    return new Response("Failed to fetch data", {
      status: response.status,
    });
  } else {
    return "Success!!!";
  }

  // const stream = response.body;

  // res.setHeader("Content-Type", "text/event-stream");
  // res.setHeader("Cache-Control", "no-cache");
  // res.setHeader("Connection", "keep-alive");

  // if (!stream) {
  //   // Handle the case where stream is null, e.g., by returning an error response
  //   return new Response("Stream is null", {
  //     status: response.status,
  //   });
  // }
  // return new StreamingTextResponse(stream);
}
