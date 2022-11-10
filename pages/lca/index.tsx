import styled from "styled-components";
import {Widget} from "@typeform/embed-react";
import Image from "next/image";
import {memo, useEffect, useState} from "react";
import {NextSeo} from "next-seo";
import SectionDetail, {SectionContentType} from "../../components/LCAComponents/SectionDetail";

type ContentsType = {
  topTitle: string;
  topDescription: string;
  topNavText: string;
  sectionContents: SectionContentType[];
};

const contents: ContentsType = {
  topTitle: "LCA 프로젝트",
  topDescription: "귀사의 LCA 관련 문의를 감사한 마음으로 기다리고 있습니다.",
  topNavText: "탄소중립연구원과 함께 할 수 있는 프로젝트",
  sectionContents: [
    {
      numberString: "01",
      title: "다양한 LCA 규제 대응을 위한 분석",
      imagePath: "/images/lca/section1.png",
      imageAlt: "section1",
      description: [
        "EU의 CBAM(탄소국경세), 탄소회계 상의 Scope3 공급망 관리 이슈로 인해 제품의 LCA 분석의 필요성이 빠르게 증가하고 있습니다.",
        "당사는 ISO 14067을 준수하여 LCA 분석을 진행하며 미국의 GREET 프로그램을 적극 활용하여 규제 대응에 최선을 다하고 있습니다.",
      ],
      additionalContents: [
        {
          title: "[POSCO], [GS에너지] 등 수소 LCA 규제 대응을 위한 자문",
          topic: [
            {
              summary: "POSCO",
              details: [
                "POSCO 광양제철소 COG 부생수소 LCA 분석",
                "시나리오별 분석 및 탄소 관리 솔루션 제시",
              ],
            },
            {
              summary: "GS에너지",
              details: [
                "수소 생산 공정 관련 LCA 방법론 세미나 실시",
                "LCA 기반 규제 현황 공유",
                "가상 공정 시나리오별 전과정 배출량 제시",
              ],
            },
          ],
        },
      ],
    },
    {
      numberString: "02",
      title: "친환경 마케팅을 위한 환경성 분석",
      imagePath: "/images/lca/section2.png",
      imageAlt: "section2",
      description: [
        `당사는 귀사의 제품 및 서비스, 나아가 친환경 활동 및 캠페인 등의 환경성에 대해 데이터 기반의 분석 결과를 바탕으로\n설득력 있는 친환경 마케팅을 도와드립니다.`,
        "탄소배출량 관점에서 수치화하여 분석을 진행하며 이를 카드 형태 혹은 제품에 직접 적용할 수 있도록 제공해드리고 있습니다.",
      ],
      additionalContents: [
        {
          title: "[수퍼빈], [스타스테크], [윤회 주식회사] 등 친환경 분야 혁신기업과의 상호협력",
          topic: [
            {
              summary: "수퍼빈",
              details: [
                "플라스틱, 캔의 순환경제 비즈니스 모델 운영에 따른 환경성 분석",
                "네프론 기기에서의 탄소배출량 및 감축량 가시화",
              ],
            },
            {
              summary: "스타스테크",
              details: [
                "해양 폐기물인 불가사리를 활용하여 만든 친환경 제설제 환경성 분석",
                "폐인산, 폐소다회 재소재화 모델의 환경성 전과정 관점 분석",
              ],
            },
            {
              summary: "윤회 주식회사",
              details: [
                "의류 순환 모델에 따른 탄소배출 감축량 분석",
                "LG전자와의 콜라보레이션 행사에서 창출한 프로젝트 환경성 분석",
              ],
            },
          ],
        },
      ],
    },
    {
      numberString: "03",
      title: "지속적인 관리를 위한 맞춤형 솔루션",
      imagePath: "/images/lca/section3.png",
      imageAlt: "section3",
      description: [
        `당사는 함께 하는 업체들이 환경성까지 지속적으로 관리할 수 있도록 기존의 일회성으로 마무리되었던 데이터 분석을 넘어\n귀사에서 자체적으로 데이터 수집 및 관리할 수 있는 맞춤형 솔루션을 제공해드립니다.`,
        "직관적인 맞춤형 솔루션 및 설명을 통해 탄소배출량을 지속적으로 관리하실 수 있습니다.",
      ],
      additionalContents: [
        {
          title: "현 탄소배출량 수준 파악을 위한 맞춤형 분석 TOOL",
          topic: [
            {
              summary: "사업장 내부에서의 Scope 1 배출량 분석",
              details: ["고정 연소 · 이동 연소 · 화학반응"],
            },
            {
              summary: "외부 에너지 사용으로 인한 Scope 2 배출량 분석",
              details: ["외부 전기 사용 · 외부 스팀 사용"],
            },
            {
              summary: "사업 운영으로 인한 Scope 3 배출량 분석",
              details: ["기타 에너지 활동 · 임직원 출장 · 임직원 통근 · 판매(렌탈) 제품 사용"],
            },
          ],
        },
        {
          title: "탄소배출량 감축을 위한 지속적인 데이터 측정 및 관리",
          topic: [
            {
              summary: "데이터 연동을 통한 인풋 자동화",
            },
            {
              summary: "대시보드 형태의 분석 결과 제공",
            },
            {
              summary: "Export 가능한 분석 리포트 자동 생성",
            },
          ],
        },
      ],
    },
  ],
};

// LCA Project Page seo 내용
const lcaProjectSeo = {
  title: "LCA Project",
  canonical: "https://www.cnrikorea.com/lca",
  openGraph: {
    url: "https://www.cnrikorea.com/lca",
    title: "LCA Project | CNRIKOREA",
  },
};

