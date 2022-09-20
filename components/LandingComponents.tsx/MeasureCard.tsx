import Image from "next/image";
import styled, {keyframes} from "styled-components";
import {motion, useAnimation} from "framer-motion";
import {memo, useCallback, useEffect, useState, useRef} from "react";
import LandingContents, {LandingSubContentsType} from "../../functions/LandingContents";
import TransitionVariants from "../../functions/TransitionVariants";

// interface IReportCard {
//   // 카드 내용
//   content: LandingSubContentsType;
// }

const MeasureCard = () => {
  const controlText = useAnimation(); // 내용 애니메이션 variant
  const [curContent, setCurContent] = useState<LandingSubContentsType>();
  const [pastKey, setPastKey] = useState("0");
  const [curKey, setCurKey] = useState("0");
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
        setCurKey("0");
        return;
      }

      setCurKey(key);
    },
    [curKey, pastKey]
  );
  useEffect(() => {
    // set contents to show
    if (curKey === "0") {
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
    <Wrapper
      role="button"
      className="w-full h-[460px] flex flex-row cursor-pointer flex justify-center relative"
      onClick={onCardClick}>
      {/* Images */}
      <div className="absolute w-full h-full rounded-forImg ">
        {/* first container */}
        <div
          className={`absolute w-[62%]  h-full  right-0 mr-[38%] z-10  ${
            curKey === "0" ? "unClicked" : "clicked"
          }`}>
          {/* image wrapper */}
          <div
            className={`relative w-[600px]  h-full  ${
              curKey === "0" ? "unClicked" : curKey === contentArr.current[0].key ? "" : "clicked"
            }`}>
            <Image
              src={contentArr.current[0].srcPath}
              data-key={contentArr.current[0].key}
              alt="measure img"
              layout="fill"
              className={`h-full object-cover rounded-forImg  `}
            />
            {curKey === "0" ? (
              <ImageCover width="600px" z={10} data-key={contentArr.current[0].key} />
            ) : curKey !== contentArr.current[0].key ? (
              <ImageCover width="200px" z={10} data-key={contentArr.current[0].key} />
            ) : null}
          </div>
        </div>

        {/* second containter */}
        <div
          className={`absolute w-[40%]  h-full  right-0 mr-[32%]   ${
            curKey === "0"
              ? "unClicked"
              : curKey === contentArr.current[0].key && pastKey === "0"
              ? "firstOneClicked"
              : curKey === contentArr.current[0].key && pastKey !== "0"
              ? "firstOneClickedWhenOpened"
              : curKey === contentArr.current[1].key && pastKey !== "0"
              ? "secondOneClickedWhenOpened"
              : curKey === contentArr.current[2].key && pastKey !== "0"
              ? "thirdOneClickedWhenOpened"
              : "clicked"
          }`}>
          <div
            className={`relative w-[600px]  h-full z-20 ${
              curKey === "0" ? "unClicked" : curKey === contentArr.current[1].key ? "" : "clicked"
            }`}>
            <Image
              src={contentArr.current[1].srcPath}
              data-key={contentArr.current[1].key}
              alt="measure img"
              width="600px"
              height="400px"
              layout="fill"
              className={`h-full object-cover rounded-forImg z-3 `}
            />
            {curKey === "0" ? (
              <ImageCover width="600px" z={20} data-key={contentArr.current[1].key} />
            ) : curKey !== contentArr.current[1].key ? (
              <ImageCover width="200px" z={20} data-key={contentArr.current[1].key} />
            ) : null}
          </div>
        </div>

        {/* third containter */}
        <div
          className={`absolute w-[520px]  h-full  right-0 z-30 ${
            curKey === "0"
              ? ""
              : curKey === contentArr.current[2].key && pastKey === "0"
              ? "selected"
              : curKey === contentArr.current[2].key && pastKey !== "0"
              ? "selectedWhenOpened"
              : "clicked"
          }`}>
          <div
            className={`relative w-[520px]  h-full right-0 ${
              curKey === "0" && pastKey === contentArr.current[2].key
                ? "unClickedWhenSelected"
                : curKey === "0" && pastKey !== contentArr.current[2].key
                ? "unClicked"
                : curKey === contentArr.current[2].key && pastKey === "0"
                ? "selected"
                : curKey === contentArr.current[2].key && pastKey !== "0"
                ? "selectedWhenOpened"
                : "clicked"
            }`}>
            <Image
              src={contentArr.current[2].srcPath}
              data-key={contentArr.current[2].key}
              alt="measure img"
              layout="fill"
              className={`h-full object-cover rounded-forImg  `}
            />
            {curKey === "0" ? (
              <ImageCover width="520px" z={30} data-key={contentArr.current[2].key} />
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
            className={`text-[28px] font-bold mb-8 whitespace-pre ${
              curKey !== pastKey ? "animate-fadein" : ""
            }`}>
            {curContent?.title}
          </h2>
          {/* motion.div로 대체하기 클릭할때마다 작동하도록 */}
          <p className={`text-[16px] leading-7 ${curKey !== pastKey ? "animate-fadein" : ""}`}>
            {curContent?.content}
          </p>
        </div>
      </motion.div>
    </Wrapper>
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
  transition: all 0.2s ease-out;
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

const unClicked = keyframes`
  from{
    width:200px;
  }to{
  }

`;

const selected = keyframes`
from{
 
}to{
  width:600px;
}
`;

const unClickedWhenSelected = keyframes`
  from{
    width:600px;
  }to{
    width:520px;
  }

`;

const selectedWhenOpened = keyframes`
from{
  width:100px;
}to{
  width:600px;
}
`;

// 첫번째 컨테이너 클릭 시 두번째 컨테이너의 위치 변경을 위함
const firstOneClicked = keyframes`
from{
}to{
  width:200px;
  margin-right:5%;
}
`;

const firstOneClickedWhenOpened = keyframes`
from{
  margin-right:3%;
}to{
  width:200px;
  margin-right:5%;
}
`;

const secondOneClickedWhenOpened = keyframes`
from{
  width:40%;
  margin-right:5%;
}to{
  width:600px;
  margin-right:5%;
}
`;

// 세번째 컨테이너 클릭 시 두번째 컨테이너의 위치 변경을 위함
const thirdOneClickedWhenOpened = keyframes`
from{
  width:10%;
  margin-right:32%;
}to{
  width:200px;
  margin-right:32%;
}
`;

const Wrapper = styled.div`
  .clicked {
    animation: ${clicked} 0.2s ease-out 1 forwards;
  }
  .unClicked {
    animation: ${unClicked} 0.2s ease-out 1 forwards;
  }

  .unClickedWhenSelected {
    animation: ${unClickedWhenSelected} 0.2s ease-out 1 forwards;
  }
  .selected {
    animation: ${selected} 0.2s ease-out 1 forwards;
  }

  .firstOneClicked {
    animation: ${firstOneClicked} 0.2s ease-out 1 forwards;
  }

  .firstOneClickedWhenOpened {
    animation: ${firstOneClickedWhenOpened} 0.2s ease-out 1 forwards;
  }

  .secondOneClickedWhenOpened {
    animation: ${secondOneClickedWhenOpened} 0.2s ease-out 1 forwards;
  }

  .thirdOneClickedWhenOpened {
    animation: ${thirdOneClickedWhenOpened} 0.2s ease-out 1 forwards;
  }
  .selectedWhenOpened {
    animation: ${selectedWhenOpened} 0.2s ease-out 1 fowards;
  }
`;
