import Inputdiv from "./input"
import { ButtonGenerate } from "./buttonGenerate"
import Image from "next/image"
import { Static } from "./static"

const SyllabusGenerator = () => {
  return (
    <section className="sections">
      <Static />
      <div>
        <h2 className=" regular-h2 text-center">Syllabus Generator</h2>
        <p className="regular-p header-p">Build Structured Course Syllabi  With Clear Objectives, Learning Outcomes, And Assessments Strategies. </p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Subject</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]"> Course Description</h4>
          <Inputdiv />
        </div>
        <div className="md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Course Objectives</h4>
          <div className="flex gap-2 w-full h-[132px] md:h-[151px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div className=" md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Required Materials</h4>
          <div className="flex gap-2 w-full  h-[132px] md:h-[151px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div className="md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grading Policy</h4>
          <div className="flex gap-2 w-full h-[132px] md:h-[151px] textarea  pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div className="md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Class Policies / Expectations</h4>
          <div className="flex gap-2 w-full h-[132px] md:h-[151px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div className="md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Course Outline / What Is Covered</h4>
          <div className="flex gap-2 w-full h-[132px] md:h-[151px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <div className="mb-[20px] md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Additional Customization (Optional)</h4>
          <div className="flex gap-2 w-full h-[132px] md:h-[151px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>
        <ButtonGenerate />
      </div>
    </section>
  )
}

export default SyllabusGenerator;