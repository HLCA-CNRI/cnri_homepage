import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {memo, useCallback, useEffect, useState} from "react";
import classNames from "classnames";
import {LandingSubContentsType} from "../../functions/LandingContents";
import TransitionVariants from "../../functions/TransitionVariants";
import useHover from "../../hooks/useHover";

interface IReportCard {
  // 카드 내용
  content: LandingSubContentsType;
}

const ReportCard = ({content}: IReportCard) => {
  const controlText = useAnimation(); // 내용 애니메이션 variant
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    isOpened ? controlText.start("open") : controlText.start("close2");
  }, [isOpened]);

  // 카드 클릭한 경우
  const onCardClick = useCallback(() => {
    setIsOpened((cur) => !cur);
  }, [isOpened]);
  const [isHover, onMouseOver, onMouseLeave] = useHover();

  return (
    // 카드 전체.
    <div
      role="button"
      className={`w-full h-[400px] flex flex-row cursor-pointer flex justify-center relative 
      }`}
      onClick={onCardClick}>
      {/* 이미지 */}
      <motion.div
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseLeave}
        animate={controlText}
        initial="initial"
        variants={TransitionVariants.TransitionContextRToL}
        className={`absolute w-[53%] h-[400px] border-2 rounded-forImg z-10 ${
          isOpened ? "" : isHover ? "animate-shadow_larger" : "animate-shadow_smaller"
        }`}>
        <div className="relative w-full h-full">
          <Image
            src={content.srcPath}
            alt="report img"
            layout="fill"
            className={`w-full h-full object-cover rounded-forImg  `}
          />
        </div>
      </motion.div>

      {/* 내용 */}
      <motion.div
        animate={controlText}
        initial="initial"
        variants={TransitionVariants.TransitionContextLToR}
        className={`w-[50%] bg-cnri_report_bg p-10 h-full `}>
        <div className="pl-[10%] mx-[40px] flex flex-col justify-center items-center h-full">
          <h2 className="text-[35px] font-bold mb-8">{content.title}</h2>
          <p className=" text-[18px] leading-7">{content.content}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default memo(ReportCard);
