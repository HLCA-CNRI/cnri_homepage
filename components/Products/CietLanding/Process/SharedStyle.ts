import styled from "styled-components";
import colors from "../../../../constants/colors";

export const SectionContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding-top: 11vh;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) and (orientation: landscape) {
    padding-top: 16vh;
  }
`;
