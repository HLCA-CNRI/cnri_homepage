import React, {memo} from "react";
import Image from "next/image";
import styled from "styled-components";
import colors from "../../../constants/colors";

const LeftNonText = memo(() => (
  <Wrapper>
    <LeftImageWrapper>
      <Image src="/images/cis/intro_home.png" layout="fill" alt="greenerp" objectFit="contain" />
    </LeftImageWrapper>
    <ImgCaption>GreenERP</ImgCaption>
  </Wrapper>
));

export default LeftNonText;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  gap: 1vh;
  @media screen and (min-width: 1200px) {
    gap: 20px;
  }
`;

const LeftImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImgCaption = styled.div`
  color: white;
  background-color: ${colors.CIS_MAIN_GREEN};

  padding: 0 5vw;
  font-size: 3vw;
  border-radius: 1vw;
  @media screen and (min-width: 1200px) {
    padding: 0 10px;
    font-size: 14px;
    border-radius: 5px;
  }
`;
