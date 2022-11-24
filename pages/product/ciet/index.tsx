import classNames from "classnames";
import {NextSeo} from "next-seo";
import Image from "next/image";
import {memo, useEffect, useState} from "react";
import styled from "styled-components";
import CietProcessSection from "../../../components/Products/CietLanding/Process/CietProcessSection";
import NormalProcessSection from "../../../components/Products/CietLanding/Process/NormalProcessSection";
import * as SS from "../../../components/Products/CietLanding/SharedStyle";
import BetaInfo from "../../../components/Products/Common/BetaInfo/BetaInfo";
import Report from "../../../components/Products/Common/Report/Report";
import ReportModal from "../../../components/Products/Common/ReportModal/ReportModal";
import SectionFluidContainer from "../../../components/Products/Common/SectionContainer/SectionFluidContainer";
import SectionNormalContainer from "../../../components/Products/Common/SectionContainer/SectionNormalContainer";
import Summary from "../../../components/Products/Common/Summary/Summary";
import colors from "../../../constants/colors";
import {ProductNameEnum} from "../../../constants/enum/product_name.enum";
import {ProductEngNameMapping, ProductKorNameMapping} from "../../../constants/productMapping";

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

  const [isReportImgOpen, setIsReportImgOpen] = useState(false);

  return (
    <div>
      <NextSeo {...cietSeo} />
      <SectionFluidContainer height="300px" bgColor={colors.CIET_MINT_2} hasPadding={false}>
        <BetaInfo
          productNameEng={ProductEngNameMapping.get(ProductNameEnum.CIET) ?? ""}
          productNameKor={ProductKorNameMapping.get(ProductNameEnum.CIET) ?? ""}
          urlParam={ProductNameEnum.GREENERP}
          btnHoverColor={colors.CIET_BTN_HOVER}
          setIsReportOpen={setIsReportImgOpen}
        />
      </SectionFluidContainer>
      <SectionNormalContainer bgColor={colors.BEIGE_BG_2}>
        <Summary
          productEnum={ProductNameEnum.CIET}
          isPhotoLeft
          logoPath="/images/ciet/ciet_logo.svg"
          imgPath="/images/ciet/desktop_company_result.png"
          mainColor={colors.CIET_MINT_2}
          darkColor={colors.CIET_NAVY}
        />
      </SectionNormalContainer>

      <section className="snap-center snap-always">
        <NormalProcessSection />
      </section>
      <section className="snap-center snap-always">
        <CietProcessSection />
      </section>
      {/* section 2 */}
      <section className=" flex-col-reverse justify-center w-full flex flex-col  md:landscape:px-[17vw] md:landscape:flex-row md:landscape:justify-between items-center  md:landscape:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-beige_bg_2">
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
      <section className="w-full flex flex-col md:landscape:flex-row justify-center items-center gap-5 md:landscape:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-beige_bg_2">
        <div className="flex flex-col justify-center md:landscape:justify-start">
          <h3 className="flex flex-col justify-center  md:landscape:justify-start ">
            <span className="text-[6vw] text-center md:landscape:text-left md:landscape:text-[2vw] font-bold">
              단 30초 만에,
            </span>
            <SS.PageMintTitle className="text-center md:landscape:text-left">
              임직원 회사 생활
              <br />
              데이터 수집
            </SS.PageMintTitle>
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
      <div className="w-full h-[100vh] pt-[13vh] flex   md:landscape:flex-row  justify-center items-center  bg-ciet_mint_2 snap-center snap-always">
        <Report color={colors.CIET_MINT_2} />
      </div>
      <ReportModal isOpen={isReportImgOpen} setIsOpen={setIsReportImgOpen} />
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

const ModalWrapper = styled.div<{isOpened: boolean}>`
  width: 100%;
  height: 100%;
  z-index: ${({isOpened}) => (isOpened ? "-10" : "-1000")};
  opacity: ${({isOpened}) => (isOpened ? "1" : "0")};
`;
