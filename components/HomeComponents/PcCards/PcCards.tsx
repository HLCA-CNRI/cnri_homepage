import React, {memo, useState} from "react";

import styled from "styled-components";
import {Direction} from "../../../constants/enum/direction_enum";
import LeftNonText from "../CardNonText/LeftNonText";
import RightNonText from "../CardNonText/RightNonText";
import LeftCardText from "../CardText.tsx/LeftCardText";
import RightCardText from "../CardText.tsx/RightCardText";
import * as SS from "../SharedStyle";

const PcCards = memo(() => {
  const [isLeftHover, setIsLeftHover] = useState(false);
  const [isRightHover, setIsRightHover] = useState(false);

  const handelMouseOver = (e: any) => {
    switch (e.currentTarget?.id) {
      case Direction.LEFT:
        setIsLeftHover(true);
        setIsRightHover(false);
        break;
      case Direction.RIGHT:
        setIsLeftHover(false);
        setIsRightHover(true);
        break;
      default:
        break;
    }
  };

  const handelMouseOut = (e: any) => {
    switch (e.currentTarget?.id) {
      case Direction.LEFT:
        setIsLeftHover(false);
        break;
      case Direction.RIGHT:
        setIsRightHover(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-full flex justify-between">
      <Card
        isHover={isLeftHover}
        isOtherCardHover={isRightHover}
        isPlacedLeft
        isPlacedBottom
        onMouseOver={handelMouseOver}
        onMouseOut={handelMouseOut}
        id={Direction.LEFT}>
        <NonTextWrapper isPlacedLeft isHover={isLeftHover}>
          <LeftNonText />
        </NonTextWrapper>
        <LeftCardText isHover={isLeftHover} />
      </Card>
      <Card
        isHover={isRightHover}
        isOtherCardHover={isLeftHover}
        isPlacedLeft={false}
        isPlacedBottom={false}
        onMouseOver={handelMouseOver}
        onMouseOut={handelMouseOut}
        id={Direction.RIGHT}>
        <RightCardText isHover={isRightHover} />
        <NonTextWrapper isPlacedLeft={false} isHover={isRightHover}>
          <RightNonText />
        </NonTextWrapper>
      </Card>
    </div>
  );
});

export default PcCards;

const Card = styled(SS.CardStyle)<{
  isHover: boolean;
  isOtherCardHover: boolean;
  isPlacedLeft: boolean;
  isPlacedBottom: boolean;
}>`
  ${SS.Transition}
  height: 350px;
  display: grid;
  align-self: ${({isPlacedBottom}) => (isPlacedBottom ? "flex-end" : "flex-start")};
  padding: 30px;

  grid-template-columns: ${({isPlacedLeft, isOtherCardHover}) =>
    isPlacedLeft && !isOtherCardHover ? "2fr 1fr" : "0.8fr 2.2fr"};
  transform-origin: ${({isPlacedLeft}) => (isPlacedLeft ? "left 80%" : "right 20%")};

  width: ${({isHover, isOtherCardHover}) =>
    isHover ? "800px" : isOtherCardHover ? "450px" : "500px"};

  height: ${({isHover, isOtherCardHover}) => (isHover ? "430px" : "350px")};
`;

const NonTextWrapper = styled.div<{isPlacedLeft: boolean; isHover: boolean}>`
  ${SS.Transition}
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transform: ${({isPlacedLeft, isHover}) =>
    isPlacedLeft && !isHover
      ? "translateX(-500px)"
      : !isPlacedLeft && !isHover
      ? "translateX(500px)"
      : ""};

  transform: ${({isHover}) => (isHover ? "scale(80%)" : "")};
`;
