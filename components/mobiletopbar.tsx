import Image from "next/image"

const MobileTopbar = () => {
  return (
    <nav className="flex items-center w-full justify-between md:hidden">
      <button className="flex align-center gap-3">
          <Image src="/menu.png" alt="Back" width={30} height={30}/>
      </button>
      <Image src='/logo.png' alt='logo' width={59} height={12} />
      <div className="flex gap-[5.9px] ">
        <button className="flex align-center gap-3">
            <Image src="/language.png" alt="Back" width={20} height={20}/>
        </button>
        <button className="flex align-center gap-3">
            <Image src="/profilemobile.png" alt="Back" width={20} height={20}/>
        </button>
        <button className="flex align-center gap-3">
            <Image src="/setting.png" alt="Back" width={20} height={20}/>
        </button>
      </div>
    </nav>
  )
}

export default MobileTopbar;