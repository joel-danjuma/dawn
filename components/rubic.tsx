import { BUILD_ID_FILE } from "next/dist/shared/lib/constants"
import Inputdiv from "./input"
import { ButtonGenerate } from "./buttonGenerate"
import Image from "next/image"
import { Static } from "./static"

const Rubic = () => {
  return (
    <section className="sections">
      <Static />
      <div>
        <h2 className=" regular-h2 text-center">Rubic Generator</h2>
        <p className="regular-p header-p">Generate Individualized Education Programs (IEPs) Tailored To Students Specific Needs and Learning Styles.</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Standard/Objective</h4>
          <div className="flex gap-2 w-full h-[100px] md:h-[200px] textarea pb-1 px-[18px]">
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
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Assignment Title</h4>
          <div className="flex gap-2 w-full h-[100px] md:h-[250px] textarea pb-1 px-[18px]">
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
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Assignment Description</h4>
          <div className="flex gap-2 w-full h-[150px] textarea pb-1 px-[18px]">
            <div className="flex flex-col gap-[36px]">
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
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Point Scale</h4>
          <Inputdiv />
          {/* <div className="flex gap-2 w-full h-[150px] textarea pb-1 px-[18px]">
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
        <div className="mb-15">
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Addional Customizatoin for Rubic (Optional)</h4>
          <div className="flex gap-2 w-full h-[100px] md:h-[150px] textarea pb-1 px-[18px]">
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

export default Rubic