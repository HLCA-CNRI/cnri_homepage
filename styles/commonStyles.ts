import styled from "styled-components";

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
    font-size: 80px;
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
    font-size: 30px;
  }
  @media only screen and (min-width: 1536px) {
    font-size: 40px;
  }
`;
