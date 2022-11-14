import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import colors from "../../../../../constants/colors";
import {Description} from "../../SharedStyle";

type PropTypes = {
  number: number;
  description: string;
  imgSrc: string;
};

const Feature = memo(({number, description, imgSrc}: PropTypes) => (
  <div className="snap-always snap-center md:landscape:snap-none md:landscape:snap-normal">
    <Number>0{number}</Number>
    <FeatureDescription>{description}</FeatureDescription>
    <div className="w-[80vw] h-[80vw] md:landscape:w-[15vw] md:landscape:h-[15vw] relative bg-[yellow] mx-auto">
      {/* <Image src={imgSrc} alt={`기능_${number}`} /> */}
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
    font-size: 2vw;
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
    font-size: 1vw;
    padding: 1vw 0;
  }
`;