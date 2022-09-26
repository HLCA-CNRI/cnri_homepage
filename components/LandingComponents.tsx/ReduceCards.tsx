import React, {useState, useRef} from "react";
import colors from "../../constants/colors";
import LandingContents from "../../functions/LandingContents";
import {ScrollContainer} from "../../styles/commonStyles";
import ReduceCard from "./ReduceCard";

const ReduceCards = () => {
  const [curKey, setCurKey] = useState();
  const contents = useRef([
    LandingContents.Reduce.content1,
    LandingContents.Reduce.content2,
    LandingContents.Reduce.content3,
  ]);
  const contentColor = useRef([
    colors.CNRI_LIGHT_GREEN,
    colors.CNRI_DARK_GREEN,
    colors.CNRI_DARK_BLUE,
  ]);
  const onCardClick = (e: any) => {
    const clickedKey = e.currentTarget.dataset.key;
    setCurKey((cur) => (cur === clickedKey ? "none" : clickedKey));
  };
  return (
    <div>
      {/* PC ver */}
      <div className="hidden md:block">
        <div className="flex flex-row w-full">
          <div
            role="button"
            data-key={LandingContents.Reduce.content1.key}
            onClick={onCardClick}
            className="mr-[40px] flex-1">
            <ReduceCard
              isOpened={curKey === LandingContents.Reduce.content1.key}
              contents={LandingContents.Reduce.content1}
              bgColor={colors.CNRI_LIGHT_GREEN}
            />
          </div>
          <div
            role="button"
            data-key={LandingContents.Reduce.content2.key}
            onClick={onCardClick}
            className=" flex-1">
            <ReduceCard
              isOpened={curKey === LandingContents.Reduce.content2.key}
              contents={LandingContents.Reduce.content2}
              bgColor={colors.CNRI_DARK_GREEN}
            />
          </div>
        </div>
        <div
          role="button"
          data-key={LandingContents.Reduce.content3.key}
          onClick={onCardClick}
          className="flex  mt-[40px] flex-1">
          <ReduceCard
            isOpened={curKey === LandingContents.Reduce.content3.key}
            contents={LandingContents.Reduce.content3}
            bgColor={colors.CNRI_DARK_BLUE}
          />
        </div>
      </div>

      {/* Mobile Ver */}
      <ScrollContainer className="block md:hidden ">
        <div className=" flex overflow-auto md:hidden snap-x snap-mandatory pb-[2vh]">
          {contents.current.map((c, idx) => (
            <div role="button" data-key={c.key} onClick={onCardClick} className="snap-center  ">
              <ReduceCard
                contents={c}
                bgColor={contentColor.current[idx]}
                isOpened={curKey === c.key}
              />
            </div>
          ))}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default ReduceCards;
