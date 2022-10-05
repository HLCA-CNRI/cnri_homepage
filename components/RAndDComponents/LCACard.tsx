import React, {memo, useState} from "react";
import styled, {css} from "styled-components";
import colors from "../../constants/colors";
import {LCAContentsType} from "../../functions/LCAContents";

const LCACard = memo(({content}: {content: LCAContentsType}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper
      className="w-[290px] h-[250px] rounded-forImg flex flex-col items-center border-2 hover:cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <div className="w-[50%] h-[35%] xl:h-[23%] flex items-center p-[10px] xl:p-[0px] pt-[20px] xl:mt-[30px] ">
        {!isHover ? content.colored : content.default}
      </div>
      <div className={`px-[25px] ${isHover ? "text-white" : ""}`}>
        <h2
          className={` text-center text-[16px] xl:text-[16px]  font-bold  mb-[10px] xl:mb-[8px] mt-[17px] `}>
          {content.kTitle}
        </h2>
        <div className="text-[12px] xl:text-[11.5px] font-medium leading-[1.2rem] ">{`${content.content1} ${content.content2}`}</div>
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
