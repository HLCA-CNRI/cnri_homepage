import React, {memo} from "react";
import styled from "styled-components";
import Image from "next/image";
import * as SS from "../SharedStyle";
import colors from "../../../../constants/colors";
import * as CSS from "../../Common/SharedStyle";

const Intro = memo(() => (
  <CSS.ContentFlex isPhotoLeft={false} className="py-[6vh]">
    <div className="snap-always snap-center pt-[6vh] px-[10vw] md:landscape:p-0 md:landscape:snap-none flex flex-col justify-center items-start ">
      <ContentContainer>
        <IntroTitle>
          어려운 탄소회계가
          <br />
          <strong>SaaS ERP 서비스</strong>를 통해
          <br />
          <strong>저렴하고 쉬워졌습니다.</strong>
        </IntroTitle>
        <Description>
          <strong>CIS</strong>는 공정 데이터 관리와 배출량 관리를
          <br />
          <strong>한 번에 할 수 있는 클라우드 기반 서비스</strong>입니다.
        </Description>
      </ContentContainer>
      <ContentContainer>
        <IntroTitle>
          <strong>제품 CFP</strong>(Carbon Footprint)
          <br />
          <strong>분석</strong>을 통해 당사 제품의 가치를
          <br />
          <strong>높일 수 </strong>있습니다.
        </IntroTitle>
        <Description>
          <strong>CIS</strong>는 고객사들이 요구하는 <strong>Carbon Footprint</strong>를<br />
          <strong>매 순간 관리 가능한 형태</strong>로 제공합니다.
        </Description>
      </ContentContainer>
    </div>
    <ImageWrapper className="snap-always snap-center">
      <Image
        src="/images/cis/intro.png"
        alt="introduce"
        layout="fill"
        priority
        className="object-contain"
      />
    </ImageWrapper>
  </CSS.ContentFlex>
));

export default Intro;

const IntroTitle = styled.div`
  color: ${colors.BEIGE_BG_2};
  font-size: 6vw;
  font-weight: light;
  padding-bottom: 0vh;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 1.75rem;
    padding-bottom: 20px;
  }
`;

const ContentContainer = styled.div`
  padding-bottom: 10vw;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding-bottom: 2.4vw;
  }
`;

const Description = styled(SS.Description)`
  text-align: left;
  margin: 5vw 0;
  margin: 0;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  width: 86vw;
  height: 63vw;
  @media screen and (min-width: 1200px) and (orientation: landscape) {
    width: 600px;
    height: 500px;
    transition: all ease-in-out 0.5s;
    transform-origin: 50% 20%;
    cursor: pointer;

    &:hover {
      transform: scale(160%);
    }
  }
`;
