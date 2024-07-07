import Image from "next/image"
import Link from "next/link"

export const Static = () => {
  return (
    <div className="flex gap-10 absolute top-0 regular-12  md:top-12 left-[0px] md:left-[-50px] xl:left-[-80px]">
      <Link href='/dawnschool'>
        <button className="flex align-center gap-3">
          <Image src="/back.png" alt="Back" width={25} height={25}/>
          <p>Back</p>
        </button>
      </Link>
      <button className="flex align-center gap-3">
        <Image src="/clear.png" alt="Clear" width={20} height={25}/>
        <p>Clear</p>
      </button>
      <button className="flex align-center gap-3">
        <Image src="/star.png" alt="Example" width={25} height={25}/>
        <p>Example</p>
      </button>
    </div>
  )
}
