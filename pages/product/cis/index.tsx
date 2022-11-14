import React, {memo, useEffect} from "react";
import Features from "../../../components/Products/CisLanding/Features/Features";
import Intro from "../../../components/Products/CisLanding/Intro/Intro";
import ShortCut from "../../../components/Products/CisLanding/ShortCut/ShortCut";
import UseCase1 from "../../../components/Products/CisLanding/UseCase/UseCase1";
import UseCase2 from "../../../components/Products/CisLanding/UseCase/UseCase2";
import UseCase3 from "../../../components/Products/CisLanding/UseCase/UseCase3";
import Report from "../../../components/Products/Common/Report/Report";
import * as CSS from "../../../components/Products/Common/SharedStyle";
import colors from "../../../constants/colors";

const index = memo(() => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CSS.SectionContainer className="snap-always snap-center" bgColor={colors.BEIGE_BG_2}>
        <ShortCut />
      </CSS.SectionContainer>
      <CSS.SectionHeightFluidContainer
        className="snap-always snap-center"
        bgColor={colors.CIS_MAIN_GREEN}>
        <Intro />
      </CSS.SectionHeightFluidContainer>
      <CSS.SectionHeightFluidContainer
        className="snap-always snap-start  md:landscape:snap-center"
        bgColor={colors.BEIGE_BG_2}>
        <Features />
      </CSS.SectionHeightFluidContainer>
      <CSS.SectionContainer className="snap-always snap-center" bgColor={colors.CIS_MAIN_GREEN}>
        <UseCase1 />
      </CSS.SectionContainer>
      <CSS.SectionContainer className="snap-always snap-center" bgColor={colors.BEIGE_BG_2}>
        <UseCase2 />
      </CSS.SectionContainer>
      <CSS.SectionContainer className="snap-always snap-center" bgColor={colors.CIS_MAIN_GREEN}>
        <UseCase3 />
      </CSS.SectionContainer>
      <CSS.SectionContainer className="snap snap-always snap-center" bgColor={colors.BEIGE_BG_2}>
        <Report color={colors.CIS_MAIN_GREEN} />
      </CSS.SectionContainer>
    </div>
  );
});

export default index;
