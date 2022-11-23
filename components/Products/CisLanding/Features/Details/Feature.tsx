import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import colors from "../../../../../constants/colors";
import {Description} from "../../SharedStyle";

type PropTypes = {
  number: number;
  description: string;
};

const Feature = memo(({number, description}: PropTypes) => (
  <div className="snap-always snap-center md:landscape:snap-none md:landscape:snap-normal">
    <Number>0{number}</Number>
    <FeatureDescription>{description}</FeatureDescription>
    <div className="w-[80vw] h-[80vw] md:landscape:w-[300px] md:landscape:h-[300px] relative mx-auto flex justify-center items-center">
      <Image
        src={`/images/cis/feature_${number}.png`}
        alt={`기능_${number}`}
        layout="fill"
        priority
      />
    </div>
  </div>
));

export default Feature;

const Number = styled.div`
  font-weight: bold;
  color: ${colors.CIS_MAIN_GREEN};
  font-size: 6vw;
  padding-top: 2vw;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 1.8rem;
    padding-top: 0vw;
    padding-bottom: 0.5vw;
  }
`;

const FeatureDescription = styled(Description)`
  color: ${colors.DARK_GREEN};
  white-space: pre;
  padding: 5vw 0;
  text-align: left;
  margin: 0;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 1rem;
    padding: 1vw 0;
  }
`;
