import React from "react";
import styled from "styled-components";
import Image from "next/image";
import {LandingSubContentsType} from "../../functions/LandingContents";
import useHover from "../../hooks/useHover";

const ReduceCard = ({
  contents,
  bgColor,
  isOpened,
}: {
  contents: LandingSubContentsType;
  bgColor: string;
  isOpened: boolean;
}) => {
  const [isHover, onMouseOver, onMouseLeave] = useHover();
  return (
    <Wrapper
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={`mx-landing_mobile w-landing_mobile h-landing_mobile landscape:h-[80vh] landscape:md:h-[17.5rem] md:w-full md:h-[17.5rem] md:mx-0 relative flex flex-col flex-auto justify-center items-center hover:cursor-pointer p-4 ${
        isOpened ? "" : ""
      }  `}>
      {/* 제목 */}
      <div
        className={` text-[5vw] my-[1vh] md:text-[30px] md:px-[4rem] md:my-3 z-10 text-white font-bold  whitespace-pre text-center leading-slug  ${
          isOpened ? "" : "drop-shadow-md goDown"
        }  `}>
        {contents.title}
      </div>

      {/* 내용 */}
      <div
        className={`text-[1vw] md:text-[16px] text-white z-10   ${
          isOpened ? "animate-fadein" : "animate-fadeout"
        }   `}>
        {contents.content}
      </div>

      {/* 이미지 */}
      <ImageCover
        clicked={isOpened}
        bgColor={bgColor}
        className={`rounded-landing_mobile w-full h-full  md:rounded-[2.5rem]  absolute  z-4 
        ${isOpened ? "" : " mix-blend-multiply"} 
        ${isOpened ? "" : isHover ? "animate-brighter" : "animate-darker "} 
        `}
      />
      <Image
        src={contents.srcPath}
        alt="reduce img"
        layout="fill"
        className={`rounded-landing_mobile md:rounded-[2.5rem] w-full h-full object-cover  z-1 mix-blend-multiply   ${
          isOpened ? "animate-fadeout" : "animate-fadein"
        }`}
      />
    </Wrapper>
  );
};

export default ReduceCard;
const Wrapper = styled.div`
  .goDown {
    offset: 0% 50%;
    position: absolute;
    margin: auto;
  }
`;

const ImageCover = styled.div<{bgColor: string; clicked: boolean}>`
  background-color: ${({clicked, bgColor}) => (clicked ? bgColor : "black")};
`;
