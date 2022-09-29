import React, {memo, useEffect, useRef} from "react";
import Image from "next/image";
import {PartnershipContentType} from "../../functions/PartnershipContent";

type PropsType = {
  content: PartnershipContentType;
  isOpened: boolean;
  isLeft: boolean;
  contentIdx: number;
  isLast: boolean;
};
const PartnershipCard = ({
  content,
  isOpened,
  isLeft = true,
  contentIdx = 0,
  isLast = false,
}: PropsType) => (
  <div>
    <div
      className={`relative w-[200px] h-[320px] bg-partnership_bg flex justify-center items-center transition-all duration-[0.5s] ${
        isOpened ? "bg-white shadow-partnership  animate-fadein scale-105 z-10 " : ""
      } ${!isLast && !isOpened ? "border-r-2" : " "}
          
          `}>
      <div className="w-[100px] h-[100px] relative">
        <Image
          src={content.colored.src}
          alt={content.colored.alt}
          layout="fill"
          className="object-cover w-full h-full"
          sizes="100px"
        />
      </div>

      <div
        className={`absolute bottom-0 w-full bg-rnd_mint  h-[25px] ${
          isOpened ? "visible" : "hidden"
        } `}>
        {" "}
      </div>
    </div>
    {/* contents 부분 */}
    <div className="relative mt-5 pb-[170px]">
      <div
        className={`absolute  w-[500px] ${
          isOpened ? "visible animate-fadein" : "animate-fadeout"
        } ${isLeft ? "left-0" : "right-0"} `}>
        <h4 className={`font-bold text-[16px] py-2 ${isLeft ? "" : "text-right"}`}>
          {content.kTitle[contentIdx]}
        </h4>
        <div className="text-[14px] leading-6">{content.content[contentIdx]}</div>
      </div>
    </div>
  </div>
);

export default memo(PartnershipCard);
