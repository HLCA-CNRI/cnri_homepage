import React, {memo, useState} from "react";
import {HistoryContentType} from "../../functions/HistoryContents";
import useHover from "../../hooks/useHover";

const HistoryCard = memo(({content}: {content: HistoryContentType}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isHover, onMouseEnter, onMouseLeave] = useHover();
  const onHistoryClick = () => {
    setIsOpened((cur) => !cur);
  };
  return (
    <div
      role="button"
      onClick={onHistoryClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={` basis-[600px] my-[1vh] md:mx-[20px] flex flex-grow flex-col items-center  border-2 rounded-forImg   transition-all duration-[0.5s] bg-[white] hover:bg-history_gradient hover:text-[white] hover:drop-shadow-md mx-auto  ${
        isOpened ? "h-[60vh] md:h-[700px]   bg-history_gradient" : "h-[11vh] md:h-[150px]"
      }`}>
      <div
        className={`text-[12vw] leading-[11vh]  md:text-[80px] md:leading-[150px] font-bold ${
          isHover ? "drop-shadow-history_text " : " "
        }  ${
          isOpened ? "h-[11vh] md:h-[150px] text-[white] drop-shadow-history_text " : "h-full"
        }`}>
        {content.year}
      </div>
      <div
        className={` text-[3.5vw] md:text-[24px] h-[75%] w-[80%] flex flex-col text-[white]  font-semibold drop-shadow-history_text  ${
          isOpened ? "animate-fadein" : "animate-fadeout z-[-11]"
        }`}>
        <ul>
          {content.content.map((c) => (
            <li className="flex py-[10px] ">
              <div className="mr-5">{c.month}</div>
              <div className="whitespace-pre-line">{c.des}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default HistoryCard;
