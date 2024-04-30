"use client";
import { useChat } from "ai/react";
import { ChatSection } from "./components/ChatSection";
import { ChatInput } from "./components/ChatInput";

export default function ExplorePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  return (
    <main className="md:grid md:grid-rows-[1fr_auto] md:max-w-[1120px] md:min-w-[1064px] h-full">
      <div className="w-full h-[83%] my-3 md:my-0">
        <div className="h-full overflow-auto md:min-h-[80vh] md:max-h-[80vh] rounded-xl bg-muted/50 p-4">
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
