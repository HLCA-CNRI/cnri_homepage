import React from "react";
import Image from "next/image";
import {LandingSubContentsType} from "../../functions/LandingContents";
import useHover from "../../hooks/useHover";

const RemoveCard = ({
  contents,
  isOpened,
  sizes,
}: {
  contents: LandingSubContentsType;
  isOpened: boolean;
  sizes: string;
}) => {
  const [isHover, onMouseEnter, onMouseLeave] = useHover();

  return (
    <div className="w-landing_mobile md:w-full">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div
          className={`w-full h-landing_mobile rounded-landing_mobile md:h-[260px]  md:rounded-forImg relative ${
            isOpened ? "drop-shadow-lg transition-shadow" : ""
          } 
          ${isHover ? "animate-shadow_larger" : "animate-shadow_smaller"}`}>
          <Image
            src={contents.srcPath}
            alt="remove img"
            layout="fill"
            sizes={sizes}
            className={` rounded-landing_mobile w-full h-full object-cover md:rounded-forImg  `}
          />
        </div>
      </div>
      <div
        className={` ${
          isOpened ? "animate-fadein " : "hidden md:animate-fadeout"
        } flex flex-col items-center justify-center `}>
        <div className="text-landing_mobile_title border-t-[0.1vh] pt-[2vh] pb-[1.2vh] mt-[2vh] md:text-[24px] md:pt-[1.6rem] md:pb-4 md:mt-5  md:border-t-[2px] font-bold  border-slate-600 w-[95%] text-center ">
          {contents.title}
        </div>
        <div className="text-landing_mobile_content md:text-[14.5px]  md:w-[83%] md:leading-[160%]">
          {contents.content}
        </div>
      </div>
    </div>
  );
};

export default RemoveCard;
