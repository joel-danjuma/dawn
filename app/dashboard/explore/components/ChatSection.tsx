import { Avatar, Skeleton } from "@nextui-org/react";
import { Message } from "../page";
import clsx from "clsx";

function ChatSection({
  messages,
  isGettingAIResponse,
}: {
  messages: Message[];
  isGettingAIResponse: boolean;
}) {
  return (
    <>
      {messages.map((msg, idx) => (
        <div key={idx} className="grid grid-cols-[auto_1fr] gap-2 my-3">
          {msg.role === "user" ? <Avatar /> : <Avatar name="DwnAI" />}
          <p className="rounded-md h-max py-1 px-3">{msg.message}</p>
        </div>
      ))}
      {isGettingAIResponse && (
        <div className="flex flex-col gap-1">
          <Skeleton className="h-[10px] max-w-[40%] rounded-lg" />
          <Skeleton className="h-[10px] max-w-[30%] rounded-lg" />
          <Skeleton className="h-[10px] max-w-[20%] rounded-lg" />
        </div>
      )}
    </>
  );
}

export { ChatSection };
