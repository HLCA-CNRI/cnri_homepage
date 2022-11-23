import React, {memo} from "react";
import * as SS from "../SharedStyle";

type PropTypes = {
  children: JSX.Element;
  bgColor: string;
  height?: string;
  hasPadding?: boolean;
};

const SectionFluidContainer = memo(({children, bgColor, height, hasPadding = true}: PropTypes) => (
  <SS.SectionContainerWrapper bgColor={bgColor}>
    <SS.SectionHeightFluidContainer
      className="snap-always snap-center"
      bgColor={bgColor}
      height={height}
      hasPadding={hasPadding}>
      {children}
    </SS.SectionHeightFluidContainer>
  </SS.SectionContainerWrapper>
));

export default SectionFluidContainer;
