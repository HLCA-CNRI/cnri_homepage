import styled, {css} from "styled-components";
import colors from "../constants/colors";
import mediaQuery from "../constants/mediaQuery";

export const ButtonCSS = css`
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${colors.BTN_BG};
  transition: color 0.6s;
  box-shadow: inset 0px 4px 4px ${colors.BTN_INNER_SHADOW};
  &:hover {
    color: ${colors.BTN_MINT};
  }
`;

export const HeaderLinkButton = styled.a`
  ${ButtonCSS}
  // 모바일인 경우
  height: 4vh;
  padding: 1vh 4.2vw;
  border-radius: 4vh;
  font-size: 3vw;
  margin: 0 1vw;

  // 중간 크기 화면인 경우
  @media only screen and (min-width: ${mediaQuery.MD}) {
    height: 4vh;
    padding: 1vh 3.3vw;
    border-radius: 2vh;
    font-size: 2.5vw;
    margin: 0 0.7vw;
  }

  // 확대 + 컴퓨터 화면인 경우
  @media screen and (orientation: landscape) and (max-width: ${mediaQuery.XXL}) {
    height: 6vh;
    padding: 1vh 1.4vw;
    border-radius: 7vh;
    font-size: 1.5vw;
    margin: 0 0.4vw;
    box-shadow: inset 0px 0.3vw 0.3vw ${colors.BTN_INNER_SHADOW};
  }

  @media only screen and (min-width: ${mediaQuery.XXL}) {
    padding: 1px 22px;
    height: 45px;
    border-radius: 25px;
    font-size: 22px;
    line-height: 30px;
    margin: 0 5px;
  }
`;

export const LinkButton = styled.a<{height: number; fontSize: number}>`
  ${ButtonCSS}

  // 모바일인 경우
  height: 4.7vh;
  padding: 1vh 5.3vw;
  border-radius: 4vh;
  font-size: 4.7vw;
  margin: 0 ${({fontSize}) => fontSize / 4}px;

  // 중간 크기 화면인 경우
  @media only screen and (min-width: ${mediaQuery.MD}) {
    height: 5vh;
    padding: 1vh 4.5vw;
    border-radius: 4vh;
    font-size: 3vw;
    margin: 0 ${({fontSize}) => fontSize / 4}px;
  }

  // 확대 + 컴퓨터 화면인 경우
  @media screen and (orientation: landscape) and (max-width: ${mediaQuery.XXL}) {
    height: 10vh;
    padding: 1vh 4.5vw;
    border-radius: 7vh;
    font-size: 3vw;
    margin: 0 3vh;
    box-shadow: inset 0px 0.3vw 0.3vw ${colors.BTN_INNER_SHADOW};
  }

  @media only screen and (min-width: ${mediaQuery.XXL}) {
    padding: 1px ${({fontSize}) => fontSize * 1.1}px;
    height: ${({height}) => height}px;
    border-radius: ${({height}) => height / 2}px;
    font-size: ${({fontSize}) => fontSize}px;
    line-height: ${({height}) => height}px;
    margin: 0 ${({fontSize}) => fontSize / 4}px;
  }
`;

export const SectionTitleStyle = styled.div`
  font-size: 10vw;
  font-weight: 600;
  margin-bottom: 2vh;
  @media only screen and (min-width: 640px) {
    font-size: 5vw;
  }
  @media only screen and (min-width: 768px) {
    font-size: 4vw;
  }
  @media only screen and (min-width: 1536px) {
    font-size: 60px;
    margin-bottom: 0px;
    margin-top: 80px;
  }
`;

export const SectionSubTitleStyle = styled.div`
  margin-bottom: 2vh;
  @media only screen and (min-width: 640px) {
    font-size: 2vw;
  }
  @media only screen and (min-width: 768px) {
    font-size: 3vw;
    margin-bottom: 5vh;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 1536px) {
    font-size: 30px;
    margin-bottom: 70px;
  }
`;
