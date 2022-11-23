import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import {BsArrowRightShort} from "react-icons/bs";
import CarbonCycle from "./CarbonCycle";

const RightNonText = memo(() => (
  <Wrapper>
    <CarbonCycle />
    <div className="hidden items-center justify-center xl:flex ">
      <BsArrowRightShort size={30} />
    </div>
    <div className="flex items-center justify-center xl:hidden ">
      <BsArrowRightShort size={20} />
    </div>

    <ImgWrapper>
      <Image src="/images/lca/lca_result_summary.png" layout="fill" objectFit="contain" />
    </ImgWrapper>
  </Wrapper>
));

export default RightNonText;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 2fr 0.4fr 2fr;
  align-items: center;
  @media screen and (min-width: 1200px) {
    grid-template-columns: 1.5fr 0.8fr 2.3fr;
  }
`;

const ImgWrapper = styled.div`
  width: 90%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  box-shadow: 0 10px 30px 0 rgb(82 169 156 / 0.15);
  @media screen and (min-width: 1200px) {
    width: 82%;
    height: 100%;
  }
`;
