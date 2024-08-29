import Inputdiv from "./input"
import { ButtonGenerate } from "./buttonGenerate"
import Image from "next/image"
import { Static } from "./static"

const Sciencelab = () => {
  return (
    <section className="sections">
      <Static />
      <div>
        <h2 className=" regular-h2 text-center">Science Lab</h2>
        <p className="regular-p mt-10">Virtualize Laboratory Experiments And Simulations For Hands-On-Learning  Experiences In Science Subjects.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Science Lab Description</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Additional Context</h4>
          <Inputdiv />
        </div>
        <div className="mb-[20px] md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Standards Set To Align To</h4>
          <div className="flex gap-2 w-full h-[132px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
            </div>
            <div className="w-full bg-inherit h-full">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" placeholder="Paste The Original Text Here"></textarea>
            </div>
          </div>
        </div>
        <ButtonGenerate />
      </div>
    </section>
  )
}

export default Sciencelab