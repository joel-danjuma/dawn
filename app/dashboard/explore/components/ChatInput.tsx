import { AttachmentIcon } from "@/public/icons/Attachment";
import { MicIcon } from "@/public/icons/Mic";
import { SendIcon } from "@/public/icons/Send";
import { Input } from "@nextui-org/react";

function ChatInput({
  handleSendChat,
  setInput,
  disableInputs,
  input
}: {
  handleSendChat: () => void;
  setInput: (input: string) => void;
  disableInputs: boolean;
  input: string
}) {
  return (
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
  );
}

export { ChatInput };
