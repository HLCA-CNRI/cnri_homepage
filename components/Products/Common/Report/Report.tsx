import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import colors from "../../../../constants/colors";
import VerticalArrow from "../../../../public/images/product/arrow_dotted_vertical.svg";

const Report = memo(({color}: {color: string}) => (
  <div className="w-full h-full  flex justify-center items-center">
    <div className="hidden md:landscape:flex md:landscape:flex-col  justify-center items-center">
      <div className="flex justify-center gap-[2vw] mb-[2vw] items-center ">
        <ReportDescription1 />
        <ArrowContainer
          className="w-[15vw] h-[1vh] lg:w-[200px] lg:h-[10px] relative"
          color={color}>
          <Image src="/images/ciet/arrow_dotted_horizontal.svg" layout="fill" alt="report1" />
        </ArrowContainer>
        <ReportDescription2 />
      </div>
      <div className="flex justify-around w-[1100px] ">
        <ImageContainer className="w-[500px]">
          <Image src="/images/ciet/report_1.png" layout="fill" alt="report1" priority />
        </ImageContainer>
        <ImageContainer className="w-[500px]">
          <Image src="/images/ciet/report_2.png" layout="fill" alt="report1" priority />
        </ImageContainer>
      </div>
    </div>

    {/* mobile */}
    <div className=" h-full py-[8vh]  flex md:landscape:hidden flex-col justify-between w-full items-center">
      <MobileContentContainer>
        <MobileImageContainer className="h-[25vh]">
          <Image src="/images/ciet/report_1.png" layout="fill" alt="report1" />
        </MobileImageContainer>
        <ReportDescription1 />
      </MobileContentContainer>

      <ArrowContainer className="w-[5vw] h-[13vw] relative my-[1.5vh]" color={color}>
        <VerticalArrow />
      </ArrowContainer>

      <MobileContentContainer>
        <MobileImageContainer className="h-[25vh]">
          <Image src="/images/ciet/report_2.png" layout="fill" alt="report1" />
        </MobileImageContainer>
        <ReportDescription2 />
      </MobileContentContainer>
    </div>
  </div>
));

export default Report;

const ReportDescription1 = memo(() => (
  <ContentDescription>
    온실가스 배출량 보고서 자동 생성
    <br />
    간편하게(ESG 보고서 형태)
  </ContentDescription>
));

const ReportDescription2 = memo(() => (
  <ContentDescription>
    ESG 보고서에
    <br />
    간편하게 공시 가능
  </ContentDescription>
));

const MobileContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
`;

const ContentDescription = styled.div`
  background-color: white;
  box-shadow: 0px 0px 40px rgba(99, 158, 135, 0.15);
  text-align: center;
  color: ${colors.DARK_GRAY};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 75vw;
  height: 13vw;
  font-size: 3vw;
  border-radius: 2vw;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 230px;
    height: 80px;
    border-radius: 0.8vw;
    font-size: 0.8rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    height: 350px;
    // border-radius: 5vw;
  }
`;

const MobileImageContainer = styled.div`
  position: relative;
  width: 35vh;
`;

const ArrowContainer = styled.div<{color: string}>`
  color: ${({color}) => color};
`;
