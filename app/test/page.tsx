"use client";
import { useEffect, useState } from "react";
import crypto from "crypto";

interface Message {
  role: string;
  message: any;
}

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [eventSource, setEventSource] = useState<EventSource | null>(null);
  const random = crypto.randomBytes(32).toString("hex"),
    hash = crypto
      .createHmac(
        "sha256",
        "6f6f9f2383820e432fdcb233083f38b0b4019478cb598c6df344225dcfa7224f"
      )
      .update(random)
      .digest("hex");

  const startChat = () => {
    console.log("Starting chat..."); // Signal that the chat is starting
    const es = new EventSource("https://lingolette.com/api/binary");
    setEventSource(es);

    es.onopen = () => {
      console.log("Chat started successfully."); // Signal that the chat has started successfully
      fetch("https://lingolette.com/api/binary/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-version": "1",
          "x-random": random,
          "x-auth-id": "5ae65ce4-e04d-11ee-8617-7f4613917414",
          "x-auth-key": hash,
        },
        body: JSON.stringify({
          method: "startChat",
          data: {
            timeStamp: new Date().toISOString(),
            useVoiceOut: false,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));
    };

    es.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "ai", message: data[0] },
      ]);
    };
    es.onerror = (error) => {
      console.error("EventSource error:", error);
    };
  };

  const handleSubmit = () => {
    if (eventSource) {
      eventSource.onopen = () => {
        console.log("Chat started successfully."); // Signal that the chat has started successfully
        fetch("https://lingolette.com/api/binary/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-version": "1",
            "x-random": random,
            "x-auth-id": "5ae65ce4-e04d-11ee-8617-7f4613917414",
            "x-auth-key": hash,
          },
          body: JSON.stringify({
            method: "postToChat",
            data: {
              input: input,
              useVoiceOut: false,
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error("Error:", error));
      };

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", message: input },
      ]);
      setInput("");
    } else {
      console.error(
        "EventSource is not initialized. Please start the chat first."
      );
    }
  };

  useEffect(() => {
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [eventSource]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center">
      <div className="flex-col mb-4 min-h-[420px] max-w-[500px] min-w-[420px] border-2 rounded-lg p-2 ">
        {messages.map((message, index) => (
          <p
            key={index}
            className={
              message.role === "user"
                ? "text-blue-500 text-2xl"
                : "text-green-500 text2-2xl"
            }
          >
            {message.message}
          </p>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md ml-2"
        >
          Send
        </button>
        <button
          onClick={startChat}
          className="bg-green-500 text-white p-2 rounded-md ml-2"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default Page;
