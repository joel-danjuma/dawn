import { ButtonGenerate } from "./buttonGenerate"
import Inputdiv from "./input"
import Image from "next/image"
import { Static } from "./static"

export const Professional = () => {
  return (
    <section className="sections">
      <Static />
      <div>
        <h2 className=" regular-h2 text-center">Professional Email</h2>
        <p className="regular-p">Create and manage professional communication with students, parents, and colleagues directly within the platform.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Author Name</h4>
          <Inputdiv />
        </div>
        <div className="md:mb-[50px]">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Content To Include In The Mail</h4>
          <div className="flex gap-2 w-full h-[204px] md:h-[300px] bg-neutral-950 md:bg-[#222325] rounded-[16.41px] md:rounded-[7px] pt-[33px] pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
              <button>
                <Image src="/mic.png" alt="speak" width={24} height={24}/>
              </button>
              {/* <button>file</button>
              <p></p> */}
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
