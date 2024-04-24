// "use client";
// import { useContext, useEffect, useState } from "react";
// // import { DashboardAuthCtx } from "../context/DashboardAuthContext";
// import { Intro } from "./components/ExploreIntro";
// import { ChatSection } from "./components/ChatSection";
// import { ChatInput } from "./components/ChatInput";
// import { Skeleton } from "@nextui-org/react";
// import { auth } from "@/auth";

// export interface Message {
//   role: string;
//   message: any;
// }

// function parseChatText(text: string): string {
//   const message = text
//     .split("\n")
//     .map((t: string) => t.trim())
//     .filter((t: string) => t.length >= 0)
//     .map((t: string) => {
//       const leftBrackIdx = t.indexOf("[");
//       if (t[leftBrackIdx + 1] === "0") {
//         // End of response
//         return "";
//       }
//       const msgStart = t.indexOf('"');
//       const msgEnd = t.lastIndexOf('"');
//       const msgText = t.substring(msgStart + 1, msgEnd);
//       return msgText.replaceAll("\\", "");
//     })
//     .join("");
//   return message;
// }
// const session = await auth();

// function Page() {
//   const [chatStart, setChatStart] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState("");
//   const [disableInputs, setDisableInputs] = useState(false);
//   // const { user, token } = useContext(DashboardAuthCtx);
//   const [chatInitialised, setChatInitialised] = useState(true);
//   // const [chatInitError, setChatInitError] = useState(false);

//   // useEffect(() => {
//   //   fetch("/api/initChat", {
//   //     method: "POST",
//   //     body: JSON.stringify({ token }),
//   //   })
//   //     .catch(function (e) {
//   //       setChatInitError(true);
//   //       console.error("Failed to initialise chat", e);
//   //     })
//   //     .then((response) => {
//   //       if (response!!.ok) {
//   //         setChatInitialised(true);
//   //       } else {
//   //         setChatInitError(true);
//   //       }
//   //     });

//   // }, [token]);

//   function onPromptClicked(prompt: string) {
//     setInput(prompt);
//     console.log(input);
//     handleSendChat(prompt);
//   }

//   function handleSendChat(prompt?: string) {
//     !chatStart && setChatStart(true);
//     console.log("Before fetch, input:", input);
//     setMessages([
//       ...messages,
//       { role: "user", message: prompt ? prompt : input },
//     ]);

//     setDisableInputs(true);

//     fetch("/api/postToChat", {
//       method: "POST",
//       body: JSON.stringify({ input: prompt ? prompt : input }),
//       headers: { "Content-Type": "application/json" },
//     })
//       .catch(function (e) {
//         alert("Error occured check console, Filter_key: Chat-Error");
//         console.error("Chat-Error:", e);
//       })
//       .then(function (response) {
//         response!!.text().then(function (text) {
//           const message = parseChatText(text);
//           setMessages([
//             ...messages,
//             { role: "user", message: prompt ? prompt : input },
//             { role: "ai", message },
//           ]);
//         });
//       })
//       .finally(function () {
//         setInput("");
//         setDisableInputs(false);
//       });
//   }

//   return (
//     <div className="md:w-[770px] h-full overflow-hidden flex flex-col">
//       <div className="h-[80%] overflow-auto">
//         {!chatStart && <Intro onPromptClicked={onPromptClicked} />}

//         {chatStart && (
//           <div className="overflow-auto p-2 rounded-lg">
//             <ChatSection
//               messages={messages}
//               isGettingAIResponse={disableInputs}
//             />
//           </div>
//         )}
//       </div>

//       <div className="w-full">
//         {!chatInitialised && (
//           <>
//             <div className="w-full h-[50px] py-1 px-6 flex gap-3">
//               <Skeleton className="rounded-lg h-full w-[4%]" />
//               <Skeleton className="rounded-md h-full w-[70%]" />
//               <Skeleton className="rounded-lg h-full w-[4%]" />
//               <Skeleton className="rounded-lg h-full w-[4%]" />
//             </div>
//           </>
//         )}
//         {chatInitialised && (
//           <ChatInput
//             setInput={setInput}
//             disableInputs={disableInputs}
//             input={input}
//             handleSendChat={handleSendChat}
//           />
//         )}
//         {/* {chatInitError && (
//           <p className="text-red-700 font-semibold">
//             Error initialising chat session
//           </p>
//         )} */}

//         <p className="mt-7">
//           Chat may produce inaccurate information. Verify important data and
//           Always review content for accuracy and bias; use professional judgment
//           and comply with school policies.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Page;

"use client";
import {
  Mic,
  Bird,
  Rabbit,
  Turtle,
  Paperclip,
  CornerDownLeft,
} from "lucide-react";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import { useChat } from "ai/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, Skeleton } from "@nextui-org/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Component() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <main className="relative flex-col j h-full max-w-[1120px] min-w-[1064px] gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3">
      <div className="absolute top-0 w-full h-full">
        <div className="relative flex h-full max-h-[80vh] justify-start flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2 overflow-auto">
          <>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="grid grid-cols-[auto_1fr] gap-2 my-3"
              >
                {msg.role === "user" ? <Avatar /> : <Avatar name="AIDA" />}
                <p className="rounded-md h-max py-1 px-3">{msg.content}</p>
              </div>
            ))}
          </>

          <div className="flex-1" />
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 w-full max-h-[20vh] overflow-hidden rounded-lg border bg-background  "
        x-chunk="dashboard-03-chunk-1"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Attach File</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">Use Microphone</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </form>
    </main>
  );
}
