import React, {useState} from "react";
import colors from "../../constants/colors";
import LandingContents from "../../functions/LandingContents";
import ReduceCard from "./ReduceCard";

const ReduceCards = () => {
  const [curIdx, setCurIdx] = useState();
  const onCardClick = (e: any) => {
    const clickedIdx = e.currentTarget.dataset.idx;
    setCurIdx((cur) => (cur === clickedIdx ? 0 : clickedIdx));
  };
  return (
    <div>
      <div className="flex flex-row w-full mx-[10px]">
        <div role="button" data-idx="1" onClick={onCardClick} className="mx-[20px]">
          <ReduceCard
            isOpened={curIdx === "1"}
            width={660}
            height={300}
            contents={LandingContents.Reduce.content1}
            bgColor={colors.CNRI_LIGHT_GREEN}
          />
        </div>
        <div role="button" data-idx="2" onClick={onCardClick} className="mx-[20px]">
          <ReduceCard
            isOpened={curIdx === "2"}
            width={660}
            height={300}
            contents={LandingContents.Reduce.content2}
            bgColor={colors.CNRI_DARK_GREEN}
          />
        </div>
      </div>
      <div role="button" data-idx="3" onClick={onCardClick} className="flex mx-[20px] mt-[40px]">
        <ReduceCard
          isOpened={curIdx === "3"}
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
