import Script from "next/script";
import Link from "next/link";
import { memo } from "react";
import HamburgerMenu from "./Hamburger/HamburgerMenu";

const NavigationBar: React.FC = () => {
  return (
    <div className="sticky z-50  inset-x-0 top-0  bg-white  w-[100%] shadow-sm border-b-2 h-[75px]  md:h-[100px]">
      <div className="mx-[6vw] h-[100%] ">
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-[2.5vh] rounded dark:bg-gray-800 h-[100%] flex">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center my-4">
              <a>
                <img src={"/images/logo.png"} className="w-[20vw] md:w-[12vw]" />
              </a>
            </Link>
            

            <div className="flex order-2">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-medium text-[2vw] md:text-[1.2vw] rounded-lg px-[4vw] md:px-[1.3vw] py-[1.4vh] md:py-[1vh]"
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cis.cnrikorea.net/register"
                  className="h-[100%] w-[100%]"
                >
                  데모 신청하기
                </a>
              </button>
              <div className = "sm:hidden">
              <HamburgerMenu/>

              </div>
           
            </div>

            <div className="order-1  hidden sm:flex">
              <ul className="flex ">
                <li className="mx-[0.3vw]  px-[1vw] py-[1vh] text-[1vw] font-medium">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://cis.cnrikorea.net"
                  >
                    PRODUCT
                  </a>
                </li>

                <li className=" mx-[0.3vw]  px-[1vw] py-[1vh] text-[1vw] font-medium">
                  <Link href="/company">COMPANY</Link>
                </li>

                <li className=" mx-[0.3vw]  px-[1vw] py-[1vh] text-[1vw] font-medium">
                  <Link href="/randd">R&D</Link>
                </li>

                <li className=" mx-[0.3vw] px-[1vw] py-[1vh] text-[1vw] font-medium">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://brunch.co.kr/@cnrikorea"
                  >
                    BLOG
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default memo(NavigationBar);
