import React, {memo, useState} from "react";
import styled, {css} from "styled-components";
import colors from "../../constants/colors";
import {LCAContentsType} from "../../functions/LCAContents";

const LCACard = memo(({content}: {content: LCAContentsType}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper
      className="w-[400px] h-[410px] rounded-forImg flex flex-col items-center border-2 hover:cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className="w-[50%] h-[35%] xl:h-[50%] flex items-center p-[10px] xl:p-[18px] pt-[20px] xl:pt-[60px] ">
        {!isHover ? content.colored : content.default}
      </div>
      <div className={`px-[60px] ${isHover ? "text-white" : ""}`}>
        <h2
          className={`h-[20px] text-center text-[16px] xl:text-[20px]  font-bold  mb-[10px] xl:mb-[30px] mt-[10px] `}>
          {content.kTitle}
        </h2>
        <div className="texts text-[12px] xl:text-[14.5px] font-medium leading-6 ">{`${content.content1} ${content.content2}`}</div>
      </div>
    </Wrapper>
  );
});

export default LCACard;
const gradient = css`
  background: linear-gradient(
    215.17deg,
    ${colors.GRADATION_GREEN} -1.65%,
    ${colors.GRADATION_SKYBLUE} 137.99%
  );
`;

const Wrapper = styled.div`
  &:hover {
    ${gradient}
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border: none;
  }
  &:hover > .child {
    color: white;
    filter: drop-shadow(0px 4px 4px rgb(0, 0, 0, 0.25));
  }

  &:hover > .texts {
    color: white;
  }
`;
