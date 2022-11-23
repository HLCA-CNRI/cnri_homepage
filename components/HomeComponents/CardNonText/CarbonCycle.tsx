import React, {memo} from "react";
import Image from "next/image";
import {VscTriangleDown, VscTriangleLeft, VscTriangleRight, VscTriangleUp} from "react-icons/vsc";
import styled from "styled-components";
import {LcaCycle} from "../../../constants/enum/lca_cycle.enum";
import {LcaCycleKorMapping} from "../../../constants/lcaMapping";

const CarbonCycle = memo(() => {
  const firstCol: LcaCycle[] = [LcaCycle.RESOURCE, LcaCycle.DISPOSAL, LcaCycle.USE];
  const secondCol: LcaCycle[] = [LcaCycle.PROCESSING, LcaCycle.MANUFACTURE, LcaCycle.DISTRIBUTION];
  const iconSize = "90%";

  return (
    <Wrapper>
      <IconsColumn>
        {firstCol.map((lca, idx) => (
          <>
            <IconBox lcaEnum={lca} key={`${lca}_iconBox`} />
            {idx !== firstCol.length - 1 ? (
              <ArrowWrapper>
                <VscTriangleUp size={iconSize} key={`${lca}_arrow`} />
              </ArrowWrapper>
            ) : null}
          </>
        ))}
      </IconsColumn>
      <ArrowColumn>
        <ArrowWrapper>
          <VscTriangleRight size={iconSize} />
        </ArrowWrapper>
        <div />
        <ArrowWrapper>
          <VscTriangleLeft size={iconSize} />
        </ArrowWrapper>
      </ArrowColumn>
      <IconsColumn>
        {secondCol.map((lca, idx) => (
          <>
            <IconBox lcaEnum={lca} key={`${lca}_iconBox`} />
            {idx !== secondCol.length - 1 ? (
              <ArrowWrapper>
                <VscTriangleDown size={iconSize} key={`${lca}_arrow`} />
              </ArrowWrapper>
            ) : null}
          </>
        ))}
      </IconsColumn>
    </Wrapper>
  );
});

export default CarbonCycle;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
`;

const Column = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
`;
const IconsColumn = styled(Column)`
  grid-template-rows: 3fr 1fr 3fr 1fr 3fr;
`;
const ArrowColumn = styled(Column)`
  grid-template-rows: 3fr 5fr 3fr;
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  width: 3vw;
  height: 3vw;
  @media screen and (min-width: 1200px) {
    width: 20px;
    height: 20px;
  }
`;

type IconBoxPropType = {
  lcaEnum: LcaCycle;
};

const IconBox = memo(({lcaEnum}: IconBoxPropType) => (
  <div className="w-full h-full flex flex-col justify-center items-center">
    <IconWrapper>
      <Image src={`/images/icons/cycle_${lcaEnum}.svg`} layout="fill" />
    </IconWrapper>
    <IconText>{LcaCycleKorMapping.get(lcaEnum) ?? ""}</IconText>
  </div>
));

const IconWrapper = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  background-color: white;
  border-radius: 20%;
  padding: 10% 40%;

  box-shadow: 0 10px 30px 0 rgb(82 169 156 / 0.15);
`;
const IconText = styled.div`
  margin-top: 10%;
  font-size: 0.4vw;
  text-align: center;

  @media screen and (min-width: 1200px) {
    font-size: 12px;
  }
`;
