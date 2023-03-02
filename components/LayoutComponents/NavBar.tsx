import Link from "next/link";
import {CgClose} from "react-icons/cg";
import Image from "next/image";
import {useRouter} from "next/router";
import {memo, useState} from "react";
import styled from "styled-components";
import HamburgerMenu from "./Hamburger/HamburgerMenu";
import colors from "../../constants/colors";
import mediaList from "../../constants/mediaList";

function NavigationBar() {
  const router = useRouter();
  const [showFashionLcaBubble, setShowFashionLcaBubble] = useState(true);

  const handleBubbleRemove = () => {
    setShowFashionLcaBubble(false);
  };

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
          <GroupTab
            className={` ${
              router.pathname === "/product/ciet" ||
              router.pathname === "/product/greenerp" ||
              router.pathname === "/"
                ? "font-bold text-black"
                : "text-[gray]"
            }`}>
            <Link href="/product/greenerp">PRODUCT</Link>
            {(router.pathname === "/product/ciet" || router.pathname === "/product/greenerp") && (
              <div className="absolute w-full mx-auto border-2  border-black top-[8.3vh] bg-black " />
            )}
            <div className="list">
              <Link href="/product/greenerp" passHref>
                <span className="hover:text-constant-CIET_MINT">GreenERP</span>
              </Link>

              <Link href="/product/ciet" passHref>
                <span className="hover:text-constant-CIET_MINT">CIET</span>
              </Link>
            </div>
          </GroupTab>

          <Tab
            className={`${
              router.pathname === "/company" || router.pathname === "/"
                ? "font-bold text-black"
                : "text-[gray]"
            }`}>
            <Link href="/company">COMPANY</Link>
            {router.pathname === "/company" && (
              <div className="absolute w-[6%] mx-auto border-2 border-black top-[11.8vh] bg-black " />
            )}
          </Tab>

          <Tab
            className={`${
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
          </Tab>

          {/* <li
            className={`flex justify-center mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium  ${
              router.pathname === "/" ? "font-bold text-black" : "text-[gray]"
            }`}>
            <a target="_blank" rel="noopener noreferrer" href="https://front-end-developer.oopy.io">
              JOBS
            </a>
          </li> */}
          <GroupTab
            className={`cursor-pointer  ${
              router.pathname === "/" ? "font-bold text-black" : "text-[gray]"
            }`}>
            <span>MEDIA</span>

            <div className="list">
              {mediaList.map((media) => (
                <a href={media.link} target="_blank" rel="noopener noreferrer">
                  <span className="hover:text-constant-CIET_MINT">{media.name}</span>
                </a>
              ))}
            </div>
          </GroupTab>
        </ul>

        <div className="flex h-full items-center gap-0 md:gap-1">
          <div className="relative">
            <a href="https://fashion-lca.cnrikorea.com" target="_blank" rel="noreferrer">
              <FashionCarbonToolButton>패션 LCA</FashionCarbonToolButton>
            </a>
            {showFashionLcaBubble ? (
              <FashionCarbonBubble className=" animate-bounce">
                <div className="flex gap-1">
                  <strong>NEW RELEASE✨</strong>
                  <CgClose
                    color="#ffffff"
                    size="13"
                    className="relative -right-2 -top-0.5 cursor-pointer"
                    onClick={handleBubbleRemove}
                  />
                </div>
                <div>
                  의류 탄소계산기를 <br />
                  체험해보세요!
                </div>
              </FashionCarbonBubble>
            ) : null}
          </div>
          <a href="https://cis.cnrikorea.com" target="_blank" rel="noreferrer">
            <CarbonToolButton>
              탄소회계
              <br className="block md:hidden" />
              산정툴
            </CarbonToolButton>
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

const Tab = styled.li`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3vw;
  padding: 1vh 1vw;
  font-size: 1.5vw;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 1vw;
  }
`;

const GroupTab = styled(Tab)`
  position: relative;

  .list {
    opacity: 0;
    visibility: hidden;
    width: 8vw;
    height: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 5vh;
    background-color: #fff;
    border: 1px solid #e5e5e5;
  }

  &:hover .list {
    opacity: 1;
    visibility: visible;
  }

  .list > span {
    padding: 0.8vw;
    cursor: pointer;
    text-align: center;
    transition: 0.3s ease-in;
  }

  .list a {
    padding: 0.8vw;
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

  padding: 0 2vw;
  height: 15vw;
  border-radius: 3vw;
  margin-right: 1vw;

  @media screen and (min-width: 1200px), (orientation: landscape) {
    padding: 0 1.5vw;
    height: 3.5vw;
    border-radius: 1vw;
    margin-right: 0;
  }
`;

const FashionCarbonToolButton = styled(CarbonToolButton)`
  border: 2px solid black;

  &:hover {
    background-color: black;
  }
`;

const FashionCarbonBubble = styled.div`
  position: absolute;
  background-color: black;
  width: auto;
  white-space: nowrap;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 12px;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  cursor: default;
`;
