import styled from "styled-components";

export const SectionContainer = styled.div<{bgColor: string}>`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding-top: 6vh;
  background-color: ${({bgColor}) => bgColor};
  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding: 6vh 17vw 0 17vw;
    padding-top: 13vh;
  }
`;

export const SectionHeightFluidContainer = styled(SectionContainer)`
  height: auto;
  display: flex;
  //   padding: 6vh 10vw;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    height: 100vh;
  }
`;
