import { AttachmentIcon } from "@/public/icons/Attachment";
import { MicIcon } from "@/public/icons/Mic";
import { Input } from "@nextui-org/react";

function Page() {
  return (
    <div className="md:w-[770px]">
      <h3 className="text-[33px] font-[600]">Hello Fancy</h3>

      <div className="bg-[#9A4FFF]/[10%] rounded-[7px] mt-12 w-full">
        <p className="text-center text-[19px] p-4">
          Welcome to DAWN AI STUDY, your ultimate guide to personalized
          learning! 🌟 I'm your friendly AI teacher, here to make your learning
          journey smooth and exciting. Whether you're a student eager to explore
          new subjects or a teacher looking for innovative teaching strategies,
          I've got you covered! then it will also have the translation sign
          behind that play button
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mt-7">
        <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
          <p>I want to enhance my lessons</p>
        </div>
        <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
          <p>I want to enhance my lessons</p>
        </div>
        <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
          <p>I want to learn a new course</p>
        </div>
        <div className="border-1 border-[#FFFFFF]/[10%] w-max p-10 md:w-[363px] grid place-content-center rounded-[7px]">
          <p>Discuss best practices in teaching</p>
        </div>
      </div>

      <div>
        <AttachmentIcon />
        <Input type="text" placeholder="Type your message" />
        <div>
          <MicIcon />
        </div>
      </div>
    </div>
  );
}

export default Page;
