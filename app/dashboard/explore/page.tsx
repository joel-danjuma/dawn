"use client";
import { useChat } from "ai/react";
import { ChatSection } from "./components/ChatSection";
import { ChatInput } from "./components/ChatInput";

export default function ExplorePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();
  return (
    <main className="relative flex-col j h-full max-w-[1120px] min-w-[1064px] gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <div className="absolute top-0 w-full h-full">
        <div className="relative flex h-full max-h-[80vh] justify-start flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 overflow-auto">
          <ChatSection messages={messages} isLoading={isLoading} />
          <div className="flex-1" />
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
