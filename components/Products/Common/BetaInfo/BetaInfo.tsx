import React, {memo} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import styled from "styled-components";
import * as SS from "../SharedStyle";

type PropTypes = {
  productNameEng: string;
  productNameKor: string;
  urlParam: string;
  btnHoverColor: string;
  setIsReportOpen: React.Dispatch<boolean>;
};
const BetaInfo = memo(
  ({productNameEng, productNameKor, urlParam, btnHoverColor, setIsReportOpen}: PropTypes) => {
    const router = useRouter();

    const onReportClick = () => {
      setIsReportOpen(true);
    };
    return (
      <Wrapper>
        {/* 텍스트 내용 */}
        <TextWrapper>
          <Title>{`${productNameEng} 베타서비스`}</Title>
          <Description>
            {productNameKor} 베타 서비스 참여 기업을 모집합니다.
            <br />
            베타 서비스 참여 기업은 첫 온실가스 인벤토리를 <br className="xl:hidden" />
            무료로 이용하실 수 있습니다.
          </Description>
          <ButtonWrapper>
            <Button
              bgColor="white"
              color="black"
              hoverColor={btnHoverColor}
              onClick={() => router.push(`/participate`)}>
              참여하러 가기
            </Button>
            <Button
              bgColor="transparent"
              color="white"
              borderColor="white"
              hoverColor={btnHoverColor}
              onClick={onReportClick}
              isOnlyMoblie>
              자세히 보기
            </Button>
          </ButtonWrapper>
          <Description>
            지금 참여하시면
            <br />
            <strong>Carbon inventory 샘플 보고서</strong>를 무료로 제공합니다!
          </Description>
        </TextWrapper>

        {/* 리포트 */}
        <ReportWrapper onClick={onReportClick}>
          <PointerWrapper className="pointer">
            <Image src="/images/product/pointer.svg" layout="fill" />
          </PointerWrapper>
          <ImageWrapper className="image">
            <Image src="/images/product/beta_report.png" layout="fill" priority />
          </ImageWrapper>
        </ReportWrapper>
      </Wrapper>
    );
  }
);

export default BetaInfo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 2vh 10vw;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    justify-content: space-between;
    padding: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  color: white;
`;

const Title = styled.h2`
  font-weight: bold;

  font-size: 5.5vw;

  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

const Description = styled.div`
  font-size: 3vw;
  margin: 2vh 0;

  @media screen and (min-width: 1200px) {
    margin: 15px 0;
    font-size: 1rem;
  }
`;

const Button = styled.button<{
  bgColor: string;
  color: string;
  hoverColor: string;
  borderColor?: string;
  isOnlyMoblie?: boolean;
}>`
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({borderColor}) => (borderColor ? `1px solid ${borderColor}` : "none")};
  transition: all ease-out 0.5s;
  font-weight:bold;

  width: 48%;
  border-radius: 2vw;
  padding: 2vh 0;
  font-size:3.5vw;

  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
  }

  @media screen and (min-width: 1200px) {
    width: 50%;
    border-radius: 8px;
    padding: 20px 0;
    font-size:18px;
    ${({isOnlyMoblie}) => (isOnlyMoblie ? "display:none" : "")};
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
    gap: 0;
  }
`;

// 리포트

const ReportWrapper = styled.div`
  display: none;
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover .image {
      transform: scale(1.05, 1.05);
    }

    &:hover .pointer {
      transform: translateX(100%);
    }
  }
`;

const PointerWrapper = styled.div`
  position: relative;
  width: 45px;
  height: 45px;
  align-self: flex-end;
  margin: 0 10px 40px 0;
  transition: all ease-out 0.5s;
  z-index: 10;
  filter: drop-shadow(5px 5px 10px rgba(0 0 0 / 0.5));
`;

const ImageWrapper = styled.div`
  position: relative;

  width: 400px;
  height: 250px;
  transform-origin: left top;
  transition: all ease-out 0.5s;
`;
