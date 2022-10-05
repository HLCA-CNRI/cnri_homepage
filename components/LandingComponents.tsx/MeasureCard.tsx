import Image from "next/image";
import styled, {keyframes} from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {memo, useCallback, useEffect, useState, useRef} from "react";
import LandingContents, {LandingSubContentsType} from "../../functions/LandingContents";
import TransitionVariants from "../../functions/TransitionVariants";
import {ScrollContainer} from "../../styles/commonStyles";

// interface IReportCard {
//   // 카드 내용
//   content: LandingSubContentsType;
// }

const MeasureCard = () => {
  const controlText = useAnimation(); // 내용 애니메이션 variant
  const [curContent, setCurContent] = useState<LandingSubContentsType>();
  const [pastKey, setPastKey] = useState("");
  const [curKey, setCurKey] = useState("");
  const contentArr = useRef([
    LandingContents.Measure.content1,
    LandingContents.Measure.content2,
    LandingContents.Measure.content3,
  ]);

  // 카드 클릭한 경우
  const onCardClick = useCallback(
    (e: any) => {
      setPastKey(curKey);
      const {key} = e.target.dataset;
      // console.log(key);
      if (!key || key === curKey) {
        setCurKey("");
        return;
      }

      setCurKey(key);
    },
    [curKey, pastKey]
  );
  useEffect(() => {
    // set contents to show
    if (curKey === "") {
      controlText.start("close2");
      return;
    }
    switch (curKey) {
      case contentArr.current[0].key:
        setCurContent(contentArr.current[0]);
        break;
      case contentArr.current[1].key:
        setCurContent(contentArr.current[1]);
        break;
      case contentArr.current[2].key:
        setCurContent(contentArr.current[2]);
        break;
      default:
        break;
    }
    controlText.start("open");
  }, [curKey]);

  return (
    // 카드 전체.
    <>
      {/* PC ver */}
      <Wrapper
        role="button"
        onClick={onCardClick}
        className="hidden lg:flex  w-full h-[360px]  flex-row cursor-pointer flex justify-center relative">
        {/* Images */}
        <div className="absolute w-full h-full rounded-forImg ">
          {/* first container */}
          <div
            className={`absolute w-[100%]  h-full  right-0 z-10  ${
              curKey === "" ? "from57toFull" : "to57"
            }`}>
            {/* image wrapper */}
            <div
              className={`relative w-[500px]  h-full  ${
                curKey === ""
                  ? "unClicked"
                  : curKey === contentArr.current[0].key
                  ? "unClicked"
                  : "clicked"
              }`}>
              <Image
                src={contentArr.current[0].srcPath}
                data-key={contentArr.current[0].key}
                alt="measure img"
                layout="fill"
                sizes="500px"
                className={` object-cover rounded-forImg  `}
              />
              {curKey === "" ? (
                <ImageCover width="500px" z={10} data-key={contentArr.current[0].key} />
              ) : curKey !== contentArr.current[0].key ? (
                <ImageCover width="200px" z={10} data-key={contentArr.current[0].key} />
              ) : null}
            </div>
          </div>

          {/* second containter */}
          <div
            className={`absolute h-full  right-0  z-20
            ${
              curKey === ""
                ? "w-[73%]"
                : curKey === contentArr.current[0].key
                ? "w-[23%]"
                : "w-[52%]"
            }`}>
            <div
              className={`relative w-[500px]  h-full z-20 ${
                curKey === ""
                  ? "unClicked"
                  : curKey === contentArr.current[1].key
                  ? "unClicked"
                  : "w-[200px]"
              }`}>
              <Image
                src={contentArr.current[1].srcPath}
                data-key={contentArr.current[1].key}
                alt="measure img"
                layout="fill"
                sizes="500px"
                className={`h-full object-cover rounded-forImg  `}
              />
              {curKey === "" ? (
                <ImageCover
                  width="500px"
                  z={20}
                  data-key={contentArr.current[1].key}
                  className={`relative w-[500px]  h-full z-20 ${
                    curKey === ""
                      ? "unClicked"
                      : curKey === contentArr.current[1].key
                      ? "unClicked"
                      : "w-[200px]"
                  }`}
                />
              ) : curKey !== contentArr.current[1].key ? (
                <ImageCover
                  width="200px"
                  z={20}
                  data-key={contentArr.current[1].key}
                  className={`relative w-[500px]  h-full z-20 ${
                    curKey === ""
                      ? "unClicked"
                      : curKey === contentArr.current[1].key
                      ? "unClicked"
                      : "w-[200px]"
                  }`}
                />
              ) : null}
            </div>
          </div>

          {/* third containter */}
          <div
            className={`absolute  h-full  right-0 z-30 ${
              curKey === "" || curKey === contentArr.current[2].key ? "w-[500px]" : "w-[200px]"
            }`}>
            <div
              className={`relative w-[500px]  h-full right-0 ${
                curKey === ""
                  ? "w-[500px]"
                  : curKey === contentArr.current[2].key
                  ? "unClicked"
                  : "w-[200px]"
              }`}>
              <Image
                src={contentArr.current[2].srcPath}
                data-key={contentArr.current[2].key}
                alt="measure img"
                layout="fill"
                sizes="520px"
                className={`h-full object-cover rounded-forImg  `}
              />
              {curKey === "" ? (
                <ImageCover width="500px" z={30} data-key={contentArr.current[2].key} />
              ) : curKey !== contentArr.current[2].key ? (
                <ImageCover width="200px" z={30} data-key={contentArr.current[2].key} />
              ) : null}
            </div>
          </div>
        </div>
        {/* 내용 */}
        <motion.div
          animate={controlText}
          initial="initial"
          variants={TransitionVariants.TransitionContextRToL}
          className={`w-[55%] border-2 rounded-forImg p-10 h-full `}>
          <div className="pl-[2%] mb-[4px] mr-[120px] flex flex-col justify-center items-center h-full">
            <h2
              className={`text-[21.5px] font-bold mb-2 whitespace-pre ${
                curKey !== pastKey ? "animate-fadein" : ""
              }`}>
              {curContent?.title}
            </h2>
            {/* motion.div로 대체하기 클릭할때마다 작동하도록 */}
            <p
              className={`text-[13.5px] leading-[160%] ${
                curKey !== pastKey ? "animate-fadein" : ""
              }`}>
              {curContent?.content}
            </p>
          </div>
        </motion.div>
      </Wrapper>

      {/* Mobile ver */}
      <ScrollContainer
        role="button"
        // onClick={onCardClick}
        className={`flex lg:hidden snap-x snap-mandatory  overflow-auto  `}>
        {contentArr.current.map((c) => (
          <div className={`snap-center `}>
            <div
              className={`relative w-landing_mobile h-landing_mobile rounded-landing_mobile mx-landing_mobile ${
                c.key === curContent?.key && c.key !== pastKey ? "drop-shadow-xl" : ""
              }`}>
              <Image
                src={c.srcPath}
                data-key={c.key}
                alt={c.title}
                layout="fill"
                sizes="90vw"
                className={`h-full object-cover rounded-landing_mobile  `}
              />
            </div>
            <div className="relative mx-[0.7vw] border-[0.5vw] rounded-b-landing_mobile border-t-0 top-[-5vh] z-[-10] animate-fadein">
              <div className="text-[4vw] py-[1vh] pt-[8vh] font-bold text-center  ">{c.title}</div>
              <div className="text-[2.8vw] px-[5vw] mb-[1.5vh]">{c.content}</div>
            </div>
            {/* {c.key === curContent?.key && c.key !== pastKey && (
              <div className="relative mx-[0.7vw] border-[0.5vw] rounded-b-landing_mobile border-t-0 top-[-5vh] z-[-10] animate-fadein">
                <div className="text-[4vw] py-[1vh] pt-[8vh] font-bold text-center  ">
                  {curContent?.title}
                </div>
                <div className="text-[2.8vw] px-[5vw] mb-[1.5vh]">{curContent?.content}</div>
              </div>
            )} */}
          </div>
        ))}
      </ScrollContainer>
    </>
  );
};

export default memo(MeasureCard);

const ImageCover = styled.div<{width: string; z: number}>`
  position: absolute;
  height: 100%;
  width: ${({width}) => width};
  z-index: ${({z}) => z};
  background-color: #888888;
  mix-blend-mode: multiply;
  transition: background-color 0.1s ease-out;
  border-radius: 2.5rem;

  &:hover {
    background: transparent;
  }
`;

const clicked = keyframes`
  from{
  }to{
    width:200px;
  }

`;

const to57 = keyframes`
  from{
  }to{
    width:57%;
  }
`;

const from57toFull = keyframes`
  from{
    width:57%;
  }to{
    width:100%;
  }
`;

const unClicked = keyframes`
  from{
    width:200px;
  }to{
    
  }

`;

const Wrapper = styled.div`
  .clicked {
    animation: ${clicked} 0.2s ease-out 1 forwards;
  }
  .unClicked {
    animation: ${unClicked} 0.2s ease-out 1 forwards;
  }

  .to57 {
    animation: ${to57} 0.2s ease-out 1 forwards;
  }

  .from57toFull {
    animation: ${from57toFull} 0.2s ease-out 1 forwards;
  }
`;
