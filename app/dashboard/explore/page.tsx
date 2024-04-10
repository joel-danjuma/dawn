"use client";

import { AttachmentIcon } from "@/public/icons/Attachment";
import { MicIcon } from "@/public/icons/Mic";
import { SendIcon } from "@/public/icons/Send";
import { Input, Skeleton } from "@nextui-org/react";
import clsx from "clsx";
import { useContext, useState } from "react";
import { DashboardAuthCtx } from "../context/DashboardAuthContext";

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
      return msgText.replaceAll("\\", "");
    })
    .join("");
  return message;
}

function Page() {
  const [chatStart, setChatStart] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [disableInputs, setDisableInputs] = useState(false);
  const {user, token} = useContext(DashboardAuthCtx);

  function handleSendChat() {
    !chatStart && setChatStart(true);
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
          setMessages([
            ...messages,
            { role: "user", message: input },
            { role: "ai", message },
          ]);
        });
      })
      .finally(function () {
        setInput("");
        setDisableInputs(false);
      });
  }

  return (
    <div className="md:w-[770px] h-[90vh] overflow-hidden relative">
      {!chatStart && (
        <div>
          <h3 className="text-[33px] font-[600]">Hello Fancy</h3>

          <div className="bg-[#9A4FFF]/[10%] rounded-[7px] mt-12 w-full">
            <p className="text-center text-[19px] p-4">
              Welcome to DAWN AI STUDY, your ultimate guide to personalized
              learning! 🌟 I&apos;m your friendly AI teacher, here to make your
              learning journey smooth and exciting. Whether you&apos;re a
              student eager to explore new subjects or a teacher looking for
              innovative teaching strategies, I&apos;ve got you covered! then it
              will also have the translation sign behind that play button
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-7">
            <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
              <p>I want to enhance my lessons</p>
            </div>
            <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
              <p>I want to enhance my lessons</p>
            </div>
            <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
              <p>I want to learn a new course</p>
            </div>
            <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
              <p>Discuss best practices in teaching</p>
            </div>
          </div>
        </div>
      )}

      {chatStart && (
        <div className="overflow-auto h-[80%] relative p-2 rounded-lg">
          {messages.map((msg, idx) => (
            <p
              key={idx}
              className={clsx(
                "bg-blue-700 max-w-[50%] min-w-[30%] w-max my-7 rounded-md p-1",
                {
                  "bg-purple-700 ms-auto": msg.role === "user",
                }
              )}
            >
              {msg.message}
            </p>
          ))}
          {disableInputs && (
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[10px] max-w-[40%] rounded-lg" />
              <Skeleton className="h-[10px] max-w-[30%] rounded-lg" />
              <Skeleton className="h-[10px] max-w-[20%] rounded-lg" />
            </div>
          )}
        </div>
      )}

      <div className="absolute bottom-0 w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendChat();
          }}
          className="flex items-center gap-7 bg-[#0F0F0F] border-1 border-[#0F0F0F]/[10%] rounded-[13px] py-2 ps-12 pe-7 mt-20"
        >
          <AttachmentIcon />
          <Input
            type="text"
            placeholder="Type your message"
            disabled={disableInputs}
            value={input}
            onValueChange={setInput}
          />
          <div className="flex items-center gap-4">
            <MicIcon />
            <button
              className="bg-[#A124B6] w-[47px] h-[47px] rounded-[50%] grid place-content-center"
              disabled={disableInputs}
              type="submit"
            >
              <SendIcon />
            </button>
          </div>
        </form>

        <p className="mt-7">
          Chat may produce inaccurate information. Verify important data and
          Always review content for accuracy and bias; use professional judgment
          and comply with school policies.
        </p>
      </div>
    </div>
  );
}

export default Page;
