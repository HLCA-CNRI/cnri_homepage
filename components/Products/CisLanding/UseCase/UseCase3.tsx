import React, {memo} from "react";
import Image from "next/image";
import * as SS from "../SharedStyle";
import colors from "../../../../constants/colors";
import * as CSS from "../../Common/SharedStyle";

const UseCase3 = memo(() => (
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
        제품 별 <strong>Carbon Footprint 모니터링</strong>
      </SS.Description>
    </div>
    <SS.UsecaseImgNLabelContainer>
      <SS.UsecaseImageContainer isOriginLeft={false}>
        <Image src="/images/cis/cfp.png" alt="실제 사용 사례 3" layout="fill" priority />
      </SS.UsecaseImageContainer>
      <SS.ImageLabel color={colors.CIS_MAIN_GREEN} bgColor={colors.BEIGE_BG_2}>
        가상공정 기준
      </SS.ImageLabel>
    </SS.UsecaseImgNLabelContainer>
  </CSS.ContentFlex>
));

export default UseCase3;
