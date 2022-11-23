import React, {memo, useState} from "react";
import Image from "next/image";
import styled from "styled-components";
import {Direction} from "../../../constants/enum/direction_enum";
import * as SS from "../SharedStyle";
import LeftCardText from "../CardText.tsx/LeftCardText";
import RightCardText from "../CardText.tsx/RightCardText";
import LeftNonText from "../CardNonText/LeftNonText";
import RightNonText from "../CardNonText/RightNonText";

const MobileCards = memo(() => {
  const [isLeftCardShown, setIsLeftCardShown] = useState(true);

  const handleClick = (e: any) => {
    switch (e.currentTarget.id) {
      case Direction.LEFT:
        setIsLeftCardShown(true);
        break;
      case Direction.RIGHT:
        setIsLeftCardShown(false);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <CardsWrapper>
        <CardWrapper
          align={Direction.RIGHT}
          isLeftCardShown={isLeftCardShown}
          id={Direction.RIGHT}
          onClick={handleClick}>
          <Card>
            <LeftCardText />
            <LeftNonTextWrapper>
              <LeftNonText />
            </LeftNonTextWrapper>
          </Card>
          <ArrowWrapper id={Direction.RIGHT} onClick={handleClick}>
            <Image
              src="/images/icons/double_arrow_right.svg"
              layout="fill"
              alt="right arrow button"
            />
          </ArrowWrapper>
        </CardWrapper>
        <CardWrapper
          align={Direction.LEFT}
          isLeftCardShown={isLeftCardShown}
          id={Direction.LEFT}
          onClick={handleClick}>
          <ArrowWrapper id={Direction.LEFT} onClick={handleClick}>
            <Image
              src="/images/icons/double_arrow_left.svg"
              layout="fill"
              alt="left arrow button"
            />
          </ArrowWrapper>
          <Card width="47vh">
            <RightCardText />
            <RightNonTextWrapper>
              <RightNonText />
            </RightNonTextWrapper>
          </Card>
        </CardWrapper>
      </CardsWrapper>
    </div>
  );
});

export default MobileCards;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10vw;
`;

const CardWrapper = styled.div<{align: Direction; isLeftCardShown: boolean}>`
  ${SS.Transition}
  display: flex;
  flex-direction: column;

  gap: 2vh;
  align-items: ${({align}) => (align === Direction.LEFT ? "flex-start" : "flex-end")};
  transform: ${({isLeftCardShown}) => (isLeftCardShown ? "" : "translateX(-40vh)")};
`;

const Card = styled(SS.CardStyle)<{width?: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5vh 4vw;

  width: ${({width}) => width ?? "37vh"};
  height: 55vh;

  @media screen and (orientation: landscape) {
    // width: 33vh;
    // height: 55vh;
  }
`;

const NonTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftNonTextWrapper = styled(NonTextWrapper)`
  width: 90%;
  height: 50%;
`;

const RightNonTextWrapper = styled(NonTextWrapper)`
  width: 90%;
  height: 30vh;
`;
const ArrowWrapper = styled.div`
  position: relative;

  width: 5vh;
  height: 5vh;

  @media screen and (orientation: landscape) {
    //   width: 5vh;
    //   height: 5vh;
  }
`;
