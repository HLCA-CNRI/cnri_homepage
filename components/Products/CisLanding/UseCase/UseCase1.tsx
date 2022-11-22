import React, {memo} from "react";
import Image from "next/image";
import * as SS from "../SharedStyle";
import colors from "../../../../constants/colors";
import * as CSS from "../../Common/SharedStyle";

const UseCase1 = memo(() => (
  <CSS.ContentFlex isPhotoLeft={false}>
    <div>
      <SS.UsecaseTitleContainer>
        <SS.Title
          color={colors.BEIGE_BG_2}
          mobileColor={colors.CIS_MAIN_GREEN}
          mobileBgColor={colors.BEIGE_BG_2}
          className="font-bold">
          실제 사용 사례
        </SS.Title>
      </SS.UsecaseTitleContainer>
      <SS.Description mobileColor={colors.BEIGE_BG_2}>
        SaaS ERP 서비스를 통해 <br />
        <strong>간편한 공정 데이터 관리</strong>
      </SS.Description>
    </div>
    <SS.UsecaseImgNLabelContainer>
      <SS.UsecaseImageContainer>
        <Image src="/images/cis/example_1.png" alt="실제 사용 사례 1" layout="fill" priority />
      </SS.UsecaseImageContainer>
      <SS.ImageLabel color={colors.CIS_MAIN_GREEN} bgColor={colors.BEIGE_BG_2}>
        가상공정 기준
      </SS.ImageLabel>
    </SS.UsecaseImgNLabelContainer>
  </CSS.ContentFlex>
));

export default UseCase1;
