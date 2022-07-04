import Link from "next/link";
import {memo} from "react";
import HamburgerMenu from "./Hamburger/HamburgerMenu";

function NavigationBar() {
  return (
    <div className="sticky z-50  inset-x-0 top-0  bg-white  w-[100%]  h-[10vh] md:h-[12vh] shadow px-[6vw]">
      <nav className="bg-white  px-2 sm:px-4 py-[2.5vh] rounded h-[10vh] md:h-[12vh] flex">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center my-4">
            <img
              alt="logoImg"
              src="/images/CNRI_logo_black_under.svg"
              className="h-[3.5vh] md:h-[7vh] cursor-pointer"
            />
          </Link>
          {/* 체험하기, 데모신청 버튼 */}
          <div className="flex order-2">
            <button
              type="button"
              className="bg-white hover:bg-blue-500 hover:text-white border border-blue-500 font-medium text-[2.5vw] md:text-[1.2vw] rounded-lg px-[2vw] md:px-[1.3vw] sm:py-[1.4vh] my-[0.5vh] md:my-[0] md:py-[1vh] mr-[1vw] ">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://lc.cnrikorea.com/">
                체험하기
              </a>
            </button>

            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 border-2 border-blue-500 text-white font-medium text-[2.5vw] md:text-[1.2vw] rounded-lg px-[2vw] md:px-[1.3vw] sm:py-[1.4vh] my-[0.5vh] md:my-[0] md:py-[1vh]">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://cis.cnrikorea.com/register">
                데모신청
              </a>
            </button>
            <div className="sm:hidden">
              <HamburgerMenu />
            </div>
          </div>
          {/* navigation bar 목록들 */}
          <div className="order-1  hidden sm:flex">
            <ul className="flex ">
              <li className="mx-[0.3vw]  px-[1vw] py-[1vh] text-[1vw] font-medium">
                <a target="_blank" rel="noopener noreferrer" href="https://cis.cnrikorea.com">
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
                  href="https://front-end-developer.oopy.io">
                  JOBS
                </a>
              </li>

              <li className=" mx-[0.3vw] px-[1vw] py-[1vh] text-[1vw] font-medium">
                <a target="_blank" rel="noopener noreferrer" href="https://brunch.co.kr/@cnrikorea">
                  BLOG
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(NavigationBar);
