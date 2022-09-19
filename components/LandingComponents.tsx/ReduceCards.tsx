import React, {useState} from "react";
import colors from "../../constants/colors";
import LandingContents from "../../functions/LandingContents";
import ReduceCard from "./ReduceCard";

const ReduceCards = () => {
  const [curKey, setCurKey] = useState();
  const onCardClick = (e: any) => {
    const clickedKey = e.currentTarget.dataset.key;
    setCurKey((cur) => (cur === clickedKey ? "none" : clickedKey));
  };
  return (
    <div>
      <div className="flex flex-row w-full">
        <div
          role="button"
          data-key={LandingContents.Reduce.content1.key}
          onClick={onCardClick}
          className="mr-[40px] flex-1">
          <ReduceCard
            isOpened={curKey === LandingContents.Reduce.content1.key}
            width={660}
            height={300}
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
            width={660}
            height={300}
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
          width={1400}
          height={300}
          contents={LandingContents.Reduce.content3}
          bgColor={colors.CNRI_DARK_BLUE}
        />
      </div>
    </div>
  );
};

export default ReduceCards;
