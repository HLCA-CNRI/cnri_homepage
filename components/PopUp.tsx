/* eslint-disable react/no-unescaped-entities */
import {useState, useRef, memo, useEffect} from "react";
import styled, {css} from "styled-components";
import {deleteCookie, setCookie} from "cookies-next";
import {CookieKey} from "../constants/enum/cookie_key.enum";

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
            className={` relative w-[90vw] md:landscape:w-[25vw] md:landscape:h-[40vw]  z-[200] flex flex-col gap-8 justify-center  `}>
            <div className="w-full">
              <div
                role="button"
                id={delBtnId.current}
                onClick={onDelbtnClick}
                className="absolute  right-0 -top-3 md:landscape:-right-10 md:landscape:top-[25vh] text-[28px] font-semibold text-white flex justify-end  hover:cursor-pointer opacity-70 shadow-sm">
                ×
              </div>
            </div>

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
            </a>
            <div
              role="button"
              className="text-right w-full  flex items-center justify-end gap-1 text-white text-sm"
              onClick={onNotOpenPopup}>
              <input type="checkbox" id="checkbox" className="mt-0.5" checked={doesHideToday} />
              <span> 하루동안 열지 않기</span>
            </div>
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
