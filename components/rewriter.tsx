import { ButtonGenerate } from "./buttonGenerate";
import Image from "next/image";
import { Static } from "./static";
import Inputdiv from "./input";


const Rewriter = () => {
  return (
    <section className="sections">
      <Static />
      <div>
        <h2 className=" regular-h2 text-center">Text Rewriter</h2>
        <p className="regular-p header-p">Seamlessly rewrite texts to create unique content for lessons, assignments, and assessments.</p>
      </div>
      <div>
        <h4 className="regular-h3 mt-8 mb-2 md:my-[49px]">Original Text:</h4>
        <div className="flex gap-2 w-full h-[385px] md:h-[438px] bg-neutral-950 md:bg-[#222325] mb-[60px] rounded-[16.41px] md:rounded-[7px] pt-[33px] pb-1 px-[18px]">
          <div className="flex flex-col gap-[36px]">
            <button>
              <Image src="/mic.png" alt="speak" width={24} height={24}/>
            </button>
            <button>
              <Image src="/file.png" alt="speak" width={24} height={24}/>
            </button>
          </div>
          <div className="w-full bg-inherit h-full">
            <textarea name="" id="" className="w-full h-full bg-inherit outline-none" placeholder="Paste The Original Text Here"></textarea>
          </div>
        </div>
        <div className="md:hidden">
          <h4 className="regular-h3 mt-[37px] md:mt-[20px]  mb-[8px]">Rewrite So That:</h4>
          <Inputdiv />
        </div>
        <ButtonGenerate />
      </div>
    </section>
  )
}

export default Rewriter;