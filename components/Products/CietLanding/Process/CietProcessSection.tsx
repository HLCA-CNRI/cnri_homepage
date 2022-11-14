import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import CostTime from "./Details/CostTime";
import * as SS from "./SharedStyle";
import ProcessPageTitle from "./Details/ProcessPageTitle";
import colors from "../../../../constants/colors";

const CietProcessSection = memo(() => (
  <SS.SectionContainer className="bg-ciet_mint_2 justify-center md:landscape:justify-start">
    <ProcessPageTitle title="CIET 업무 프로세스" isBgMint />

    <div className="visible md:landscape:hidden">
      <CostTime normalContent="소요 시간" strongContent="최대 3분" isTextMint hasGradation />
    </div>
    <div className="hidden md:landscape:flex">
      <CostTime normalContent="소요 시간" strongContent="최대 3분" isTextMint />
    </div>

    <div className="flex flex-col justify-center items-center md:landscape:flex-row md:landscape:mt-[1.5vh]">
      <ContentContainer className=" md:landscape:ml-[8vw] ">
        <ContentImageContainer className="w-[25vh] h-[25vh] md:landscape:w-[45vh] md:landscape:h-[45vh] ">
          <Image src="/images/ciet/puzzle_beige_bg.png" layout="fill" alt="퍼즐 이미지" />
        </ContentImageContainer>
        <ContentDescription>주요 데이터 API 연동</ContentDescription>
      </ContentContainer>

      <div className="w-[8vh] h-[8vh] my-[1vh] md:landscape:w-[8vw] md:landscape:h-[8vw] rotate-90 md:landscape:ml-[4vw] md:landscape:mr-[1vw] md:landscape:top-[-2vh] md:landscape:rotate-0 relative ">
        <Image src="/images/ciet/arrow_white.svg" layout="fill" alt="화살표" />
      </div>

      <ContentContainer>
        <ContentImageContainer className="w-[40vh] md:landscape:w-[70vh] mt-[1vh]">
          <Image
            src="/images/ciet/desktop_company_result.png"
            layout="fill"
            alt="ciet 회사 결과 페이지"
          />
        </ContentImageContainer>
        <ContentDescription className="md:landscape:ml-[2vw]">
          주간/월간 모니터링
        </ContentDescription>
      </ContentContainer>
    </div>
  </SS.SectionContainer>
));

export default CietProcessSection;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    flex-direction: column;
    justify-content: center;
  }
`;

const ContentImageContainer = styled.div`
  position: relative;
  height: 25vh;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    height: 45vh;
  }
`;

const ContentDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0px 0px 20px rgba(50, 106, 94, 0.15);
  color: ${colors.GREEN_GRAY};

  margin: 1vh 0;
  border-radius: 3vw;
  width: 60vw;
  height: 8vw;
  font-size: 3vw;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 10vw;
    height: 2.3vw;
    font-size: 1vw;
    margin: 5vh 0 0 0;
    border-radius: 1vw;
  }
`;
