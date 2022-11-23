/* eslint-disable react/no-array-index-key */
import React, {memo} from "react";
import styled from "styled-components";
import {Direction} from "../../../constants/enum/direction_enum";
import * as SS from "../SharedStyle";

const RightCardText = memo(({isHover = false}: {isHover?: boolean}) => (
  <SS.TextWrapper align={Direction.LEFT}>
    <SS.CardTitle isHover={isHover}>LCA</SS.CardTitle>
    <SS.CardSubTitle isHover={isHover}>제품 탄소발자국</SS.CardSubTitle>
    <SS.CardDescription isHover={isHover} align={Direction.LEFT}>
      데이터 기반
      <br />
      기후 위기 대응의
      <br className="hidden xl:block" />첫 걸음입니다.
    </SS.CardDescription>
  </SS.TextWrapper>
));

export default RightCardText;
