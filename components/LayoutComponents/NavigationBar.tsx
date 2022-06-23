import Script from "next/script";
import Link from "next/link";
import { memo } from "react";
import HamburgerMenu from "./Hamburger/HamburgerMenu";

const NavigationBar: React.FC = () => {
  return (
    <div className="sticky z-50  inset-x-0 top-0  bg-white  w-[100%] shadow-sm   h-[10vh] md:h-[12vh]">
      <div className="mx-[6vw] h-[100%] ">
        <nav className="bg-white  px-2 sm:px-4 py-[2.5vh] rounded dark:bg-gray-800 h-[10vh] md:h-[12vh] flex">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center my-4">
              <a>
                <img src={"/images/logo.png"} className="h-[3.5vh] md:h-[7vh]" />
              </a>
            </Link>
            

            <div className="flex order-2">
              <button
                type="button"
                className=" "
              >
                  <a
            className="bg-blue-500 hover:bg-blue-700 border-blue-500  border-2 text-white text-[2.5vw] xs:text-[2vw] md:text-[1vw] rounded-lg py-[0.7vh] px-[3.5vw] xs:px-[2.5vw] xs:py-[1.7vh] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cis.cnrikorea.net/register"
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
