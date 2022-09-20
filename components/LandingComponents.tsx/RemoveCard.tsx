import React from "react";
import Image from "next/image";
import {LandingSubContentsType} from "../../functions/LandingContents";

const RemoveCard = ({
  contents,
  isOpened,
}: {
  contents: LandingSubContentsType;
  isOpened: boolean;
}) => (
  <div className="w-full">
    <div
      className={`w-full h-[400px] relative ${isOpened ? "drop-shadow-lg transition-shadow" : ""}`}>
      <Image
        src={contents.srcPath}
        alt="remove img"
        layout="fill"
        className={`w-full h-full object-cover rounded-forImg  `}
      />
    </div>
    <div
      className={` ${
        isOpened ? "animate-fadein" : "animate-fadeout"
      } flex flex-col items-center justify-center `}>
      <div className="text-[34px] font-bold border-t-[2px] border-slate-600 w-[95%] text-center pt-8 pb-4 mt-7">
        {contents.title}
      </div>
      <div className="text-[20px] w-[83%] ">{contents.content}</div>
    </div>
  </div>
);

export default RemoveCard;
