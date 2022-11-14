import styled from "styled-components";
import colors from "../../../constants/colors";

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

export const Title = styled.div<{color: string; mobileColor?: string; mobileBgColor?: string}>`
  color: ${({color, mobileColor}) => mobileColor ?? color};
  font-size: 7vw;
  padding: 2vw 6vw;
  border-radius: 2vw;
  text-align: center;
  background-color: ${({mobileBgColor}) => mobileBgColor ?? "transparent"};
  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 2.5vw;
    text-align: left;
    padding: 0;
    color: ${({color}) => color};
    background-color: transparent;
  }
`;

export const Description = styled.div<{mobileColor?: string}>`
  color: ${({mobileColor}) => mobileColor ?? colors.DARK_GREEN};
  font-size: 4vw;
  text-align: center;
  margin: 5vh 0 10vh 0;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    color: ${colors.DARK_GREEN};
    font-size: 1.1vw;
    text-align: left;
    margin: 0;
  }
`;

export const UsecaseImageContainer = styled.div`
  width: 92vw;
  height: 60vw;
  position: relative;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    width: 40vw;
    height: 27vw;
  }
`;

export const UsecaseTitleContainer = styled.div`
  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding-bottom: 1.5vw;
  }
`;

export const UsecaseImgNLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4vh;
  align-items: center;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    gap: 1vw;
  }
`;

export const ImageLabel = styled.div<{color: string; bgColor: string}>`
  color: ${colors.DARK_GREEN};
  font-size: 3vw;
  font-weight: 900;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding: 0 1vw;
    height: 2vw;
    line-height: 2vw;
    border-radius: 0.5vw;
    color: ${({color}) => color};
    background-color: ${({bgColor}) => bgColor};
    font-size: 1vw;
    text-align: center;
  }
`;
