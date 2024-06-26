import Image from "next/image"
import SectionTitle from "./sectionTitle"
import i1 from "../public/valuePropImg1.png"
import i2 from "../public/valuePropImg2.png"
import i3 from "../public/valuePropImg3.png"
import i4 from "../public/valuePropImg4.png"


const img1 = process.env.VALUE_PROP_IMG_1 || i1
const img2 = process.env.VALUE_PROP_IMG_2 || i2
const img3 = process.env.VALUE_PROP_IMG_3 || i3
const img4 = process.env.VALUE_PROP_IMG_4 || i4

const ValueProps = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4 ">
        <SectionTitle title="Built For Every and Anyone">
        Explore Dawn&apos;s complete suite of blockchain-scaling features.
        </SectionTitle>
        <div className="w-full h-full lg:space-y-[60px] space-y-0">
        <div className="w-full h-[568px] flex lg:flex-row flex-col justify-between ">
            <div className="w-full h-full flex-col space-y-4 lg:text-start text-justify justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Built For <br />Educators</h3>
                <p className="text-[#808080]">As an Educator You Can:</p>
                <ul className="space-y-4">
                    <li> - Access course creation tool</li>
                    <li> - Upload courses, questions, and resources</li>
                    <li> - Add closed captioning and sign language interpretation to courses</li>
                    <li> - View insights and analytics on course performance</li>
                </ul></div>
            <div className="w-full lg:flex hidden relative">
                <div className="absolute -top-[160px] -right-20"><Image src={img1} alt="img1" width={637} height={637}/></div>
                
               
            </div>
        </div>
        <div className="w-full h-[568px] flex lg:flex-row flex-col  justify-between ">
            <div className="w-full lg:flex hidden relative">
                <div className="absolute -top-[160px] -left-20"> <Image src={img2} alt="img1" width={637} height={637}/></div>
                
               
            </div>
            <div className="w-full h-full lg:text-end text-justify flex-col space-y-4 justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Tailored For <br />Learners</h3>
                <p className="text-[#808080]">As a Learner You Can:</p>
                <ul className="space-y-4">
                    <li> - Track progress and earn badges</li>
                    <li> - Access  course materials, including past questions and resources</li>
                    <li> - Participate in Learn and Earn program in the metaverse</li>
                    <li> - Connect with educators and other learners through a social platform</li>
                </ul></div>
            
        </div>
        <div className="w-full h-[568px] flex lg:flex-row flex-col  justify-between">
            <div className="w-full h-full flex-col space-y-4 lg:text-start text-justify justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Oppurtunity For <br />Affiliates</h3>
                <p className="text-[#808080]">As an Affliate Marketer, you can::</p>
                <ul className="space-y-4">
                    <li> - Access a referral link and marketing materials</li>
                    <li> - Earn tokens by referring new users to our platform</li>
                    <li> - View insights and analytics on referral performance</li>
                    <li> - View insights and analytics on referral performance</li>
                </ul>
            </div>
            <div className="w-full lg:flex hidden relative">
            
                <div className="absolute -top-[160px] -right-20"><Image src={img3} alt="img1" width={637} height={637}/></div>
               
            </div>
        </div>
        <div className="w-full h-[568px] flex lg:flex-row flex-col  justify-between ">
            <div className="w-full lg:flex hidden relative">
            
                <div className="absolute -top-[160px] -left-20"><Image src={img4} alt="img1" width={637} height={637}/></div>
                {/* <div className="absolute -top-[160px] -left-20"> <ValuePropImg4/></div> */}
               
            </div>
            <div className="w-full h-full flex-col space-y-4 lg:text-end text-justify justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Vacancy For <br />Job Seekers</h3>
                <p className="text-[#808080]">As a Job seeker, you can:</p>
                <ul className="space-y-4">
                    <li> - Create a profile and upload a resume</li>
                    <li> - Access to AI recruitment services and job matching</li>
                    <li> - Receive job alerts and notifications</li>
                    <li> - Receive job seekers recommendations based on skills and experience</li>
                </ul></div>
            
        </div>
        </div>
        
        

    </section>
  )
}

export default ValueProps