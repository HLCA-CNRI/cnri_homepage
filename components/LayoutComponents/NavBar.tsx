import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {memo} from "react";
import styled from "styled-components";
import {HeaderLinkButton} from "../../styles/commonStyles";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import colors from "../../constants/colors";

function NavigationBar() {
  const router = useRouter();

  return (
    <div className="sticky z-50  inset-x-0 top-0 ">
      <nav className="px-[6vw] flex place-items-center justify-between min-w-[100%] bg-white border-b-2 h-[10vh] lg:h-[12vh]">
        <Link href="/" className="flex items-center my-4" passHref>
          <img
            alt="logoImg"
            src="/images/CNRI_logo_black_under.svg"
            className="md:h-[6.5vh] h-[4.5vh] cursor-pointer"
          />
        </Link>
        <ul className="hidden sm:flex ">
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
              <Link href="/product/greenerp" passHref>
                <span className="hover:text-constant-CIET_MINT">GreenERP</span>
              </Link>

              <Link href="/product/ciet" passHref>
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

        <div className="flex h-full items-center">
          <a href="https://cis.cnrikorea.com" target="_blank" rel="noreferrer">
            <CarbonToolButton>탄소회계 산정툴</CarbonToolButton>
          </a>
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

const CarbonToolButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.5s;
  text-align: center;

  margin: auto 0;
  border: 2px solid ${colors.CIS_MAIN_GREEN};

  &:hover {
    background-color: ${colors.CIS_MAIN_GREEN};
    color: white;
  }

  padding: 0 3vw;
  height: 15vw;
  border-radius: 3vw;
  margin-right: 5vw;

  @media screen and (min-width: 1200px), (orientation: landscape) {
    padding: 0 1.5vw;
    height: 3.5vw;
    border-radius: 1vw;
    margin-right: 0;
  }
`;
