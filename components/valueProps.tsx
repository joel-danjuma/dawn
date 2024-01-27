import SectionTitle from "./sectionTitle"
import { ValuePropImg1 } from "@/public/icons/valuePropImg1"
import { ValuePropImg2 } from "@/public/icons/valuePropImg2"
import { ValuePropImg3 } from "@/public/icons/valuePropImg3"
import { ValuePropImg4 } from "@/public/icons/valuePropImg4"
import Image from "next/image"
import img from "@/public/ValuePropImg.svg"

const ValueProps = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center p-4 ">
        <SectionTitle title="Built For Every and Anyone">
        Explore Dawn&apos;s complete suite of blockchain-scaling features.
        </SectionTitle>
        <div className="w-full h-full lg:space-y-[60px] space-y-0">
        <div className="w-full h-[568px] flex lg:flex-row flex-col justify-between ">
            <div className="w-full h-full flex-col space-y-4 justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Built For <br />Educators</h3>
                <p className="text-[#808080]">As an Educator You Can:</p>
                <ul className="space-y-4">
                    <li> - Access course creation tool</li>
                    <li> - Upload courses, questions, and resources</li>
                    <li> - Add closed captioning and sign language interpretation to courses</li>
                    <li> - View insights and analytics on course performance</li>
                </ul></div>
            <div className="w-full lg:flex hidden relative">
                <div className="absolute -top-[160px] -right-20"> <ValuePropImg1/></div>
               
            </div>
        </div>
        <div className="w-full h-[568px] flex lg:flex-row flex-col  justify-between ">
            <div className="w-full lg:flex hidden relative">
                <div className="absolute -top-[160px] -left-20"> <ValuePropImg2/></div>
               
            </div>
            <div className="w-full h-full text-end flex-col space-y-4 justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Tailored For <br />Learners</h3>
                <p className="text-[#808080]">As a Learner You Can:</p>
                <ul className="space-y-4">
                    <li> - Track progress and earn badges</li>
                    <li> - Access  course materials, including past questions and resources</li>
                    <li> - Participate in Learn and Earn program in the metaverse</li>
                    <li> - Connect with educators and other learners through a social platform</li>
                </ul></div>
            
        </div>
        <div className="w-full h-[568px] flex lg:flex-row flex-col  justify-between">
            <div className="w-full h-full flex-col space-y-4  justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Oppurtunity For <br />Affiliates</h3>
                <p className="text-[#808080]">As an Affliate Marketer, you can::</p>
                <ul className="space-y-4">
                    <li> - Access a referral link and marketing materials</li>
                    <li> - Earn tokens by referring new users to our platform</li>
                    <li> - View insights and analytics on referral performance</li>
                    <li> - View insights and analytics on referral performance</li>
                </ul></div>
            <div className="w-full lg:flex hidden relative">
                <div className="absolute -top-[160px] -right-20"> <ValuePropImg3/></div>
               
            </div>
        </div>
        <div className="w-full h-[568px] flex lg:flex-row flex-col  justify-between ">
            <div className="w-full lg:flex hidden relative">
                <div className="absolute -top-[160px] -left-20"> <ValuePropImg4/></div>
               
            </div>
            <div className="w-full h-full flex-col space-y-4 text-end justify-center items-center lg:py-14 py-8"><h3 className="text-[52px]">Vacancy For <br />Job Seekers</h3>
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