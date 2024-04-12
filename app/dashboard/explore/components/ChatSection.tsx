import { Skeleton } from "@nextui-org/react";
import { Message } from "../page";
import clsx from "clsx";

function ChatSection({messages, isGettingAIResponse}: {messages: Message[], isGettingAIResponse: boolean}) {
    return (
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
          {isGettingAIResponse && (
            <div className="flex flex-col gap-1">
              <Skeleton className="h-[10px] max-w-[40%] rounded-lg" />
              <Skeleton className="h-[10px] max-w-[30%] rounded-lg" />
              <Skeleton className="h-[10px] max-w-[20%] rounded-lg" />
            </div>
          )}
        </div>
    )
}

export {ChatSection};