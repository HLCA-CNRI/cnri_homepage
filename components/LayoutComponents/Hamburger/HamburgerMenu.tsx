import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import {GrNext, GrClose} from "react-icons/gr";
import {FiMenu} from "react-icons/fi";

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
            {open === false ? <FiMenu size={24} className="relative -right-3" /> : <GrClose />}
          </motion.div>
        </HamburgerIcon>
        {/* 매뉴에 들어가는 목록들, open이 true 일때만 보여짐 */}
        {open === true ? (
          <MenuContainer>
            <div role="button" className="w-[100%] flex justify-end">
              <div className=" pt-[72px] w-[60%] bg-white shadow-lg border h-[100vh] ">
                <Link href="/" passHref>
                  <Tab role="button" onClick={clickBurger}>
                    <div>CNRI</div>
                    <GrNext />
                  </Tab>
                </Link>
                <hr />
                {/* <Link href="/product/ciet">
                  <div
                    role="button"
                    className=" py-[2vh] text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%]  px-[5vw]"
                    onClick={clickBurger}>
                    <div>PRODUCT</div>
                    <div> {">"} </div>
                  </div>
                </Link> */}
                <ProductListStyle onClick={clickProdList}>
                  <Tab>
                    <div>PRODUCT</div>
                    <GrNext />
                  </Tab>
                  <ul
                    className={classNames("w-[100%] text-left text-[3vw]", {
                      active: prodListIsOpen,
                    })}>
                    <li className="w-full h-[5vh] border-t-[0.3vh] border-dashed ">
                      <Link href="/product/greenerp" passHref>
                        <div
                          role="button"
                          onClick={clickBurger}
                          className=" w-full h-full px-[5vw] flex items-center text-right">
                          GreenERP
                        </div>
                      </Link>
                    </li>
                    <li className="w-full h-[5vh] ">
                      <Link href="/product/ciet" passHref>
                        <div
                          role="button"
                          onClick={clickBurger}
                          className=" w-full h-full px-[5vw] flex items-center">
                          CIET
                        </div>
                      </Link>
                    </li>
                  </ul>
                </ProductListStyle>
                <hr />
                <Link href="/company" passHref>
                  <Tab role="button" onClick={clickBurger}>
                    <div>COMPANY</div>
                    <GrNext />
                  </Tab>
                </Link>
                <hr />
                <Link href="/randd" passHref>
                  <Tab role="button" onClick={clickBurger}>
                    <div>R&D</div>
                    <GrNext />
                  </Tab>
                </Link>
                {/* <hr />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://front-end-developer.oopy.io"
                  className=" py-[2vh]  text-[3vw] flex justify-between cursor-pointer hover:text-blue-600 hover:text-[3.5vw] w-[100%] px-[5vw]"
                  onClick={clickBurger}>
                  <div>JOBS</div>
                  <div> {">"} </div>
                </a> */}
                <hr />

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://brunch.co.kr/@cnrikorea"
                  onClick={clickBurger}>
                  <Tab>
                    <div>BLOG</div>
                    <GrNext />
                  </Tab>
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

const Tab = styled.div`
  padding: 2vh 5vw;
  font-size: 3vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: blue;
    font-size: 3.5vw;
  }

  width: 100%;
`;
