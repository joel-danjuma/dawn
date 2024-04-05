"use client";
import { useState } from "react";
import crypto from "crypto";
import { getConfig } from "@/utils/getConfig";
import { getSessionToken } from "@/utils/getSessionToken";
import { StreamingTextResponse } from "ai";

interface Message {
  role: string;
  message: any;
}

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [token, setToken] = useState("");
  const [eventSource, setEventSource] = useState<EventSource | null>(null);
  const random = crypto.randomBytes(32).toString("hex"),
    hash = crypto
      .createHmac(
        "sha256",
        process.env.LINGOLETTE_AUTH_SECRET ||
          "6f6f9f2383820e432fdcb233083f38b0b4019478cb598c6df344225dcfa7224f"
      )
      .update(random)
      .digest("hex");
  const userId = process.env.NEXT_PUBLIC_LINGOLETTE_AUTH_ID || "";

  // (async () => {
  //   const userId = ""; // Replace with the user ID you want to get a session token for
  //   const sessionToken = await getSessionToken(userId);
  //   console.log("Session token:", sessionToken);
  // })();
  // (async () => {
  //   const userId = "";
  //   const sessionToken = await getSessionToken(userId);
  //   console.log("Session token:", sessionToken);
  //   if (sessionToken !== null) {
  //     setToken(sessionToken);
  //   } else {
  //     setToken("");
  //   }
  // })();

  const [chatStarted, setChatStarted] = useState(false);

  const chatAction = (input: string) => {
    const muted = true; // Assuming voice output is not muted

    // Use the getSessionToken function to get the session token
    const token =
      "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5MTE1MDgsImlkIjoiZGEwMTg3MjQtZjMzZi0xMWVlLWI4MWItZmI4ZmQ4NDg0NDdiIiwidHlwZSI6InVzZXIifQ.3rOuMxVz5nmKw0TXdMXgiA5qFDysgXtsNSs_2xrAtIhz728UPptqYQaHpcR5hi2CM644fXgsY105tYeD8GHDtg";

    const firstCall = !chatStarted;

    const eventUrlSuffix = firstCall
      ? `method=startChat&timeStamp=${new Date().toISOString()}&useVoiceOut=${!muted}`
      : `method=postToChat&input=${
          input ? encodeURIComponent(input) : ""
        }&useVoiceOut=${!muted}&useVoiceIn=${!input}`;

    // const eventSource = new EventSource(
    //   `${getConfig().apiUrl}/binary?token=${getSessionToken(
    //     userId
    //   )}&${eventUrlSuffix}`
    // );
    const eventSource = new EventSource(
      `${getConfig().apiUrl}/binary?token=${token}&${eventUrlSuffix}`
    );

    eventSource.onopen = (e) => {
      console.log("Chat Started...");
    };

    eventSource.onmessage = (event) => {
      // console.log("Message received:", event.data);
      const stream = event.data;
      return new StreamingTextResponse(stream);
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
      eventSource.close;
    };

    if (firstCall) {
      setChatStarted(true);
    }

    // const newEventSource = new EventSource(
    //   `${getConfig().apiUrl}/binary?token=${token}&${eventUrlSuffix}`
    // );

    // // Add event listeners to handle messages, errors, etc.
    // newEventSource.onmessage = (event) => {
    //   console.log("New message received:", event.data);
    // };

    // newEventSource.onerror = (error) => {
    //   console.error("New eventSource error:", error);
    // };
  };

  //  const postToChat = async (text: string) => {
  //   const firstCall = false; // This is not the first call
  //   const muted = false; // Assuming voice output is not muted

  //   // Use the getSessionToken function to get the session token
  //   const token = await getSessionToken(userId);

  //   const eventUrlSuffix = firstCall ?
  //      `method=startChat&timeStamp=${(new Date).toISOString()}&useVoiceOut=${!muted}` :
  //      `method=postToChat&input=${text ? encodeURIComponent(text) : ''}&useVoiceOut=${!muted}&useVoiceIn=${!text}`;

  //   const eventSource = new EventSource(`${getConfig().apiUrl}/binary?token=${token}&${eventUrlSuffix}`);

  //   // Add event listeners to handle messages, errors, etc.
  //   eventSource.onmessage = (event) => {
  //      console.log("Message received:", event.data);
  //   };

  //   eventSource.onerror = (error) => {
  //      console.error("EventSource error:", error);
  //   };
  //  };

  const handleSubmit = async () => {
    // Check if the input is not empty
    if (input.trim() !== "") {
      try {
        await chatAction(input);

        // Clear the input field after successful submission
        setInput("");

        // Optionally, you can add the message to the messages state here
        setMessages([...messages, { role: "user", message: input }]);
      } catch (error) {
        console.error("Error posting to chat:", error);
      }
    } else {
      console.log("Input is empty. Please enter a message.");
    }
  };
  const startChatWithInput = async (input: string) => {
    await chatAction(input);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex-col mb-4 min-h-[420px] max-w-[500px] min-w-[420px] border-2 rounded-lg p-2 ">
        {messages.map((message, index) => (
          <p
            key={index}
            className={
              message.role === "user"
                ? "input-blue-500 input-2xl"
                : "input-green-500 text2-2xl"
            }
          >
            {message.message}
          </p>
        ))}
      </div>
      <div>
        <input
          type="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 input-white p-2 rounded-md ml-2"
        >
          Send
        </button>
        <button
          onClick={() => startChatWithInput(input)}
          className="bg-green-500 input-white p-2 rounded-md ml-2"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default Page;
