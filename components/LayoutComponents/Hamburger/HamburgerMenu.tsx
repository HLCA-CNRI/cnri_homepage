import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Link from "next/link";
import classNames from "classnames";

const HamburgerMenuContainer = styled.div`
  display: flex;
  height: 100%;
`;

const HamburgerIcon = styled.div`
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
  height: 100%;
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  box-shadow: -2px 0 2px rgb(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  user-select: none;
`;

const ProductListStyle = styled.div`
  width: 100%;

  ul {
    height: 0;
    opacity: 0;
    visibility: hidden;
  }

  ul.active {
    height: 100%;
    opacity: 1;
    visibility: visible;
  }
`;

function HamburgerMenu() {
  const [open, setOpen] = useState(false); // 햄버거 메뉴가 open되있는지 보는 state.
  const [prodListIsOpen, setProdListIsOpen] = useState(false);
  // 사용자 온클릭 이벤트 핸들러 --> 클릭하면 open state 토글
  const clickBurger = () => {
    setOpen(!open);
  };

  const clickProdList = () => {
    setProdListIsOpen(!prodListIsOpen);
  };

  return (
    <div>
      <HamburgerMenuContainer>
        <HamburgerIcon>
          {/* 아이콘 부분 open state이 true 면 --> X 아이콘 인니면 햄버거 아이콘 */}
          <motion.div className="flex flex-col justify-center h-[100%]" onClick={clickBurger}>
            {/* 햄버거 아이콘,x아이콘 */}
            {open === false ? (
              <svg viewBox="0 0 100 80" width="30" height="30" className=" h-[100%]">
                <rect width="100" height="10" />
                <rect y="30" width="100" height="10" />
                <rect y="60" width="100" height="10" />
              </svg>
            ) : (
              <svg className="mt-[0.8vh]" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            )}
          </motion.div>
        </HamburgerIcon>
        {/* 매뉴에 들어가는 목록들, open이 true 일때만 보여짐 */}
        {open === true ? (
          <MenuContainer>
            <div role="button" className="w-[100%] flex justify-end">
              <div className=" pt-[72px] w-[60%] bg-white shadow-lg border h-[100vh] ">
                <Link href="/">
                  <div
                    role="button"
                    className=" py-[2vh] text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%]  px-[5vw]"
                    onClick={clickBurger}>
                    <div>CNRI</div>
                    <div> {">"} </div>
                  </div>
                </Link>
                <hr />
                <Link href="/product/ciet">
                  <div
                    role="button"
                    className=" py-[2vh] text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%]  px-[5vw]"
                    onClick={clickBurger}>
                    <div>PRODUCT</div>
                    <div> {">"} </div>
                  </div>
                </Link>
                {/* <ProductListStyle onClick={clickProdList}>
                  <div className="py-[2vh] text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]">
                    <div>PRODUCT</div>
                    <div> {">"} </div>
                  </div>
                  <ul
                    className={classNames("w-[100%] text-left text-[3vw]", {
                      active: prodListIsOpen,
                    })}>
                    <li className="py-[2vh] px-[5vw] hover:text-blue-600">
                      <a href="https://cis.cnrikorea.com" target="_blank" rel="noopener noreferrer">
                        CIS
                      </a>
                    </li>
                    <li className="py-[2vh] px-[5vw] hover:text-blue-600">
                      <Link href="/product/ciet">CIET</Link>
                    </li>
                  </ul>
                </ProductListStyle> */}
                <hr />
                <Link href="/company">
                  <div
                    role="button"
                    className=" py-[2vh] text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%]  px-[5vw]"
                    onClick={clickBurger}>
                    <div>COMPANY</div>
                    <div> {">"} </div>
                  </div>
                </Link>
                <hr />
                <Link href="/randd">
                  <div
                    role="button"
                    className=" py-[2vh]  text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                    onClick={clickBurger}>
                    <div>R&D</div>
                    <div> {">"} </div>
                  </div>
                </Link>
                <hr />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://front-end-developer.oopy.io"
                  className=" py-[2vh]  text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                  onClick={clickBurger}>
                  <div>JOBS</div>
                  <div> {">"} </div>
                </a>
                <hr />

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://brunch.co.kr/@cnrikorea"
                  className=" py-[2vh]  text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                  onClick={clickBurger}>
                  <div>BLOG</div>
                  <div> {">"} </div>
                </a>

                <hr />
              </div>
            </div>
            {/* <hr className = "mt-[72px]"></hr> */}
          </MenuContainer>
        ) : (
          ""
        )}
      </HamburgerMenuContainer>
    </div>
  );
}

export default HamburgerMenu;
