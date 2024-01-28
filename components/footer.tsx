import Image from "next/image"
import logo from "../public/logo.svg"
import { Twitter } from "@/public/icons/twitter"
import { Instagram } from "@/public/icons/instagram"
import { Discord } from "@/public/icons/discord"
import { Telegram } from "@/public/icons/telegram"
import { Facebook } from "@/public/icons/facebook"

const Footer = () => {
  return (
    <section className='w-full h-full py-8 flex flex-col justify-between'>
       <footer className="w-full flex-col " >
                <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                  <div className="flex justify-center space-x-6 md:order-2">
                    <span className="flex justify-between w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
                      <ul className="lg:flex hidden flex-row justify-between gap-4">
                        <li> <a className="w-6 h-6 transition hover:text-blue-500">
                        <span className="">
                          <h3 className="text-white" >Community</h3 >
                        </span>
                     
                      </a></li>
                        <li><a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="">
                        <h3 className="text-white">Technology</h3 >
                        </span>
                      
                      </a></li>
                        <li><a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="">
                          <h3 className="text-white" >About Us</h3 >
                        </span>
                        
                      </a></li>
                        <li><a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="">
                        <h3 className="text-white">Blog</h3 >
                        </span>
                        
                      </a></li>
                        <li> <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="">
                        <h3 className="text-white">Careers</h3 >
                        </span>
                        
                      </a></li>
                      <li> <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="">
                        <h3 className="text-white" >Contact</h3 >
                        </span>
       
                      </a></li>
                      </ul>
                
                    </span>
                  </div>
                  <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-base text-center text-gray-400">
                      <span className="mx-auto mt-2">
                        
                        <a href="#" className="mx-2" rel="noopener noreferrer">
                        <Image src={logo} width={158} height={32} alt="logo"></Image>
                        </a>
                    
                      </span>
                    </p>
                  </div>
                </div>
                <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
                  <div className="flex justify-center space-x-6 md:order-2">
                    <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
                      <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="sr-only">
                          Discord
                        </span>
                        <Discord/>

                      </a>
                      <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="sr-only">
                          Twitter
                        </span>
                        <Twitter/>


                      </a>
                      <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="sr-only">
                          Instagram
                        </span>
                        <Instagram/>
      

                      </a>
                      <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="sr-only">
                          Telegram
                        </span>
                        <Telegram/>
          

                      </a>
                      <a className="w-6 h-6 transition fill-black hover:text-blue-500">
                        <span className="sr-only">
                          Facebook
                        </span>
                        <Facebook/>
                      </a>
                    </span>
                  </div>
                  <div className="mt-8 md:mt-0 md:order-1">
                    <p className="text-base text-center text-gray-400">
                      <span className="mx-auto mt-2 text-sm text-gray-500">
              
                        <a href="#" className="mx-2 hover:text-violet-500 text-gray-500" rel="noopener noreferrer">
                        © 2023 Dawn AI. All rights reserved.
                        </a>
                       
                       
                      </span>
                    </p>
                  </div>
                </div>
              </footer>            
            
    </section>
  )
}

export default Footer