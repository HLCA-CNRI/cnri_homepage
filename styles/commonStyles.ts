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

export const HeaderLinkButton = styled.button`
  ${ButtonCSS}
  display:inline-block;
  width: 15vw;
  height: auto;
  padding: 1vh 1.5vw;
  font-size: 4vw;
  margin: 0 1.5vw;
  border-radius: 100vw;

  // 모바일인 경우
  // height: 4vh;
  // padding: 1vh 4.2vw;
  // border-radius: 4vh;
  // font-size: 3vw;
  // margin: 0 1vw;

  // 중간 크기 화면인 경우
  @media only screen and (min-width: ${mediaQuery.MD}) {
    width: 6vw;
    height: auto;
    margin: 0 0.5vw;
    font-size: 1.5vw;
  }

  // 확대 + 컴퓨터 화면인 경우
  @media screen and (orientation: landscape) and (max-width: ${mediaQuery.XXL}) {
    width: 9vw;
    padding: 0;
    margin: 0 0.6vw;
    line-height: 8vh;
    height: 8vh;
    font-size: 2vw;
  }

  // @media only screen and (min-width: ${mediaQuery.XXL}) {
  //   padding: 1px 22px;
  //   height: 45px;
  //   border-radius: 25px;
  //   font-size: 22px;
  //   line-height: 30px;
  //   margin: 0 5px;
  // }
`;

export const LinkButton = styled.button`
  ${ButtonCSS}
  display:inline-block;
  width: 20vw;
  height: auto;
  padding: 1vh;
  border-radius: 100vw;
  margin: 0 2vw;
  font-size: 5vw;
  cursor: pointer;
  // 중간 크기 화면인 경우
  @media only screen and (min-width: ${mediaQuery.MD}) {
  }

  // 확대 + 컴퓨터 화면인 경우
  // @media screen and (orientation: landscape) and (max-width: ${mediaQuery.XXL}) {
  // }

  @media only screen and (min-width: ${mediaQuery.MD}) {
    width: 150px;
    text-align: center;
    height: auto;
    line-height: 40px;
    border-radius: 100px;
    font-size: 35px;
    padding: 10px;
    margin: 0 10px;
  }
`;

export const SectionTitleStyle = styled.div`
  font-size: 10vw;
  font-weight: 600;
  margin-bottom: 2vh;
  margin-top: 3vh;
  @media only screen and (min-width: 640px) {
    font-size: 5vw;
  }
  @media only screen and (min-width: 768px) {
    font-size: 4vw;
  }
  @media only screen and (min-width: 1536px) {
    font-size: 45px;
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
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

export const ScrollContainer = styled.div`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0.5vh;
    width: 0.5vw;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: ${(props) => props.color}; */
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: -13vh;
  left: 0;
  width: 100%;
  height: 113vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50 !important;
`;

export const ModalContentContainer = styled.div<{
  width?: string;
  height?: string;
  bgColor?: string;
  radius?: string;
}>`
  background-color: ${({bgColor}) => bgColor ?? "white"};
  z-index: 51;
  position: fixed;
  width: ${({width}) => width ?? "400px"};
  height: ${({height}) => height ?? "auto"};

  border-radius: ${({radius}) => radius ?? "0rem"};
  top: 50%;
  left: 50%;
  transition: 0.4s ease-in-out;
  transform: translate(-50%, -200%);
  opacity: 0;
  box-shadow: 0px 6px 20px rgb(0 0 0 / 10%);
  &.active {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;
