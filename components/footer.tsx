import Image from "next/image";
import logo from "../public/logo.svg";
import { Twitter } from "@/public/icons/twitter";
import { Instagram } from "@/public/icons/instagram";
import { Discord } from "@/public/icons/discord";
import { Telegram } from "@/public/icons/telegram";
import { Facebook } from "@/public/icons/facebook";

const Footer = () => {
  return (
    <section className="w-full h-full p-4 flex flex-col justify-between">
      <footer className="w-full flex-col space-y-2 ">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="mt-8 md:mt-0 order-1 flex lg:justify-start justify-center">
            <span className="mx-auto mt-2">
              <a href="#" className="mx-2" rel="noopener noreferrer">
                <Image src={logo} width={158} height={32} alt="logo"></Image>
              </a>
            </span>
          </div>
          <div className="flex justify-center space-x-6 order-2">
            <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
              <ul className="lg:flex lg:flex-row  grid grid-flow-row grid-cols-3 grid-rows-2 justify-between lg:gap-4 gap-2">
                <li>
                  <a
                    href={`${process.env.NEXT_PUBLIC_WHITEPAPER_LINK}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 transition hover:text-blue-500"
                  >
                    <>
                      <h3 className="text-white text-center">White Paper</h3>
                    </>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-6 h-6 transition fill-black hover:text-blue-500"
                  >
                    <span className="">
                      <h3 className="text-white text-center">Technology</h3>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-6 h-6 transition fill-black hover:text-blue-500"
                  >
                    <span className="">
                      <h3 className="text-white text-center">About Us</h3>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-6 h-6 transition fill-black hover:text-blue-500"
                  >
                    <span className="">
                      <h3 className="text-white text-center">Blog</h3>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-6 h-6 transition fill-black hover:text-blue-500"
                  >
                    <span className="">
                      <h3 className="text-white text-center">Careers</h3>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="w-6 h-6 transition fill-black hover:text-blue-500"
                  >
                    <span className="">
                      <h3 className="text-white text-center">Contact</h3>
                    </span>
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className="px-4 py-2 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <span className="inline-flex justify-center w-full gap-3 lg:ml-auto md:justify-start md:w-auto">
              {/* <a
                href="#"
                className="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span className="sr-only">Discord</span>
                <Discord />
              </a> */}
              <a
                href={`${process.env.NEXT_PUBLIC_TWITTER_LINK}`}
                className="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </a>
              <a
                href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`}
                className="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              {/* <a
                href={`${process.env.NEXT_PUBLIC_WAITLIST_LINK}`}
                className="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span className="sr-only">Telegram</span>
                <Telegram />
              </a> */}
              <a
                href={`${process.env.NEXT_PUBLIC_FACEBOOK_LINK}`}
                className="w-6 h-6 transition fill-black hover:text-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
            </span>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-base text-center text-gray-400">
              <span className="mx-auto mt-2 text-sm text-gray-500">
                <a
                  href="#"
                  className=" hover:text-violet-500 text-white"
                  rel="noopener noreferrer"
                >
                  © 2023 Dawn AI. All rights reserved.
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
