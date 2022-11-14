import styled from "styled-components";
import colors from "../../../constants/colors";

const PageTitle = styled.div`
  font-weight: 700;
  font-size: 6vw;
  padding-bottom: 4vh;
  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 2vw;
    padding-bottom: 0vh;
  }
`;

export const PageWhiteTitle = styled(PageTitle)`
  color: #ffffff;
  text-shadow: 0px 0px 5px rgba(29, 77, 65, 0.25);
`;

export const PageMintTitle = styled(PageTitle)`
  color: ${colors.BTN_MINT};
`;

export const SectionDescription = styled.div`
  font-size: 4vw;
  p {
    padding-bottom: 1.5vh;
  }

  p:last-child {
    padding-bottom: 7vh;
  }

  @media screen and (min-width: 768px) and (orientation: landscape) {
    font-size: 1vw;
    padding: 2vw 0 0 0.5vw;
    p {
      padding-bottom: 1vw;
    }
  }
`;
