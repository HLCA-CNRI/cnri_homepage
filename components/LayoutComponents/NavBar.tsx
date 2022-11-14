import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {memo} from "react";
import styled from "styled-components";
import {HeaderLinkButton, LinkButton} from "../../styles/commonStyles";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import useHover from "../../hooks/useHover";

function NavigationBar() {
  const router = useRouter();
  const [isHover, onMouseEnter, onMouseLeave] = useHover();
  console.log(router.pathname);

  return (
    <div className="sticky z-50  inset-x-0 top-0">
      <nav className="px-[6vw] flex place-items-center justify-between min-w-[100%] bg-white border-b-2 h-[10vh] lg:h-[12vh]">
        <Link href="/" className="flex items-center my-4">
          <img
            alt="logoImg"
            src="/images/CNRI_logo_black_under.svg"
            className="md:h-[6.5vh] h-[4.5vh] cursor-pointer"
          />
          {/* {router.pathname === "/product/ciet" ? (
            <img
              alt="logoImg"
              src="/images/CIET_signature.svg"
              className="md:h-[4.5vh] h-[2.5vh] cursor-pointer"
            />
          ) : (
            <img
              alt="logoImg"
              src="/images/CNRI_logo_black_under.svg"
              className="md:h-[6.5vh] h-[4.5vh] cursor-pointer"
            />
          )} */}
        </Link>
        <ul className="hidden sm:flex ">
          {/* <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/product/ciet" || router.pathname === "/"
                ? "font-bold text-black"
                : "text-[gray]"
            }`}>
            <Link href="/product/ciet">PRODUCT</Link>
            <div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`list flex absolute flex-col bg-white text-center top-[10vh] border-2 w-[8vw] z-20 hover:cursor-pointer ${
                isHover ? "" : "opacity-0"
              }`}>
              <a
                href="https://cis.cnrikorea.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-constant-CIET_MINT border-b-2 inline-block h-[5vh] leading-[5vh]">
                CIS
              </a>
              <Link href="/product/ciet" passHref>
                <span className="hover:text-constant-CIET_MINT inline-block h-[5vh] leading-[5vh] ">
                  CIET
                </span>
              </Link>
            </div>
            {router.pathname === "/product/ciet" && (
              <div className="absolute w-[6%] mx-auto border-2  border-black top-[11.8vh] bg-black ">
                {" "}
              </div>
            )}
          </li> */}
          <ProductListStyle
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/product/ciet" || router.pathname === "/"
                ? "font-bold text-black"
                : "text-[gray]"
            }`}>
            <Link href="/product/ciet">PRODUCT</Link>
            {router.pathname === "/product/ciet" && (
              <div className="absolute w-full mx-auto border-2  border-black top-[8.3vh] bg-black ">
                {" "}
              </div>
            )}
            <div className="list">
              <Link href="/product/cis">
                <span className="hover:text-constant-CIET_MINT">CIS</span>
              </Link>

              <Link href="/product/ciet">
                <span className="hover:text-constant-CIET_MINT">CIET</span>
              </Link>
            </div>
          </ProductListStyle>

          <li
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/company" || router.pathname === "/"
                ? "font-bold text-black"
                : "text-[gray]"
            }`}>
            <Link href="/company">COMPANY</Link>
            {router.pathname === "/company" && (
              <div className="absolute w-[6%] mx-auto border-2 border-black top-[11.8vh] bg-black ">
                {" "}
              </div>
            )}
          </li>

          <li
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/randd" || router.pathname === "/"
                ? "font-bold text-black"
                : "text-[gray]"
            }`}>
            <Link href="/randd">R&D</Link>
            {router.pathname === "/randd" && (
              <div className="absolute w-[6%] mx-auto border-2  border-black top-[11.8vh] bg-black ">
                {" "}
              </div>
            )}
          </li>

          <li
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/" ? "font-bold text-black" : "text-[gray]"
            }`}>
            <a target="_blank" rel="noopener noreferrer" href="https://front-end-developer.oopy.io">
              JOBS
            </a>
          </li>

          <li
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/" ? "font-bold text-black" : "text-[gray]"
            }`}>
            <a target="_blank" rel="noopener noreferrer" href="https://brunch.co.kr/@cnrikorea">
              BLOG
            </a>
          </li>
        </ul>

        <div className="flex">
          <Link href="/product/cis">
            <HeaderLinkButton>CIS</HeaderLinkButton>
          </Link>

          <Link href="/product/ciet">
            <HeaderLinkButton>CIET</HeaderLinkButton>
          </Link>
          <button type="button" className="sm:hidden">
            <HamburgerMenu />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default memo(NavigationBar);

const ProductListStyle = styled.li`
  position: relative;

  .list {
    opacity: 0;
    visibility: hidden;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -13vh;
    left: 0;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }

  &:hover .list {
    opacity: 1;
    visibility: visible;
  }

  .list span {
    padding: 0.8vw 1vw;
    cursor: pointer;
    text-align: center;
    transition: 0.3s ease-in;
  }
`;
