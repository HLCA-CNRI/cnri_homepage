import React, {memo, useEffect, useRef} from "react";
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
}: PropsType) => {
  const scrollRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (isOpened) {
      scrollRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [isOpened]);
  return (
    <div>
      <div
        className={`relative w-[260px] h-[420px] bg-partnership_bg flex justify-center items-center transition-all duration-[0.5s] ${
          isOpened ? "bg-white shadow-partnership  animate-fadein scale-105 z-10 " : ""
        } ${!isLast && !isOpened ? "border-r-2" : " "}
          
          `}>
        <div className="w-[140px]" ref={scrollRef}>
          {content.colored}
        </div>

        <div
          className={`absolute bottom-0 w-full bg-rnd_mint  h-[40px] ${
            isOpened ? "visible" : "hidden"
          } `}>
          {" "}
        </div>
      </div>
      {/* contents 부분 */}
      <div className="relative mt-7 pb-[230px]">
        <div
          className={`absolute  w-[500px] ${
            isOpened ? "visible animate-fadein" : "animate-fadeout"
          } ${isLeft ? "left-0" : "right-0"} `}>
          <h4 className={`font-bold text-[18px] py-2 ${isLeft ? "" : "text-right"}`}>
            {content.kTitle[contentIdx]}
          </h4>
          <div className="text-[16px] leading-7">{content.content[contentIdx]}</div>
        </div>
      </div>
    </div>
  );
};

export default memo(PartnershipCard);