function lca() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <NextSeo {...lcaProjectSeo} />
      <Wrapper>
        {/* 최상단 */}
        <TopPart>
          <h1>{contents.topTitle}</h1>
          <p>{contents.topDescription}</p>
        </TopPart>

        {/* 상단 내비게이션 */}
        <TopNav scrollY={scrollY}>
          <p className="xl:text-lg">{contents.topNavText}</p>
          <ul>
            <li>
              <a href="#01">01</a>
            </li>
            <li>
              <a href="#02">02</a>
            </li>
            <li>
              <a href="#03">03</a>
            </li>
            <li>
              <a href="#contact">문의하기</a>
            </li>
          </ul>
        </TopNav>

        {/* 주요 내용 */}
        <Main>
          {contents.sectionContents.map((sectionContent, index) => {
            const isEven = (index + 1) % 2 === 0;
            return (
              <Section key={sectionContent.numberString} id={sectionContent.numberString}>
                <SectionTitle className={isEven ? "justify-end" : "justify-start"}>
                  <h2>{sectionContent.numberString}</h2>
                  <h3>{sectionContent.title}</h3>
                </SectionTitle>
                <SectionContent>
                  <div className="flex flex-col space-y-2 w-full h-3/4">
                    <SectionDescription className={isEven ? "items-end" : "items-start"}>
                      {sectionContent.description.map((description) => (
                        <p key={description} className={isEven ? "text-right" : "text-left"}>
                          {description}
                        </p>
                      ))}
                    </SectionDescription>
                    <SectionDetail sectionContent={sectionContent} index={index} />
                  </div>
                  <SectionImage>
                    <Image
                      src={sectionContent.imagePath}
                      alt={sectionContent.imageAlt}
                      layout="fill"
                      objectFit="contain"
                    />
                  </SectionImage>
                </SectionContent>
              </Section>
            );
          })}
        </Main>

        {/* 문의하기 */}
        <Contact id="contact">
          <h2>문의하기</h2>
          <div className="grid xl:grid-cols-2">
            <Widget id="BsJPJCcK" className="typeform w-full h-[550px]" />
            <ContactBlock>
              <div className="upper-line absolute" />
            </ContactBlock>
          </div>
        </Contact>

        {/* 풋터 */}
        <Footer>
          <FooterImage>
            <Image src="/images/CNRI_logo_black_under.svg" alt="footerImage" layout="fill" />
          </FooterImage>
          <FooterText>
            <div className="grid grid-cols-8 gap-2">
              <span>E-mail</span>
              <span className="col-span-7">: contact@cnrikorea.com</span>
            </div>
            <div className="grid grid-cols-8 gap-2">
              <span>TEL</span>
              <span className="col-span-7">: 010-3652-8419</span>
            </div>
            <div className="grid grid-cols-8 gap-2">
              <span>본사</span>
              <span className="col-span-7">
                : 서울특별시 관악구 남부순환로 1793(백광빌딩), 9층 CNRIKOREA
              </span>
            </div>
          </FooterText>
        </Footer>
      </Wrapper>
    </>
  );
}

export default memo(lca);

const Wrapper = styled.div`
  color: #193532;
`;

const TopPart = styled.div`
  width: 100%;
  height: 230px;
  background-color: #7dd3c8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: #fff;
  padding: 0 6rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.5;
    color: "#CBF4EF";
  }

  @media (max-width: 1024px) {
    height: 180px;
    padding: 0 1rem;

    h1 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.3rem;
    }
    p {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.5;
      color: "#CBF4EF";
    }
  }
`;

const TopNav = styled.div<{scrollY: number}>`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => (props.scrollY > 180 ? "#7dd3c8" : "#fff")};
  color: ${(props) => (props.scrollY > 180 ? "#fff" : "#193532")};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 6rem;
  transition: background-color 0.3s ease-in-out;

  p {
    font-size: 1.5rem;
    font-weight: 400;
  }

  ul {
    display: flex;
    margin-left: 4rem;
    li {
      font-size: 1rem;
      font-weight: 400;
      margin-right: 8rem;
      cursor: pointer;
    }
    li:last-child {
      margin-right: 0;
    }

    @media (max-width: 768px) {
      margin-left: 0;
      li {
        font-size: 1rem;
        font-weight: 400;
        margin-right: 2rem;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1280px) {
    padding: 0 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 1rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }
  }
`;

const Main = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 5rem 24rem;

  @media (max-width: 1536px) {
    padding: 4rem 16rem;
  }

  @media (max-width: 1280px) {
    padding: 3rem 12rem;
  }

  @media (max-width: 1024px) {
    padding: 2rem 8rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const SectionTitle = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-right: 1rem;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  @media (max-width: 1280px) {
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

const SectionContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 2rem;
  white-space: pre-line;
`;

const SectionImage = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    height: 30rem;
  }
`;

const SectionDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const Contact = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #7dd3c8;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    background-color: #fff;
    padding: 1rem 6rem;
  }

  @media (max-width: 1280px) {
    h2 {
      padding: 0.5rem 3rem;
    }
  }
`;

const ContactBlock = styled.div`
  border-top: 4px solid #a7e0d9;
  position: relative;

  .upper-line {
    width: 12px;
    height: 4px;
    background-color: #a7e0d9;
    top: -4px;
    left: -8px;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 12rem;
  background-color: #fff;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 6rem;

  @media (max-width: 1024px) {
    padding: 1rem 0;
    flex-direction: column;
  }
`;

const FooterImage = styled.div`
  height: 100px;
  width: 350px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 70%;
  }
`;

const FooterText = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
  font-size: 0.8vw;
  font-weight: 400;

  @media (max-width: 1024px) {
    padding: 0 0.5rem;
    margin-left: 0;
    font-size: 0.5rem;
  }
`;
