import React, {memo} from "react";
import styled from "styled-components";
import colors from "../../../../constants/colors";
import * as SS from "../SharedStyle";
import Feature from "./Details/Feature";

const Features = memo(() => {
  const features = [
    {
      description: `클라우드 기반 SaaS ERP를\n통해 공정 데이터 관리`,
      imgSrc: "",
    },
    {
      description: `탄소회계 자동화 및 시각화를 통한\n배출량 모니터링`,
      imgSrc: "",
    },
    {
      description: `LCI DB 적용을 통한 제품별 CFP\n(Carbon Footprint) 산정`,
      imgSrc: "",
    },
    {
      description: `전력 부문 미래 예측 분석 역량을 활용한\n배출량 예측 기능`,
      imgSrc: "",
    },
  ];

  return (
    <ContentContainer
      isPhotoLeft={false}
      className=" py-[6vh] px-[10vw]  md:landscape:px-0 md:landscape:py-0">
      <Title color={colors.CIS_MAIN_GREEN}>CIS 기능 소개</Title>
      <div className="flex-col justify-center items-start gap-[10vw] md:landscape:flex-row md:landscape:justify-between md:landscape:gap-[1vw] md:landscape:items-center flex  ">
        {features.map((f, idx) => (
          <Feature number={idx + 1} description={f.description} />
        ))}
      </div>
    </ContentContainer>
  );
});

export default Features;

const Title = styled(SS.Title)`
  font-weight: bold;
  text-align: left;
  padding: 0;
`;

const ContentContainer = styled(SS.ContentFlex)`
  flex-direction: column;
  align-items: stretch;
  gap: 2vw;
  justify-content: center;
`;
