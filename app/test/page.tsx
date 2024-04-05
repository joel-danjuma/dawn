"use client";
import { useState } from "react";
import crypto from "crypto";
import { getConfig } from "@/utils/getConfig";
import { getSessionToken } from "@/utils/getSessionToken";
import { StreamingTextResponse } from "ai";
import { input } from "@nextui-org/react";

interface Message {
  role: string;
  message: any;
}

function parseChatText(text: string): string {
  const message = text
    .split("\n")
    .map((t: string) => t.trim())
    .filter((t: string) => t.length >= 0)
    .map((t: string) => {
      const leftBrackIdx = t.indexOf("[");
      if (t[leftBrackIdx + 1] === "0") {
        // End of response
        return "";
      }
      const msgStart = t.indexOf('"');
      const msgEnd = t.lastIndexOf('"');
      const msgText = t.substring(msgStart + 1, msgEnd);
      return msgText;
    })
    .join("");
  return message;
}

const Page = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [disableInputs, setDisableInputs] = useState(false);
  const userId = process.env.NEXT_PUBLIC_LINGOLETTE_AUTH_ID || "";
  const token =
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTQ5MTE1MDgsImlkIjoiZGEwMTg3MjQtZjMzZi0xMWVlLWI4MWItZmI4ZmQ4NDg0NDdiIiwidHlwZSI6InVzZXIifQ.3rOuMxVz5nmKw0TXdMXgiA5qFDysgXtsNSs_2xrAtIhz728UPptqYQaHpcR5hi2CM644fXgsY105tYeD8GHDtg";

  function handleSendChat() {
    setMessages([...messages, { role: "user", message: input }]);
    setDisableInputs(true);
    fetch("/api/postToChat", {
      method: "POST",
      body: JSON.stringify({ input, token }),
      headers: { "Content-Type": "application/json" },
    })
      .catch(function (e) {
        alert("Error occured check console, Filter_key: Chat-Error");
        console.error("Chat-Error:", e);
      })
      .then(function (response) {
        response!!.text().then(function (text) {
          const message = parseChatText(text);
          setMessages([...messages, { role: "ai", message }]);
        });
      })
      .finally(function () {
        setInput("");
        setDisableInputs(false);
      });
  }

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="input"
          className="border-2 border-gray-300 p-2 rounded-md"
          disabled={disableInputs}
        />
        <button
          onClick={handleSendChat}
          className="bg-blue-500 input-white p-2 rounded-md ml-2"
          disabled={disableInputs}
        >
          Send
        </button>
        <button
          disabled={disableInputs}
          className="bg-green-500 input-white p-2 rounded-md ml-2"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
};

export default Page;
