import {NextSeo} from "next-seo";
import Image from "next/image";
import {memo, useEffect} from "react";
import styled from "styled-components";
import CietProcessSection from "../../../components/Products/CietLanding/Process/CietProcessSection";
import NormalProcessSection from "../../../components/Products/CietLanding/Process/NormalProcessSection";
import * as SS from "../../../components/Products/CietLanding/SharedStyle";
import Report from "../../../components/Products/Common/Report/Report";
import colors from "../../../constants/colors";

// Company Page seo 내용
const cietSeo = {
  title: "Product Ciet",
  canonical: "https://www.cnrikorea.com/product/ciet",
  openGraph: {
    url: "https://www.cnrikorea.com/product/ciet",
    title: "Product Ciet | CNRIKOREA",
  },
};

function CietPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NextSeo {...cietSeo} />
      <div className="snap-center snap-always pb-[5vh] md:landscape:pb-[25vh]">
        <div className="pt-[15vh] md:landscape:pt-[25vh] flex flex-col items-center">
          <div className="h-[2.5vh] w-[30vw] md:landscape:h-[4.5vh] md:landscape:w-[10vw]   relative cursor-pointer  m-3 mb-4">
            <Image alt="logoImg" src="/images/CIET_signature.svg" layout="fill" sizes="300px" />
          </div>
          <div className="flex justify-center font-bold text-[5vw] md:landscape:text-[4vw] 2xl:text-[3vw]">
            기후변화 대응,
          </div>
          <div className="flex justify-center font-bold text-[5vw] md:landscape:text-[4vw]  2xl:text-[3vw]">
            이제는 데이터 기반으로.
          </div>
        </div>
        <div className="flex justify-center my-[3.2vh]">
          <a
            className="bg-white text-constant-CIET_MINT hover:bg-constant-CIET_MINT hover:text-white border-2 border-constant-CIET_MINT transition-all duration-300 ease-in text-[3vw] md:landscape:text-[1vw] rounded-lg px-[7vw] py-[1vh] md:landscape:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ciet.cnrikorea.com">
            바로가기
          </a>
          <a
            className="scroll-smooth text-white bg-constant-CIET_MINT hover:bg-white hover:text-constant-CIET_MINT border-2 border-constant-CIET_MINT transition-all  ease-in text-[3vw] md:landscape:text-[1vw] rounded-lg px-[7vw] py-[1vh] md:landscape:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            rel="noopener noreferrer"
            href="#footer">
            문의하기
          </a>
        </div>
      </div>

      {/* section 1 */}
      <section className="w-full flex flex-col md:landscape:flex-row justify-center items-center gap-5 md:landscape:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-ciet_mint_2">
        <div className="flex flex-col justify-center md:landscape:justify-start">
          <h3 className="flex flex-col justify-center  md:landscape:justify-start ">
            <span className="text-[6vw] text-center md:landscape:text-left md:landscape:text-[2vw]">
              단 30초 만에,
            </span>
            <SS.PageWhiteTitle className="text-center md:landscape:text-left">
              임직원 회사 생활
              <br />
              데이터 수집
            </SS.PageWhiteTitle>
          </h3>
          <SS.SectionDescription>
            <p className="hidden md:landscape:block">
              상황별 제시되는 최적의 질문 응답만으로
              <br />
              임직원들의 회사 생활 데이터를 수집할 수 있습니다.
            </p>
            <p className=" hidden md:landscape:block">
              단 30초의 응답만으로 측정하기 어렵던
              <br />
              임직원들로 인한 탄소배출량을 손쉽게 측정하세요.
            </p>
          </SS.SectionDescription>
        </div>
        <div className="flex ">
          <ImageStyle className="phone">
            <Image src="/images/ciet/ciet_phone_home.png" layout="fill" priority />
          </ImageStyle>

          <ImageStyle className="phone">
            <Image src="/images/ciet/ciet_phone_qna.png" layout="fill" priority />
          </ImageStyle>
        </div>
      </section>

      <section className="snap-center snap-always">
        <NormalProcessSection />
      </section>
      <section className="snap-center snap-always">
        <CietProcessSection />
      </section>

      {/* section 2 */}
      <section className=" flex-col-reverse justify-center w-full flex flex-col  md:landscape:px-[17vw] md:landscape:flex-row md:landscape:justify-between items-center  md:landscape:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-ciet_beige_bg">
        <ImageStyle className="puzzle md:landscape:mt-3">
          <Image src="/images/ciet/puzzle_beige_bg.png" layout="fill" priority />
        </ImageStyle>
        <div className="flex flex-col justify-center md:landscape:justify-start order-1 md:landscape:order-2">
          <SS.PageMintTitle className="text-left text-ciet_mint_2 ">
            내·외부 시스템 연동을 통한
            <br />
            탄소배출량 측정 자동화
          </SS.PageMintTitle>
          <SS.SectionDescription>
            <p>
              내·외부 시스템 연동을 통해 구성원 및 <br className="block md:landscape:hidden" />
              시설 운영으로 인한
              <br className="hidden md:landscape:block" />
              탄소배출량 데이터를
              <br className="block md:landscape:hidden" /> <strong>자동으로 측정 및 관리</strong>
            </p>
            <p>
              단 <strong>한 번의 시스템 연동</strong>으로,
              <br className="block md:landscape:hidden" /> <strong>탄소배출량 측정 자동화</strong>
            </p>
          </SS.SectionDescription>
        </div>
      </section>

      {/* section 3 */}
      <section className=" relative w-full flex justify-center items-center flex-col md:landscape:flex-row md:landscape:items-stretch  gap-5 md:landscape:gap-[10vw] h-screen scroll-mt-28 snap-center snap-always bg-ciet_mint_2 overflow-x-hidden">
        <div className="flex flex-col justify-center mt-[10vh] md:landscape:mt-0 md:landscape:justify-center  md:landscape:pl-[15vw] ">
          <SS.PageWhiteTitle>
            기업 내부 시스템에서
            <br />
            탄소배출량 측정을 위한 <br className="block md:landscape:hidden" />
            API 연동
          </SS.PageWhiteTitle>
          <SS.SectionDescription>
            <p>
              별도의 솔루션 구축 <strong>비용 없이</strong> CIET 서비스를
              <br />
              <strong>내부 프로그램, 내부 서비스</strong>에 연동 가능
            </p>
            <p>
              <strong>API 연동</strong>을 통해 CIET에 접속하지 않고
              <br className="block md:landscape:hidden" />
              <strong> 기업 내부 시스템</strong>에서 <br className="hidden md:landscape:block" />
              <strong>탄소배출량 측정 및 관리 가능</strong>
            </p>
          </SS.SectionDescription>
        </div>
        <div className="-right-[5vw] md:landscape:right-0 flex-1 flex justify-end items-end  relative ">
          <ImageStyle className="ecount_screenshot flex-end">
            <Image src="/images/ciet/ecount_screenshot.png" layout="fill" priority />
          </ImageStyle>
        </div>
      </section>

      <div className="w-full h-[100vh] pt-[13vh] flex   md:landscape:flex-row  justify-center items-center  bg-ciet_beige_bg snap-center snap-always">
        <Report color={colors.CIET_MINT_2} />
      </div>

      <section>
        <div className="flex justify-center my-[10vh]">
          <a
            className="scroll-smooth text-white bg-ciet_mint_2 hover:bg-white hover:text-ciet_mint_2 border-2 border-ciet_mint_2 transition-all  ease-in  text-[3vw] md:landscape:text-[1vw] rounded-lg px-[7vw] py-[1vh] md:landscape:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            rel="noopener noreferrer"
            href="#footer">
            문의하기
          </a>
        </div>
      </section>
    </div>
  );
}

