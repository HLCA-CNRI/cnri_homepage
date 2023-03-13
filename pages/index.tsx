// import Link from "next/link";
import {memo, useEffect} from "react";
import styled from "styled-components";
import MobileCards from "../components/HomeComponents/MobileCards/MobileCards";
import PcCards from "../components/HomeComponents/PcCards/PcCards";
import ProductButtons from "../components/HomeComponents/ProductButtons/ProductButtons";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <CardSection>
        <div className=" hidden xl:block w-full h-full">
          <PcCards />
        </div>

        <div className=" block xl:hidden  w-full h-full">
          <MobileCards />
        </div>
      </CardSection>
      {/* <ButtonSection>
        <ProductButtons />
      </ButtonSection> */}
    </Wrapper>
  );
}

export default memo(Home);
const Wrapper = styled.div`
  min-height: 70vh;
  height: 100%;
  width: 100%;
`;

const CardSection = styled.div`
  // background-color: yellow;
  margin: auto;

  width: 100vw;
  height: 75vh;
  padding: 6vh 0;

  @media screen and (min-width: 1200px) {
    width: 1280px;
    height: 490px;
    padding: 40px 0;
    margin: 0 auto;
  }
`;

const ButtonSection = styled.div`
  margin: auto;

  width: 100vw;
  height: 50vh;

  @media screen and (min-width: 1200px) {
    width: 1280px;
    height: 180px;
  }
`;
