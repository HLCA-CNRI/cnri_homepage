import React, {memo} from "react";
import Image from "next/image";
import * as SS from "../SharedStyle";
import colors from "../../../../constants/colors";

const UseCase2 = memo(() => (
  <SS.ContentFlex isPhotoLeft>
    <div>
      <SS.UsecaseTitleContainer>
        <SS.Title
          color={colors.CIS_MAIN_GREEN}
          mobileColor={colors.BEIGE_BG_2}
          mobileBgColor={colors.CIS_MAIN_GREEN}
          className="font-bold">
          실제 사용 사례
        </SS.Title>
      </SS.UsecaseTitleContainer>
      <SS.Description mobileColor={colors.CIS_MAIN_GREEN}>
        ERP 서비스와 연동한
        <br />
        <strong>자동화 탄소회계 </strong>
        시스템
      </SS.Description>
    </div>
    <SS.UsecaseImgNLabelContainer>
      <SS.UsecaseImageContainer>
        <Image src="/images/cis/example_2.png" alt="실제 사용 사례 2" layout="fill" />
      </SS.UsecaseImageContainer>
      <SS.ImageLabel color={colors.BEIGE_BG_2} bgColor={colors.CIS_MAIN_GREEN}>
        가상공정 기준
      </SS.ImageLabel>
    </SS.UsecaseImgNLabelContainer>
  </SS.ContentFlex>
));

export default UseCase2;
