import React, {memo} from "react";
import {LCAContentsType} from "../../functions/LCAContents";

type PropsType = {
  content: LCAContentsType;
  isOpened: boolean;
};

const LCAIcon = memo(({content, isOpened}: PropsType) => {
  return (
    <div
      className={`w-[27vw] h-[27vw] border-2 flex flex-col justify-center rounded-[3vw] text-center ${
        isOpened ? "bg-lca_mobile_gradient" : ""
      }`}>
      <div className="w-[17vw] h-[17vw] mx-auto mt-[1vh]">
        <img src={isOpened ? content.svg_white : content.svg_colored} alt={content.kTitle} />
      </div>
      <div className={`text-[3vw] ${isOpened ? "text-white" : ""}`}>{content.kTitle}</div>
    </div>
  );
});

export default LCAIcon;
