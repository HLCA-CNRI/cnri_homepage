import classNames from "classnames";
import React, {memo} from "react";
import styled from "styled-components";

type PropTypes = {
  normalContent: string;
  strongContent: string;
  hasGradation?: boolean;
  isTextMint?: boolean;
};

const CostTime = memo(
  ({normalContent, strongContent, isTextMint = false, hasGradation = false}: PropTypes) => (
    <Container
      hasGradation={hasGradation}
      className={classNames(
        " w-[70vw] h-[9vw] rounded-[3vw] my-[1.8vh] md:landscape:rounded-full md:landscape:w-[25vw] md:landscape:h-[3vw] md:landscape:text-[1.3vw] md:landscape:my-[2vh] text-center flex items-center justify-center ",
        {
          // "text-white": hasGradation,
          "text-dark_gray": !isTextMint && !hasGradation,
          "text-ciet_mint_2": isTextMint && !hasGradation,
          "text-white": hasGradation,
        }
      )}>
      <span className="pr-2">{normalContent}</span>
      <strong>{strongContent}</strong>
    </Container>
  )
);

export default CostTime;

const Container = styled.div<{hasGradation?: boolean}>`
  box-shadow: 0px 0px 20px rgba(58, 147, 119, 0.1);
  background: ${({hasGradation}) =>
    hasGradation
      ? "linear-gradient(90deg, #40D397 2.89%, #1DCCC1 99.97%); box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.04);"
      : "white;"};
`;
