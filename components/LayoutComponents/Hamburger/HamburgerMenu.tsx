import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Link from "next/link";

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

function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const clickBurger = () => {
    setOpen(!open);
  };

  return (
    <div>
      <HamburgerMenuContainer>
        <HamburgerIcon>
          <motion.div
            className="ml-[3vw] flex flex-col justify-center h-[100%]"
            onClick={clickBurger}>
            {open === false ? (
              <svg viewBox="0 0 100 80" width="30" height="30" className=" h-[100%] mt-[0.8vh]">
                <rect width="100" height="11" />
                <rect y="30" width="100" height="11" />
                <rect y="60" width="100" height="11" />
              </svg>
            ) : (
              <svg className="mt-[0.8vh]" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
              </svg>
            )}
          </motion.div>
        </HamburgerIcon>
        {open === true ? (
          <MenuContainer>
            <div
              role="button"
              className="w-[100%] flex justify-end "
              onClick={() => {
                setOpen(false);
              }}>
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
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://cis.cnrikorea.net"
                  className="  py-[2vh] text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                  onClick={clickBurger}>
                  <div>PRODUCT</div>
                  <div> {">"} </div>
                </a>

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
                  href="https://brunch.co.kr/@cnrikorea"
                  className=" py-[2vh]  text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                  onClick={clickBurger}>
                  <div>BLOG</div>
                  <div> {">"} </div>
                </a>

                <hr />

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://brunch.co.kr/@cnrikorea"
                  className=" py-[2vh]  text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                  onClick={clickBurger}>
                  <div>JOBS</div>
                  <div> {">"} </div>
                </a>
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
