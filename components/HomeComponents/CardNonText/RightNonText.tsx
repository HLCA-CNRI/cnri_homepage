import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import {BsArrowRightShort} from "react-icons/bs";
import CarbonCycle from "./CarbonCycle";

const RightNonText = memo(() => (
  <Wrapper>
    <CarbonCycle />
    <div className="flex items-center justify-center">
      <BsArrowRightShort size={30} />
    </div>
    <div className="w-full h-full relative">
      <Image src="/images/lca/lca_result_summary.png" layout="fill" className="object-contain" />
    </div>
  </Wrapper>
));

export default RightNonText;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
`;
