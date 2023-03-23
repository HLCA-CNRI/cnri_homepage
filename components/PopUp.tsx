/* eslint-disable react/no-unescaped-entities */
import {useState, useRef, memo, useEffect} from "react";
import Image from "next/image";
import styled, {css} from "styled-components";
import {deleteCookie, setCookie} from "cookies-next";
import {CookieKey} from "../constants/enum/cookie_key.enum";
import pcBackground from "../public/images/popup_background.png";

const PopUp = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [doesHideToday, setDoesHideToday] = useState(false);
  const delBtnId = useRef("delete");

  // 팝업 오늘 하루 안보기 쿠키 설정
  useEffect(() => {
    if (!doesHideToday) return;
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

    const options = {path: "/", expires: expireDate};

    setCookie(CookieKey.NOT_SHOW_TODAY, true, options);
  }, [isOpened]);

  const onDelbtnClick = (e: any) => {
    const {id} = e.target;
    if (id === delBtnId.current) {
      setIsOpened(false);
    }
  };

  const onNotOpenPopup = (e: any) => {
    e.stopPropagation();
    setDoesHideToday((cur) => !cur);
  };

  return (
    <>
      <div> </div>
      {isOpened ? (
        <div
          role="button"
          id={delBtnId.current}
          onClick={onDelbtnClick}
          className={`flex justify-center items-center  fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[999] `}>
          {/* PC version */}
          <div
            className={` absolute md:landscape:w-[25vw] md:landscape:h-[25vw] w-[90vw] h-[90vw]    bg-cover z-[200] shadow-md  `}>
            <a
              href="https://event-us.kr/cnrikorea/event/58692"
              className="w-full h-full absolute"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                priority
                src={pcBackground}
                alt="제 2회 Scope3 세미나"
                sizes="880px"
                layout="fill"
                className="object-cover"
              />
            </a>
            <div className="w-full">
              <div
                role="button"
                id={delBtnId.current}
                onClick={onDelbtnClick}
                className="relative  right-1 text-[20px] font-semibold text-black flex justify-end  hover:cursor-pointer opacity-40">
                ×
              </div>
            </div>
            {/* 
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPGxnf-nxa6Oc31wwBNFVg9tX_TkdlwKC4xx7ilXvVsuKBBw/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
              rel="noopener noreferrer">
              <SeminorReviewBtn type="button">
                <span className="text-sm">"탄소국경세의 모든것"</span>
                <br />
                세미나 후기 작성하기
              </SeminorReviewBtn>
            </a>

            <a
              href="https://fashion-lca.cnrikorea.com/"
              target="_blank"
              // className="mb-[10vh]"
              rel="noopener noreferrer">
              <FashionLcaBtn type="button">
                의류 탄소 계산기
                <br />
                <span className="text-lg ">체험 바로가기</span>
              </FashionLcaBtn>
            </a> */}
            <footer className=" absolute  w-full text-right text-white text-[13px]  leading-[50px] bottom-0 transform:transition w-full h-[40px]">
              <div
                role="button"
                className="absolute text-right w-full top-8 right-0  flex items-center justify-end gap-1"
                onClick={onNotOpenPopup}>
                <input type="checkbox" id="checkbox" className="mt-0.5" checked={doesHideToday} />
                <span> 하루동안 열지 않기</span>
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default memo(PopUp);

const commonButtonStyle = css`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  font-weight: 600;
  -webkit-box-shadow: 1px 5px 16px 0px rgba(0, 0, 0, 0.35);
  box-shadow: 1px 5px 16px 0px rgba(0, 0, 0, 0.35);
`;

const SeminorReviewBtn = styled.button`
  ${commonButtonStyle}
  background-color:#4E9867;
  color: white;

  &:hover {
    background-color: #3e7a4f;
  }
`;
const FashionLcaBtn = styled.button`
  ${commonButtonStyle}
  background-color:black;
  color: white;

  &:hover {
    background-color: #3b3b3b;
  }
`;
