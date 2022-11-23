import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import {BsArrowRightShort} from "react-icons/bs";
import CarbonCycle from "./CarbonCycle";

const RightNonText = memo(() => (
  <Wrapper>
    <CarbonCycle />
    <div className="flex items-center justify-center ">
      <BsArrowRightShort size={30} />
    </div>
    <ImgWrapper>
      <Image src="/images/lca/lca_result_summary.png" layout="fill" className="object-contain" />
    </ImgWrapper>
  </Wrapper>
));

export default RightNonText;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1.5fr 0.8fr 2.3fr;
`;

const ImgWrapper = styled.div`
  width: 82%;
  height: 100%;
  position: relative;
  box-shadow: 0 10px 30px 0 rgb(82 169 156 / 0.15);
`;
