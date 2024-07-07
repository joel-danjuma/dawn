import { ButtonGenerate } from "./buttonGenerate"
import Inputdiv from "./input"
import { Static } from "./static"

const Informative = () => {
  return (
    <section className="sections">
      <Static/>
      <div>
        <h2 className=" regular-h2 text-center">Informative Texts</h2>
        <p className="regular-p header-p">Access a vast library of informative texts across various subjects to enrich lesson plans and provide additional resources to students</p>
      </div>
      <div className='mt-[49px]'>
        <div>
          <h4 className="regular-h3 mt-[20px]  mb-[8px]">Grade Level</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Informative Text Type</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Text Length</h4>
          <Inputdiv />
        </div>
        <div>
          <h4 className="regular-h3 mt-[20px] mb-[8px]">Topic (Be As Specific As Possible)</h4>
          <div className="flex gap-2 w-full bg-neutral-950  md:bg-[#222325] rounded-[7px] py-4 px-[18px]">
            {/* <div>
              <button>mic</button>
            </div> */}
            <div className="w-full bg-inherit h-[204px] md:h-[258px]">
              <textarea name="" id="" className="w-full h-full bg-inherit outline-none" ></textarea>
            </div>
          </div>
        </div>

        <ButtonGenerate />
      </div>
    </section>
  
  )
}

export default Informative