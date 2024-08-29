"use client";
import { useChat } from "ai/react";
import { ChatSection } from "./components/ChatSection";
import { ChatInput } from "./components/ChatInput";

export default function ExplorePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  return (
    <main className="lg:grid lg:grid-rows-[1fr_auto]  lg:max-w-[1120px] h-full">
      <div className="w-full h-[83%] lg:h-[75vh] my-3 lg:my-0">
        <div className="h-full overflow-auto rounded-xl bg-muted/50 p-4">
          <ChatSection messages={messages} isLoading={isLoading} />
        </div>
      </div>
      <ChatInput
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        input={input}
      />
    </main>
  );
}
