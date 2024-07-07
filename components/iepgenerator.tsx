import { ButtonGenerate } from "./buttonGenerate"
import Inputdiv from "./input"
import { Static } from "./static"
import Image from "next/image"

export const Iepgenerator = () => {
  return (
    <section className="sections">
      <Static/>
      <div>
        <h2 className=" regular-h2 text-center">IEP Generator</h2>
        <p className="regular-p mt-10">Generate Individualized Education Programs (IEPs) Tailored To Students Specific Needs and Learning Styles.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
        <h4 className="regular-h3 mt-[20px]  mb-[8px]">Disability Category</h4>
          <Inputdiv />
        </div>
        <div>
          
          {/* <div className="flex gap-2 w-full h-[200px] bg-[#222325] rounded-[7px] pt-[33px] pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
              
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" placeholder="Paste The Original Text Here"></textarea>
            </div>
          </div> */}
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Description Of Student Behaviors, Needs, And Strengths:</h4>
          <div className="flex gap-2 w-full h-[250px] bg-neutral-950 md:bg-[#222325] rounded-[16.41px] md:rounded-[7px] pt-[33px] pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
              {/* <button>file</button>
              <p></p> */}
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none"></textarea>
            </div>
          </div>
        </div>
        <ButtonGenerate />
      </div>
    </section>
  )
}
