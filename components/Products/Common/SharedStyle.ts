import styled from "styled-components";

export const SectionContainerWrapper = styled.div<{bgColor: string}>`
  width: 100vw;
  background-color: ${({bgColor}) => bgColor};
`;

export const SectionContainer = styled.div<{bgColor: string; hasPadding?: boolean}>`
  margin: auto;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: ${({hasPadding}) => (hasPadding ? "13vh 60px 0 60px" : "none")};
  background-color: ${({bgColor}) => bgColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1200px) and (orientation: landscape) {
    width: 1200px;
    height: 800px;
    // padding-top: 13vh;
    padding: ${({hasPadding}) =>
      hasPadding === undefined || hasPadding ? "13vh 50px 0 50px" : "none"};
  }

  @media screen and (min-width: 2000px) and (orientation: landscape) {
    width: 1200px;
    height: 800px;
    padding: 0 0 0 0;
  }
`;

export const ContentFlex = styled.div<{isPhotoLeft: boolean}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    flex-direction: ${({isPhotoLeft}) => (isPhotoLeft ? "row-reverse" : "row")};
    justify-content: space-between;
    gap: 4vw;
  }
`;

export const SectionHeightFluidContainer = styled(SectionContainer)<{
  height?: string;
}>`
  height: auto;
  display: flex;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    ${({height}) => (height ? `height : ${height}` : "min-height: 700px")};
  }
`;
