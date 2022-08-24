import Link from "next/link";
import {useRouter} from "next/router";
import {memo} from "react";
import styled from "styled-components";
import HamburgerMenu from "./Hamburger/HamburgerMenu";

function NavigationBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="sticky z-50  inset-x-0 top-0">
      <nav className="px-[6vw] flex place-items-center justify-between min-w-[100%] bg-white border-b-2 h-[10vh] lg:h-[12vh]">
        <Link href="/" className="flex items-center my-4">
          {router.pathname === "/product/ciet" ? (
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
          )}
        </Link>
        <ul className="hidden sm:flex ">
          <ProductListStyle className="mx-[0.3vw] px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <a rel="noopener noreferrer" href="#">
              PRODUCT
            </a>
            <div className="list">
              <span className="hover:text-constant-CIET_MINT">
                <a href="https://cis.cnrikorea.com" target="_blank" rel="noopener noreferrer">
                  CIS
                </a>
              </span>
              <Link href="/product/ciet">
                <span className="hover:text-constant-CIET_MINT">CIET</span>
              </Link>
            </div>
          </ProductListStyle>

          <li className=" mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <Link href="/company">COMPANY</Link>
          </li>

          <li className=" mx-[0.3vw]  px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <Link href="/randd">R&D</Link>
          </li>

          <li className=" mx-[0.3vw] px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <a target="_blank" rel="noopener noreferrer" href="https://front-end-developer.oopy.io">
              JOBS
            </a>
          </li>

          <li className=" mx-[0.3vw] px-[1vw] py-[1vh] text-[1.5vw] md:text-[1vw] font-medium">
            <a target="_blank" rel="noopener noreferrer" href="https://brunch.co.kr/@cnrikorea">
              BLOG
            </a>
          </li>
        </ul>
        <div className="flex gap-2">
          <div>
            <button
              type="button"
              className="bg-white text-constant-CIET_MINT hover:bg-constant-CIET_MINT hover:text-white border-2 border-constant-CIET_MINT transition-all duration-300 ease-in font-medium text-[2.5vw] sm:text-[1.2vw] rounded-lg w-10 md:w-auto px-[1vw] md:px-[1.6vw] py-[0.8vh] mr-[1.5vw] sm:mr-[0.8vw] md:my-[0] md:py-[1vh] text-center">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://cis.cnrikorea.com">
                CIS
              </a>
            </button>

            <button
              type="button"
              className="text-white bg-constant-CIET_MINT hover:bg-white hover:text-constant-CIET_MINT border-2 border-constant-CIET_MINT transition-all  ease-in font-medium text-[2.5vw] sm:text-[1.2vw] rounded-lg w-10 md:w-auto px-[1vw] md:px-[1.3vw] py-[0.8vh] mr-[1.5vw] md:my-[0] md:py-[1vh] text-center">
              <a className="" target="_blank" rel="noopener noreferrer" href="/product/ciet">
                CIET
              </a>
            </button>
          </div>
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
