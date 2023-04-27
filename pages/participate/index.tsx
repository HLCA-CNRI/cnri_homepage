import React, {memo} from "react";
import {Widget} from "@typeform/embed-react";
import styled from "styled-components";

const participate = memo(() => (
  <ParticipateWrapper className="w-full  flex justify-center items-center ">
    <iframe
      title="문의하기"
      src={process.env.NEXT_PUBLIC_WALLA_URL}
      width="100%"
      height="100%"
      style={{border: "none"}}
    />
  </ParticipateWrapper>
));

export default participate;

const ParticipateWrapper = styled.div`
  height: calc(100vh - 12vh);
  padding-bottom: 3vh;

  @media screen and (min-width: 1024px) and (orientation: landscape) {
    height: calc(100vh - 13vh - 230px);
    padding-bottom: 0;
  }
`;
