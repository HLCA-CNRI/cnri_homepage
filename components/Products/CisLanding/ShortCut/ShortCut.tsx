import React, {memo} from "react";
import Image from "next/image";
import classNames from "classnames";

const ShortCut = memo(() => (
  <div className="h-full gap-[3vh] w-full flex flex-col justify-center items-center space-y-4 md:gap-3   ">
    <a
      className="w-[48vw] md:w-1/3 h-auto"
      href="https://www.cnrikorea.com"
      target="_blank"
      rel="noreferrer">
      <img src="/images/CNRI_logo_black_under 2.svg" alt="mainLogo" />
    </a>
    <h1
      id="mainTitle"
      className={classNames(
        "text-[2.8vh] sm:text-3xl md:text-4xl xl:text-6xl 3xl:text-7xl align-middle font-bold font-jockey"
      )}>
      Carbon Intensity Simulator
    </h1>
    <span id="mainDesc" className="w-full text-center text-base md:text-lg xl:text-xl 3xl:text-2xl">
      온실가스 배출량 산정, <span className="md:hidden block" />
      <span className="text-constant-GREEN_MAIN">CI Simulator</span>와 함께하세요!
    </span>
    <div className="flex flex-row w-full h-1/8 justify-center space-x-6">
      <a
        target="_blank"
        className="text-base md:text-xl w-1/3 md:w-1/4 3xl:w-1/6 h-12 md:h-20 rounded-lg border-2 border-solid  bg-white border-cis_main_green hover:bg-cis_main_green hover:text-white focus:bg-constant-GREEN_MAIN_PRESSED transition-all duration-1 flex justify-center items-center "
        href="https://cis.cnrikorea.com/login"
        rel="noreferrer">
        로그인
      </a>
      <a
        target="_blank"
        className="text-base md:text-xl w-1/3 md:w-1/4 3xl:w-1/6 h-12 md:h-20 rounded-lg text-white bg-cis_main_green  border-cis_main_green border-2 hover:bg-white hover:text-black  focus:bg-constant-GREEN_MAIN_PRESSED transition-all duration-1  flex justify-center items-center "
        href="https://cis.cnrikorea.com/register"
        rel="noreferrer">
        회원가입
      </a>
    </div>
  </div>
));

export default ShortCut;
