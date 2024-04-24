import { Avatar, Skeleton } from "@nextui-org/react";
import { Message } from "ai";

function ChatSection({
  messages,
  isLoading,
}: {
  messages: Message[];
  isLoading: boolean;
}) {
  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id} className="grid grid-cols-[auto_1fr] gap-2 my-3">
          {msg.role === "user" ? <Avatar /> : <Avatar name="DwnAI" />}
          <p className="rounded-md h-max py-1 px-3">{msg.content}</p>
        </div>
      ))}
      {isLoading && (
        <div className="flex flex-col gap-1 py-2 pl-2">
          <Skeleton className="h-[10px] max-w-[40%] rounded-lg" />
          <Skeleton className="h-[10px] max-w-[30%] rounded-lg" />
          <Skeleton className="h-[10px] max-w-[20%] rounded-lg" />
        </div>
      )}
    </>
  );
}

export { ChatSection };
