import {NextSeo} from "next-seo";
import Image from "next/image";
import {memo, useEffect} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import {cietCardContent} from "../../../functions/cietContents";

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
      <div className="snap-center snap-always pb-[5vh] md:pb-[25vh]">
        <div className="pt-[15vh] md:pt-[25vh]">
          <div className="flex justify-center font-bold text-[5vw] md:text-[4vw] 2xl:text-[3vw]">
            기후변화 대응,
          </div>
          <div className="flex justify-center font-bold text-[5vw] md:text-[4vw]  2xl:text-[3vw]">
            이제는 데이터 기반으로.
          </div>
        </div>
        <div className="flex justify-center my-[3.2vh]">
          <a
            className="bg-white text-constant-CIET_MINT hover:bg-constant-CIET_MINT hover:text-white border-2 border-constant-CIET_MINT transition-all duration-300 ease-in text-[3vw] md:text-[1vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://ciet-test.cnrikorea.com">
            바로가기
          </a>
          <a
            className="scroll-smooth text-white bg-constant-CIET_MINT hover:bg-white hover:text-constant-CIET_MINT border-2 border-constant-CIET_MINT transition-all  ease-in text-[3vw] md:text-[1vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            rel="noopener noreferrer"
            href="#footer">
            문의하기
          </a>
        </div>
      </div>

      {/* section 1 */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-constant-CIET_MINT">
        <div className="flex flex-col justify-center md:justify-start">
          <h3 className="flex flex-col justify-center  md:justify-start mb-5">
            <span className="text-[7vw] text-center md:text-left md:text-[2vw]">단 30초 만에,</span>
            <strong className="text-[7vw] text-center md:text-left md:text-[2vw] text-white">
              임직원 회사 생활
            </strong>
            <strong className="text-[7vw] text-center md:text-left md:text-[2vw] text-white">
              데이터 수집
            </strong>
          </h3>
          <div className="flex justify-center md:justify-start">
            <Image src="/images/ciet/tree.webp" width="50" height="25" />
          </div>
          <p className="font-medium mt-5 mb-5 hidden md:block">
            상황별 제시되는 최적의 질문 응답만으로
            <br />
            임직원들의 회사 생활 데이터를 수집할 수 있습니다.
          </p>
          <p className="font-medium hidden md:block">
            단 30초의 응답만으로 측정하기 어렵던
            <br />
            임직원들로 인한 탄소배출량을 손쉽게 측정하세요.
          </p>
        </div>
        <ImageStyle>
          <Image src="/images/ciet/section-1.png" layout="fill" />
        </ImageStyle>
      </section>

      {/* section 2 */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-constant-CIET_BACK">
        <ImageStyle className="puzzle order-2 md:order-1 md:mt-3">
          <Image src="/images/ciet/section-2.png" layout="fill" />
        </ImageStyle>
        <div className="flex flex-col justify-center md:justify-start order-1 md:order-2">
          <h3 className="flex flex-col justify-center  md:justify-start mb-5">
            <span className="text-[7vw] text-center md:text-right md:text-[2vw]">
              내·외부 시스템 연동을 통한
              <br />
            </span>
            <strong className="text-[7vw] text-center md:text-right md:text-[2vw] text-black">
              탄소배출량 측정 자동화
            </strong>
          </h3>
          <div className="flex justify-center md:justify-end mt-3 mb-3 md:mb-8">
            <Image src="/images/ciet/tree.webp" width="50" height="25" />
          </div>
          <p className="font-medium mt-5 mb-5 hidden md:block text-center md:text-right">
            내·외부 시스템 연동을 통해 임직원 및 회사 운영으로 인한
            <br />
            탄소배출량 데이터를 자동으로 측정할 수 있습니다.
          </p>
          <p className="font-medium hidden md:block text-center md:text-right">
            단 한 번의 시스템 연동으로 탄소배출량 측정을 자동화하고
            <br />
            소요되는 시간을 절약하세요.
          </p>
        </div>
      </section>

      {/* section 3 */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-constant-CIET_BACK">
        <div className="flex flex-col justify-center md:justify-start">
          <h3 className="flex flex-col justify-center  md:justify-start mb-5">
            <span className="text-[7vw] text-center md:text-left md:text-[2vw]">
              사내 시스템에서의
            </span>
            <strong className="text-[7vw] text-center md:text-left md:text-[2vw] text-black">
              탄소배출량 측정을 위한
              <br />
              API 연동
            </strong>
          </h3>
          <div className="flex justify-center md:justify-start mt-3 mb-3">
            <Image src="/images/ciet/tree.webp" width="50" height="25" />
          </div>
          <p className="font-medium mt-5 mb-5 hidden md:block">
            별도의 솔루션 구축 비용 없이 CIET 서비스를
            <br />
            내부 프로그램, 내부 서비스에 연동할 수 있습니다.
          </p>
          <p className="font-medium hidden md:block">
            API 연동을 통해 CIET에 접속하지 않고,
            <br />
            ​회사의 내부 시스템에서 탄소배출량을 측정 및 관리할 수 있습니다.
          </p>
        </div>
        <ImageStyle>
          <Image src="/images/ciet/section-3.png" layout="fill" />
        </ImageStyle>
      </section>

      {/* section 4 */}
      <section className="w-full flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-constant-CIET_MINT">
        <ImageStyle className="dashboard order-2 md:order-1 md:mt-8">
          <Image src="/images/ciet/section-4.png" layout="fill" />
        </ImageStyle>
        <div className="flex flex-col justify-center md:justify-start order-1 md:order-2">
          <h3 className="flex flex-col justify-center  md:justify-start mb-5">
            <span className="text-[7vw] text-center md:text-right md:text-[2vw]">
              대시보드를 통한,
            </span>
            <strong className="text-[7vw] text-center md:text-right md:text-[2vw] text-white">
              주간·월간
              <br />
              탄소배출량 관리
            </strong>
          </h3>
          <div className="flex justify-center md:justify-end mt-3 mb-3">
            <Image src="/images/ciet/tree.webp" width="50" height="25" />
          </div>
          <p className="font-medium mt-5 mb-5 hidden md:block text-center md:text-right">
            Admin 계정을 통해
            <br />
            ​주간·월간 탄소배출량을 관리할 수 있습니다.
          </p>
          <p className="font-medium hidden md:block text-center md:text-right">
            주간·월간 데이터를 통해 임직원 및 회사의 탄소배출량을
            <br />
            체계적으로 관리하고 Hot-spot을 쉽게 확인하세요.
          </p>
        </div>
      </section>

      {/* section 5 */}
      <section className="w-full overflow-hidden flex flex-col justify-start pt-20 md:pt-0 md:justify-center items-center gap-5 md:gap-10 h-screen scroll-mt-28 snap-center snap-always bg-constant-CIET_BACK">
        <h3 className="flex md:flex-row flex-col gap-2">
          <span className="text-[7vw] text-center md:text-right md:text-[2vw]">
            감축 목표 설정 및
          </span>
          <strong className="text-[7vw] text-center md:text-right md:text-[2vw] text-black">
            감축 시나리오 제공
          </strong>
        </h3>
        <ScrollContainer className="scroll-container flex md:justify-center w-full pl-10 pr-3 md:pl-0 md:pr-0 gap-0 md:gap-10">
          {cietCardContent.map((item) => (
            <CardStyle>
              <div>
                <Image src={`/images/ciet/card-${item.id}-icon.png`} width="50" height="50" />
              </div>
              <span className="text-xl mb-2">{item.title}</span>
              <CardImageStyle>
                <Image src={`/images/ciet/card-${item.id}.png`} layout="fill" />
              </CardImageStyle>
              <p className="font-medium hidden md:block text-center leading-8 whitespace-pre">
                {item.description}
              </p>
            </CardStyle>
          ))}
        </ScrollContainer>
      </section>

      <section>
        <div className="flex justify-center my-[10vh]">
          <a
            className="scroll-smooth text-white bg-constant-CIET_MINT hover:bg-white hover:text-constant-CIET_MINT border-2 border-constant-CIET_MINT transition-all  ease-in  text-[3vw] md:text-[1vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
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

  &.puzzle * {
    width: 25vw !important;
    height: 25vw !important;
  }

  &.dashboard span {
    height: 25vw !important;
  }

  @media screen and (max-width: 768px) {
    & *,
    &.puzzle * {
      width: 80vw !important;
      height: 80vw !important;
    }

    &.dashboard span {
      width: 100vw !important;
      height: 60vw !important;
    }
  }
`;

const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: 640px) {
    /* flex-shrink: 1; */
    /* margin-right: 1.5rem; */
    padding-right: 1.5rem;
  }
`;

const CardImageStyle = styled.div`
  & * {
    width: 15vw !important;
    height: 10vw !important;
    position: static !important;
  }

  @media screen and (max-width: 640px) {
    & * {
      width: 70vw !important;
      height: 50vw !important;
    }
  }
`;
