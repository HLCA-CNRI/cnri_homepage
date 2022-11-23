/* eslint-disable react/no-array-index-key */
import React, {memo} from "react";
import styled from "styled-components";
import {Direction} from "../../../constants/enum/direction_enum";
import * as SS from "../SharedStyle";

const LeftCardText = memo(({isHover = false}: {isHover?: boolean}) => (
  <SS.TextWrapper align={Direction.RIGHT}>
    <SS.CardTitle isHover={isHover}>탄소회계</SS.CardTitle>
    <SS.CardSubTitle isHover={isHover}>
      <ScopeSpan isHover={isHover}>SCOPE</ScopeSpan>
      {new Array(3).fill(0).map((num, idx) => (
        <NumberWrapper isHover={isHover} key={`scope_${idx}`}>
          {idx + 1}
        </NumberWrapper>
      ))}
      {/* <NumberWrapper>1</NumberWrapper> 2 3 */}
    </SS.CardSubTitle>
    <SS.CardDescription isHover={isHover} align={Direction.RIGHT}>
      데이터 기반
      <br />
      기후 위기 대응의
      <br className="hidden xl:block" />첫 걸음입니다.
    </SS.CardDescription>
  </SS.TextWrapper>
));

export default LeftCardText;
const ScopeSpan = styled.span<{isHover: boolean}>`
  margin-right: 1vw;
  @media screen and (min-width: 1200px) {
    margin-right: 10px;
  }
`;
const NumberWrapper = styled.div<{isHover: boolean}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  margin: 0 0.4vw;
  padding: 0 1.8vw;
  border-radius: 0.3vw;

  @media screen and (min-width: 1200px) {
    transition: all ease-in-out 0.01s;
    padding: 2px 8px;
    width: 1.5em;
    height: 1.5em;
    border-radius: 4px;
    margin: 0 3px;
  }
`;
