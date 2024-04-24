// "use client";
// import {
//   Mic,
//   Bird,
//   Rabbit,
//   Turtle,
//   Paperclip,
//   CornerDownLeft,
// } from "lucide-react";
// import {
//   Select,
//   SelectItem,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
// } from "@/components/ui/select";
// import { useChat } from "ai/react";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// export default function Component() {
//   const { messages, input, handleInputChange, handleSubmit } = useChat();
//   return (
//     <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
//       {/* <div
//         className="relative hidden flex-col items-start gap-8 md:flex"
//         x-chunk="dashboard-03-chunk-0"
//       >
//         <form className="grid w-full items-start gap-6">
//           <fieldset className="grid gap-6 rounded-lg border p-4">
//             <legend className="-ml-1 px-1 text-sm font-medium">Settings</legend>
//             <div className="grid gap-3">
//               <Label htmlFor="model">Model</Label>
//               <Select>
//                 <SelectTrigger
//                   id="model"
//                   className="items-start [&_[data-description]]:hidden"
//                 >
//                   <SelectValue placeholder="Select a model" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="genesis">
//                     <div className="flex items-start gap-3 text-muted-foreground">
//                       <Rabbit className="size-5" />
//                       <div className="grid gap-0.5">
//                         <p>
//                           Neural{" "}
//                           <span className="font-medium text-foreground">
//                             Genesis
//                           </span>
//                         </p>
//                         <p className="text-xs" data-description>
//                           Our fastest model for general use cases.
//                         </p>
//                       </div>
//                     </div>
//                   </SelectItem>
//                   <SelectItem value="explorer">
//                     <div className="flex items-start gap-3 text-muted-foreground">
//                       <Bird className="size-5" />
//                       <div className="grid gap-0.5">
//                         <p>
//                           Neural{" "}
//                           <span className="font-medium text-foreground">
//                             Explorer
//                           </span>
//                         </p>
//                         <p className="text-xs" data-description>
//                           Performance and speed for efficiency.
//                         </p>
//                       </div>
//                     </div>
//                   </SelectItem>
//                   <SelectItem value="quantum">
//                     <div className="flex items-start gap-3 text-muted-foreground">
//                       <Turtle className="size-5" />
//                       <div className="grid gap-0.5">
//                         <p>
//                           Neural{" "}
//                           <span className="font-medium text-foreground">
//                             Quantum
//                           </span>
//                         </p>
//                         <p className="text-xs" data-description>
//                           The most powerful model for complex computations.
//                         </p>
//                       </div>
//                     </div>
//                   </SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="temperature">Temperature</Label>
//               <Input id="temperature" type="number" placeholder="0.4" />
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <div className="grid gap-3">
//                 <Label htmlFor="top-p">Top P</Label>
//                 <Input id="top-p" type="number" placeholder="0.7" />
//               </div>
//               <div className="grid gap-3">
//                 <Label htmlFor="top-k">Top K</Label>
//                 <Input id="top-k" type="number" placeholder="0.0" />
//               </div>
//             </div>
//           </fieldset>
//           <fieldset className="grid gap-6 rounded-lg border p-4">
//             <legend className="-ml-1 px-1 text-sm font-medium">Messages</legend>
//             <div className="grid gap-3">
//               <Label htmlFor="role">Role</Label>
//               <Select defaultValue="system">
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select a role" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="system">System</SelectItem>
//                   <SelectItem value="user">User</SelectItem>
//                   <SelectItem value="assistant">Assistant</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div className="grid gap-3">
//               <Label htmlFor="content">Content</Label>
//               <Textarea
//                 id="content"
//                 placeholder="You are a..."
//                 className="min-h-[9.5rem]"
//               />
//             </div>
//           </fieldset>
//         </form>
//       </div> */}
//       <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
//         <Badge variant="outline" className="absolute right-3 top-3">
//           Output
//         </Badge>
//         <div className="flex-1" />
//         <div>
//           {messages.map((m) => (
//             <div key={m.id}>
//               {m.role === "user" ? "User: " : "AI: "}
//               {m.content}
//             </div>
//           ))}
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
//           x-chunk="dashboard-03-chunk-1"
//         >
//           <Label htmlFor="message" className="sr-only">
//             Message
//           </Label>
//           <Textarea
//             id="message"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="Type your message here..."
//             className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
//           />
//           <div className="flex items-center p-3 pt-0">
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Paperclip className="size-4" />
//                   <span className="sr-only">Attach file</span>
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent side="top">Attach File</TooltipContent>
//             </Tooltip>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Mic className="size-4" />
//                   <span className="sr-only">Use Microphone</span>
//                 </Button>
//               </TooltipTrigger>
//               <TooltipContent side="top">Use Microphone</TooltipContent>
//             </Tooltip>
//             <Button type="submit" size="sm" className="ml-auto gap-1.5">
//               Send Message
//               <CornerDownLeft className="size-3.5" />
//             </Button>
//           </div>
//         </form>
//       </div>
//     </main>
//   );
// }
