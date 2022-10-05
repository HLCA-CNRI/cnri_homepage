import React, {memo, useState} from "react";
import {HistoryContentType} from "../../functions/HistoryContents";

const HistoryCard = memo(({content}: {content: HistoryContentType}) => {
  const [isOpened, setIsOpened] = useState(false);
  const onHistoryClick = () => {
    setIsOpened((cur) => !cur);
  };
  return (
    <div
      className={` basis-[400px] my-[1vh] md:mx-[10px] flex flex-grow flex-col items-center    border-2 rounded-forImg   transition-all duration-[0.5s] bg-[white] mx-auto  ${
        isOpened ? "h-[63vh] md:h-[440px]   bg-history_gradient" : "h-[11vh] md:h-[90px]"
      }`}>
      <div
        role="button"
        onClick={onHistoryClick}
        className={`text-[12vw] w-full text-center leading-[11vh]  md:text-[60px] md:leading-[140%] font-bold ${
          isOpened ? "h-[11vh] md:h-[90px] text-[white] drop-shadow-history_text " : "h-full"
        }`}>
        {content.year}
      </div>
      <div
        role="button"
        onClick={isOpened ? onHistoryClick : () => {}}
        className={` text-[3.5vw] md:text-[15px] h-[75%] w-[80%] flex flex-col text-[white]  font-semibold drop-shadow-history_text  ${
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
