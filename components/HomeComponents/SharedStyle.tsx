import styled, {css} from "styled-components";
import colors from "../../constants/colors";
import {Direction} from "../../constants/enum/direction_enum";

// eslint-disable-next-line import/prefer-default-export
export const CardStyle = styled.div<{width?: string; height?: string}>`
  cursor: pointer;
  width: ${({width}) => width ?? "0px"};
  height: ${({height}) => height ?? "0px"};
  box-shadow: 0px 10px 30px 0px #aabfaa1a;
  background-color: ${colors.CARD_BG};
  filter: alpha(opacity=20);
  overflow: hidden;
`;

export const Transition = css`
  transition: all ease-in-out 0.5s;
`;

export const TextWrapper = styled.div<{align: Direction}>`
  width: 100%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({align}) => (align === Direction.LEFT ? "flex-start" : "flex-end")};
  color: ${colors.DARK_GRAY_3};
`;

export const CardTitle = styled.h1<{isHover: boolean}>`
  font-weight: bold;

  font-size: 6vw;

  @media screen and (min-width: 1200px) {
    ${Transition}
    font-size : ${({isHover}) => (isHover ? "45px" : "30px")};
    color: ${({isHover}) => (isHover ? colors.DARK_GRAY_3 : colors.CIET_NAVY)};
  }
`;
export const CardSubTitle = styled.div<{isHover: boolean}>`
  font-size: 3.5vw;

  @media screen and (min-width: 1200px) {
    ${Transition}
    ${({isHover}) =>
      isHover
        ? `
        font-size:16px;
        font-weight:normal;
        color:${colors.DARK_GRAY_3};
    `
        : `
        font-size:10px;
        font-weight:light;
        color:${colors.CIET_NAVY};
    
    `}
  }
`;

export const CardDescription = styled.div<{isHover: boolean; align: Direction}>`
  text-align: ${({align}) => (align === Direction.LEFT ? "left" : "right")};

  font-size: 3vw;
  font-weight: bold;
  margin-top: 2vh;
  margin-bottom: 3vh;
  @media screen and (min-width: 1200px) {
    ${Transition}
    font-size : ${({isHover}) => (isHover ? "22px" : "15px")};
    font-weight: ${({isHover}) => (isHover ? "bold" : "light")};
    color: ${({isHover}) => (isHover ? colors.DARK_GRAY_3 : colors.LIGHT_GRAY)};
    margin-top: 40px;
    margin-bottom: 0;
  }
`;
