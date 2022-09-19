import React, {useState} from "react";
import LandingContents from "../../functions/LandingContents";
import RemoveCard from "./RemoveCard";

const RemoveCards = () => {
  const [curKey, setCurKey] = useState("0");
  const onCardClick = (e: any) => {
    const clickedKey = e.currentTarget.dataset.key;
    setCurKey((cur) => (cur === clickedKey ? "0" : clickedKey));
  };

  return (
    <div className="flex flex-row-reverse ">
      <div role="button" data-key={LandingContents.Remove.content1.key} onClick={onCardClick}>
        <RemoveCard
          contents={LandingContents.Remove.content1}
          isOpened={curKey === LandingContents.Remove.content1.key}
        />
      </div>
      <div role="button" data-key={LandingContents.Remove.content2.key} onClick={onCardClick}>
        <RemoveCard
          contents={LandingContents.Remove.content2}
          isOpened={curKey === LandingContents.Remove.content2.key}
        />
      </div>
    </div>
  );
};

export default RemoveCards;
