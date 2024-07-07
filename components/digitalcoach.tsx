import Inputdiv from "./input"
import { ButtonGenerate } from "./buttonGenerate"
import { Static } from "./static"
import Image from "next/image"

const DigitalCoach = () => {
  return (
    <section className="sections">
      <Static />
      <div>
        <h2 className=" regular-h2 text-center">Digital Literacy Coach</h2>
        <p className="regular-p header-p">Provide Guidance And Resources To Improve Student Digital Literacy Skills, Including Internet Safety, Research Techniques And Digital Citizenship.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div className="mb-[20px] md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Subject Description</h4>
          <div className="flex gap-2 w-full h-[300px] textarea pb-1 px-[18px]">
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

export default DigitalCoach