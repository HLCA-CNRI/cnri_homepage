import {useState, useRef, memo, useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";
import {deleteCookie, setCookie} from "cookies-next";
import {PopUpContents} from "../functions/PopUpContents";
import {CookieKey} from "../constants/enum/cookie_key.enum";
import pcBackground from "../public/images/popup_background.png";
import mbBackground from "../public/images/mobile_popup_background.png";

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
  }, [doesHideToday]);

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
            className={` absolute md:landscape:w-[40vw] md:landscape:h-[40vw] w-[90vw] h-[90vw]    bg-cover z-[200] shadow-md  `}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScOz28ki15EpRF1fyPatOQVmbkw5EndykPHZnOd_m6o8-8uHg/viewform?vc=0&c=0&w=1&flr=0"
              className="w-full h-full absolute"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                priority
                src={pcBackground}
                alt="탄소국경세의 모든것"
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
                className="relative  right-2 text-[28px] font-semibold text-black flex justify-end  hover:cursor-pointer opacity-70">
                ×
              </div>
            </div>
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
