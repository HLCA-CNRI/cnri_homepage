import Image from "next/image";
import {motion, useAnimation} from "framer-motion";
import {memo, useCallback, useEffect, useState} from "react";
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
  const [isHover, onMouseOver, onMouseLeave] = useHover();

  useEffect(() => {
    isOpened ? controlText.start("open") : controlText.start("close2");
  }, [isOpened]);

  // 카드 클릭한 경우
  const onCardClick = useCallback(() => {
    setIsOpened((cur) => !cur);
  }, [isOpened]);

  // 모바일 카드 클릭한 경우
  const onMobileClick = useCallback(() => {
    // TODO
  }, [isOpened]);

  return (
    <>
      {/* PC ver */}
      <div
        role="button"
        className={`hidden lg:flex w-full h-[20rem] flex flex-row cursor-pointer flex justify-center relative 
      }`}
        onClick={onCardClick}>
        {/* 이미지 */}
        <motion.div
          onMouseEnter={onMouseOver}
          onMouseLeave={onMouseLeave}
          animate={controlText}
          initial="initial"
          variants={TransitionVariants.TransitionContextRToL}
          className={`absolute w-[53%] h-[20rem] border-2 rounded-forImg z-10 ${
            isOpened ? "" : isHover ? "animate-shadow_larger" : "animate-shadow_smaller"
          }`}>
          <div className="relative w-full h-full">
            <Image
              sizes="600px"
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
          className={`w-[50%] bg-cnri_report_bg p-10 h-full rounded-forImg `}>
          <div className="pl-[10%] mx-[40px] flex flex-col justify-center items-center h-full">
            <h2 className="text-[1.8rem] font-bold mb-4">{content.title}</h2>
            <p className=" text-[14px] leading-7">{content.content}</p>
          </div>
        </motion.div>
      </div>

      {/* Mobile ver */}
      <div
        className="flex flex-col justify-center items-center lg:hidden"
        role="button"
        onClick={onCardClick}>
        {/* 이미지 */}
        <div
          className={`relative w-landing_mobile h-landing_mobile rounded-landing_mobile border-[0.5vw] ${
            isOpened ? "drop-shadow-md" : ""
          }`}>
          <Image
            sizes="90vw"
            src={content.srcPath}
            alt="report img"
            layout="fill"
            className={`w-full h-full object-cover rounded-landing_mobile  `}
          />
        </div>
        {/* 텍스트 */}
        {isOpened && (
          <div className="animate-fadein">
            <div className="text-landing_mobile_title  font-bold text-center py-[2vh] mt-[1vh] ">
              {content.title}
            </div>
            <div className="text-landing_mobile_content  px-[4vw]"> {content.content}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default memo(ReportCard);
