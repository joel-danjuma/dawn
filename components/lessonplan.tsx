import { ButtonGenerate } from "./buttonGenerate"
import Inputdiv from "./input"
import { Static } from "./static"
import Image from "next/image"

export const LessonPlaner = () => {
  return (
    <section className="sections">
      <Static/>
      <div>
        <h2 className=" regular-h2 text-center">Lesson Plan</h2>
        <p className="regular-p header-p">Generate Individualized Education Programs (IEPs) Tailored To Students Specific Needs and Learning Styles.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Topic, Standard, Or Objective</h4>
          <div className="flex gap-2 w-full h-[100px] md:h-[200px] bg-neutral-950 md:bg-[#222325] rounded-[16.41px] md:rounded-[7px] pt-[33px] pb-1 px-[18px]">
            <div >
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Additional Criteria</h4>
          <div className="flex gap-2 w-full h-[104px] md:h-[250px] bg-neutral-950 md:bg-[#222325] rounded-[16.41px] md:rounded-[7px] pt-[16px] md:pt-[33px] pb-1 px-[18px]">
            <div className="flex flex-col gap-8">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
              <button>
                <Image src="/file.png" alt="speak" width={24} height={24}/>
              </button>
              
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-[20px] md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Standard Set To Align To</h4>
          <div className="flex gap-2 w-full h-[48px] md:h-[150px] bg-neutral-950 md:bg-[#222325] rounded-[16.41px] md:rounded-[7px]  pt-[16px] md:pt-[33px] pb-1 px-[18px]">
            <div>
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
              
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
