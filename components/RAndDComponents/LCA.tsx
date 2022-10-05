import React, {memo} from "react";
import styled from "styled-components";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import LCAContents from "../../functions/LCAContents";
import Arrow from "./Arrow";
import LCACard from "./LCACard";

function LCA() {
  return (
    <div className="w-full flex justify-center  ">
      {/* new LCA */}
      <div>
        <div className="flex items-center justify-around">
          <LCACard content={LCAContents.resources} />
          <ArrowCover className="w-[15px]">
            <Arrow direction={ArrowDirection.RIGHT} />
          </ArrowCover>
          <LCACard content={LCAContents.processing} />
          <ArrowCover className="w-[15px]">
            <Arrow direction={ArrowDirection.RIGHT} />
          </ArrowCover>
          <LCACard content={LCAContents.manufacturing} />
        </div>
        <div className="flex justify-around items-center w-full my-[2px] h-[35px] ">
          <ArrowCover className="w-[25px]">
            <Arrow direction={ArrowDirection.UP} />
          </ArrowCover>
          <div className="w-[200px]">
            <Arrow direction={ArrowDirection.NONE} />
          </div>
          <ArrowCover className="w-[25px]">
            <Arrow direction={ArrowDirection.DOWN} />
          </ArrowCover>
        </div>
        <div className="flex items-center justify-around">
          <LCACard content={LCAContents.distribution} />
          <ArrowCover className="w-[15px]">
            <Arrow direction={ArrowDirection.LEFT} />
          </ArrowCover>
          <LCACard content={LCAContents.use} />
          <ArrowCover className="w-[15px]">
            <Arrow direction={ArrowDirection.LEFT} />
          </ArrowCover>
          <LCACard content={LCAContents.endOfLife} />
        </div>
      </div>
    </div>
  );
}

export default memo(LCA);

const ArrowCover = styled.div`
  margin: 15px;
`;
