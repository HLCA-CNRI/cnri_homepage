import React, {useState} from "react";
import styled, {keyframes, css} from "styled-components";
import Image from "next/image";
import {LandingSubContentsType} from "../../functions/LandingContents";
import useHover from "../../hooks/useHover";

const ReduceCard = ({
  contents,
  width,
  height,
  bgColor,
  isOpened,
}: {
  contents: LandingSubContentsType;
  width: number;
  height: number;
  bgColor: string;
  isOpened: boolean;
}) => {
  const [isHover, onMouseOver, onMouseLeave] = useHover();
  return (
    <Wrapper
      width={width}
      height={height}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={`relative flex flex-col flex-auto justify-center items-center hover:cursor-pointer p-4 ${
        isOpened ? "" : ""
      }  `}>
      <div
        className={`${
          isOpened ? "" : "drop-shadow-md goDown"
        }   text-[30px] z-10 text-white font-bold  whitespace-pre text-center leading-slug my-3`}>
        {contents.title}
      </div>
      <Content
        width={width * 0.7}
        className={` ${
          isOpened ? "animate-fadein" : "animate-fadeout"
        }  text-white z-10 text-[16px] `}>
        {contents.content}
      </Content>

      {/* 이미지 관련 */}
      <ImageCover
        clicked={isOpened}
        bgColor={bgColor}
        className={`w-full h-full absolute rounded-[2.5rem]  z-4 
        ${isOpened ? "" : " mix-blend-multiply"} 
        ${isOpened ? "" : isHover ? "animate-brighter" : "animate-darker "} 
        `}
      />
      <Image
        src={contents.srcPath}
        alt="reduce img"
        layout="fill"
        className={`w-full h-full object-cover rounded-[2.5rem] z-1 mix-blend-multiply   ${
          isOpened ? "animate-fadeout" : "animate-fadein"
        }`}
      />
    </Wrapper>
  );
};

export default ReduceCard;
const Wrapper = styled.div<{width: number; height: number}>`
  width: 100%;
  height: ${({height}) => height}px;

  .goDown {
    offset: 0% 50%;
    position: absolute;
    margin: auto;
  }
`;

const Content = styled.div<{width: number}>`
  width: ${({width}) => width}px;
`;

const ImageCover = styled.div<{bgColor: string; clicked: boolean}>`
  background-color: ${({clicked, bgColor}) => (clicked ? bgColor : "black")};
`;