export default memo(CietPage);

const ImageStyle = styled.div`
  & * {
    width: 30vw !important;
    height: 30vw !important;
    position: static !important;
  }

  &.phone * {
    width: 15vw !important;
    height: 29vw !important;
  }

  &.ecount_screenshot * {
    width: 45vw !important;
    height: 38vw !important;
  }

  &.puzzle * {
    width: 33vw !important;
    height: 33vw !important;
  }

  &.dashboard span {
    height: 25vw !important;
  }

  @media screen and (max-width: 768px) {
    & *,
    &.puzzle * {
      width: 40vh !important;
      height: 40vh !important;
    }

    &.dashboard span {
      width: 100vw !important;
      height: 60vw !important;
    }

    &.ecount_screenshot * {
      width: 53vh !important;
      height: 40vh !important;
    }

    &.phone * {
      width: 18vh !important;
      height: 35vh !important;
    }
  }
`;

// const CardStyle = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;

//   @media screen and (max-width: 640px) {
//     &:last-child {
//       padding-right: 12vw;
//     }
//   }
// `;

// const CardImageStyle = styled.div`
//   & * {
//     width: 15vw !important;
//     height: 10vw !important;
//     position: static !important;
//   }

//   @media screen and (max-width: 640px) {
//     & * {
//       width: 70vw !important;
//       height: 50vw !important;
//     }
//   }
// `;
