import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import {GrFormClose} from "react-icons/gr";
import * as SS from "./SharedStyle";
import CostTime from "./Details/CostTime";
import ProcessPageTitle from "./Details/ProcessPageTitle";
import colors from "../../../../constants/colors";
import ArrowGreen from "../../../../public/images/ciet/arrow_green.svg";
import Time from "../../../../public/images/ciet/icon_time.svg";

const NormalProcessSection = memo(() => (
  <SS.SectionContainer className="bg-beige_bg_2 justify-center md:landscape:justify-start">
    <ProcessPageTitle title="기존 업무 프로세스" />
    <CostTime normalContent="소요 시간" strongContent="최소 48시간" />

    <div className="hidden md:landscape:block relative w-[60vw] h-[24vw] mt-[5vh]">
      <Image
        src="/images/ciet/normal_process.png"
        layout="fill"
        alt="ciet 회사 결과 페이지"
        priority
      />
    </div>

    <div className=" flex flex-col justify-center items-center md:landscape:hidden ">
      <div className="px-[5vw] py-[2vw] mt-[1vw] rounded-[4vw] border-dashed border-light_green border-[0.5vw]">
        <MobileContentDescription>자사시스템</MobileContentDescription>
        <TextWithTimeIcon text="반복작업" />
        <MobileArrow text="Ctrl C + V" />
        <MobileContentDescription>Excel</MobileContentDescription>
        <TextWithTimeIcon text="외부데이터 게더링" />
        <MobileArrow text="Processing" />
        <MobileContentDescription>탄소회계</MobileContentDescription>
      </div>
      <GrFormClose size={30} color={colors.DARK_GRAY_2} className="my-[1vh]" />
      <div className="relative w-[38vw] h-[16vw]">
        <Image src="/images/ciet/icon_cycle.svg" layout="fill" alt="일반 공정 1년 반복 횟수" />
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="text-[3vw] text-dark_gray font-bold">12회 (1~12월)</div>
        </div>
      </div>
      <TextWithTimeIcon text="반복작업" />
    </div>
  </SS.SectionContainer>
));

export default NormalProcessSection;

const MobileArrow = memo(({text}: {text: string}) => (
  <div className="relative flex flex-col justify-center items-center">
    <div className="rotate-90  w-[8vh] h-[6vh] mt-[0.5vh] ">
      <Image src="/images/ciet/arrow_green.svg" layout="fill" alt="화살표" />
    </div>
    <div className="relative -top-[3vh] text-[2vw]">{text}</div>
  </div>
));

const TextWithTimeIcon = memo(({text}: {text: string}) => (
  <div className="flex items-center justify-center mr-[5vw]">
    <Time size="18" />
    <span className="font-bold text-[3.5vw] text-dark_gray">{text}</span>
  </div>
));

const MobileContentDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 20px rgba(50, 106, 94, 0.15);
  color: ${colors.GREEN_GRAY};

  margin: 0.5vh 0;
  border-radius: 2vw;
  width: 55vw;
  height: 6vw;
  font-size: 3vw;
`;
