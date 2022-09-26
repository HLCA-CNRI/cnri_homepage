import React, {useState, useRef} from "react";
import LandingContents from "../../functions/LandingContents";
import {ScrollContainer} from "../../styles/commonStyles";
import RemoveCard from "./RemoveCard";

const RemoveCards = () => {
  const [curKey, setCurKey] = useState(LandingContents.Remove.content2.key);
  const onCardClick = (e: any) => {
    const clickedKey = e.currentTarget.dataset.key;
    setCurKey((cur) => (cur === clickedKey ? "0" : clickedKey));
  };
  const contents = useRef([LandingContents.Remove.content1, LandingContents.Remove.content2]);

  return (
    // 두 컴포넌트 reverse 상태 - 콘텐츠 상수 순서와 배치 순서가 달라서 reverse 적용함
    <div>
      {/* PC ver */}
      <div>
        <div className="hidden md:flex flex-row-reverse ">
          <div
            role="button"
            data-key={LandingContents.Remove.content1.key}
            onClick={onCardClick}
            className="flex-1 ">
            <RemoveCard
              contents={LandingContents.Remove.content1}
              isOpened={curKey === LandingContents.Remove.content1.key}
            />
          </div>
          <div
            role="button"
            data-key={LandingContents.Remove.content2.key}
            onClick={onCardClick}
            className="flex-1 mr-[40px]">
            <RemoveCard
              contents={LandingContents.Remove.content2}
              isOpened={curKey === LandingContents.Remove.content2.key}
            />
          </div>
        </div>
      </div>

      {/* Mobile ver */}
      <ScrollContainer className="block flex overflow-auto pb-[2vh] px-[6.5vw] md:pb-0 md:hidden snap-x snap-mandatory">
        {contents.current.map((c) => (
          <div
            role="button"
            data-key={c.key}
            onClick={onCardClick}
            className="snap-center mx-[2vw]">
            <RemoveCard contents={c} isOpened={curKey === c.key} />
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
};

export default RemoveCards;
