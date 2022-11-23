import React, {memo} from "react";
import * as SS from "../SharedStyle";

type PropTypes = {
  bgColor: string;
  children: JSX.Element;
};

const SectionNormalContainer = memo(({children, bgColor}: PropTypes) => (
  <SS.SectionContainerWrapper bgColor={bgColor}>
    <SS.SectionContainer className="snap-always snap-center" bgColor={bgColor}>
      {children}
    </SS.SectionContainer>
  </SS.SectionContainerWrapper>
));

export default SectionNormalContainer;
