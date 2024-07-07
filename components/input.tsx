import Image from "next/image";

const Inputdiv = () => {
  return (
    <div className="flex gap-2 w-full bg-neutral-950 md:bg-[#222325] rounded-full md:rounded-[7px] py-3 px-[18px]">
      <div>
        <button>
          <Image src="/mic.png" alt="speak" width={25} height={25}/>
          </button>
        {/* <button>file</button> */}
        {/* <p></p> */}
      </div>
      <div className="w-full bg-inherit h-full">
        <input name="" id="" className=" bg-inherit outline-none" />
      </div>
    </div>
  )
}

export default Inputdiv;