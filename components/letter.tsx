import Inputdiv from "./input"
import { ButtonGenerate } from "./buttonGenerate"
import { Static } from "./static"
import Image from "next/image"

const Letter = () => {
  return (
    <section className="sections">
      <Static/>
      <div>
        <h2 className=" regular-h2 text-center">Letter Of Recommendation</h2>
        <p className="regular-p mt-10">Generate Personalized Letters Of Recommendation For Students Based On Their Academic Achievements And Qualities.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Student Pronouns</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Relationship To Student</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Instituition</h4>
          <Inputdiv />
        </div>
        <div className="mb-[20px] md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Important Information In Include</h4>
          <div className="flex gap-2 w-full h-[148px] md:h-[248px] textarea pb-1 px-[18px]">
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

export default Letter