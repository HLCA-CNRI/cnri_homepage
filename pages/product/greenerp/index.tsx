import React, {memo, useEffect, useState} from "react";
import Features from "../../../components/Products/CisLanding/Features/Features";
import Intro from "../../../components/Products/CisLanding/Intro/Intro";
// import ShortCut from "../../../components/Products/CisLanding/ShortCut/ShortCut";
import UseCase1 from "../../../components/Products/CisLanding/UseCase/UseCase1";
import UseCase2 from "../../../components/Products/CisLanding/UseCase/UseCase2";
import UseCase3 from "../../../components/Products/CisLanding/UseCase/UseCase3";
import BetaInfo from "../../../components/Products/Common/BetaInfo/BetaInfo";
import Report from "../../../components/Products/Common/Report/Report";
import ReportModal from "../../../components/Products/Common/ReportModal/ReportModal";
import SectionFluidContainer from "../../../components/Products/Common/SectionContainer/SectionFluidContainer";
import SectionNormalContainer from "../../../components/Products/Common/SectionContainer/SectionNormalContainer";
import * as CSS from "../../../components/Products/Common/SharedStyle";
import Summary from "../../../components/Products/Common/Summary/Summary";
import colors from "../../../constants/colors";
import {ProductNameEnum} from "../../../constants/enum/product_name.enum";
import {ProductEngNameMapping, ProductKorNameMapping} from "../../../constants/productMapping";

const index = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isReportImgOpen, setIsReportImgOpen] = useState(false);

  return (
    <div>
      <SectionFluidContainer height="300px" bgColor={colors.CIS_MAIN_GREEN} hasPadding={false}>
        <BetaInfo
          productNameEng={ProductEngNameMapping.get(ProductNameEnum.GREENERP) ?? ""}
          productNameKor={ProductKorNameMapping.get(ProductNameEnum.GREENERP) ?? ""}
          urlParam={ProductNameEnum.GREENERP}
          btnHoverColor={colors.GREENERP_BTN_HOVER}
          setIsReportOpen={setIsReportImgOpen}
        />
      </SectionFluidContainer>
      <SectionNormalContainer bgColor={colors.BEIGE_BG_2}>
        <Summary
          productEnum={ProductNameEnum.GREENERP}
          logoPath="/images/cis/greenerp_logo.svg"
          imgPath="/images/cis/intro.png"
          mainColor={colors.CIS_MAIN_GREEN}
          darkColor="black"
        />
      </SectionNormalContainer>

      <SectionNormalContainer bgColor={colors.CIS_MAIN_GREEN}>
        <Intro />
      </SectionNormalContainer>

      <SectionFluidContainer bgColor={colors.BEIGE_BG_2} height="800px">
        <Features />
      </SectionFluidContainer>

      <SectionNormalContainer bgColor={colors.CIS_MAIN_GREEN}>
        <UseCase1 />
      </SectionNormalContainer>

      <SectionNormalContainer bgColor={colors.BEIGE_BG_2}>
        <UseCase2 />
      </SectionNormalContainer>

      <SectionNormalContainer bgColor={colors.CIS_MAIN_GREEN}>
        <UseCase3 />
      </SectionNormalContainer>

      <SectionNormalContainer bgColor={colors.BEIGE_BG_2}>
        <Report color={colors.CIS_MAIN_GREEN} />
      </SectionNormalContainer>
      {/* <div className="absolute -top-[13vh] bottom-0 bg-black w-[100vw] h-[113vh] z-[1000] " /> */}
      {isReportImgOpen ? <ReportModal setIsOpen={setIsReportImgOpen} /> : null}
    </div>
  );
});

export default index;
