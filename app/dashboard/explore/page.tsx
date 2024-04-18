"use client";

import { useContext, useEffect, useState } from "react";
import { DashboardAuthCtx } from "../context/DashboardAuthContext";
import { Intro } from "./components/ExploreIntro";
import { ChatSection } from "./components/ChatSection";
import { ChatInput } from "./components/ChatInput";
import { Skeleton } from "@nextui-org/react";

export interface Message {
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
  const { user, token } = useContext(DashboardAuthCtx);
  const [chatInitialised, setChatInitialised] = useState(false);
  const [chatInitError, setChatInitError] = useState(false);

  useEffect(() => {
    fetch("/api/initChat", {
      method: "POST",
      body: JSON.stringify({ token }),
    })
      .catch(function (e) {
        setChatInitError(true);
        console.error("Failed to initialise chat", e);
      })
      .then((response) => {
        if (response!!.ok) {
          setChatInitialised(true);
        } else {
          setChatInitError(true);
        }
      });
  }, [token]);

  function onPromptClicked(prompt: string) {
    setInput(prompt);
    console.log(input);
    handleSendChat(prompt);
  }

  function handleSendChat(prompt?: string) {
    !chatStart && setChatStart(true);
    console.log("Before fetch, input:", input);
    setMessages([
      ...messages,
      { role: "user", message: prompt ? prompt : input },
    ]);

    setDisableInputs(true);

    fetch("/api/postToChat", {
      method: "POST",
      body: JSON.stringify({ input: prompt ? prompt : input, token }),
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
            { role: "user", message: prompt ? prompt : input },
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
    <div className="md:w-[770px] h-full overflow-hidden flex flex-col">
      <div className="h-[80%] overflow-auto">
        {!chatStart && <Intro onPromptClicked={onPromptClicked} />}

        {chatStart && (
          <div className="overflow-auto p-2 rounded-lg">
            <ChatSection
              messages={messages}
              isGettingAIResponse={disableInputs}
            />
          </div>
        )}
      </div>

      <div className="w-full">
        {!chatInitialised && !chatInitError && (
          <>
            <div className="w-full h-[50px] py-1 px-6 flex gap-3">
              <Skeleton className="rounded-lg h-full w-[4%]" />
              <Skeleton className="rounded-md h-full w-[70%]" />
              <Skeleton className="rounded-lg h-full w-[4%]" />
              <Skeleton className="rounded-lg h-full w-[4%]" />
            </div>
          </>
        )}
        {chatInitialised && !chatInitError &&
          <ChatInput
            setInput={setInput}
            disableInputs={disableInputs}
            input={input}
            handleSendChat={handleSendChat}
          />
        }
        {chatInitError && (
          <p className="text-red-700 font-semibold">
            Error initialising chat session
          </p>
        )}

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
