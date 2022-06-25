/* eslint-disable jsx-a11y/no-static-element-interactions */
import {useState, useRef} from "react";
import WorkAndPartnershipContent from "../../functions/WorkAndResponsibilitiesPartnership";
import Icon from "../RAndDCompoenents/Icon";
import Carousel from "../Carousel";

function PartnershipMobile() {
  const [currentObj, setCurrentObj] = useState(WorkAndPartnershipContent.totalBusiness);
  const picRef = useRef<null | HTMLVideoElement>(null);

  const userClick = (e: any) => {
    const val = e.target.id;
    if (WorkAndPartnershipContent[val] !== undefined) {
      setCurrentObj(WorkAndPartnershipContent[val]);
    }
    if (picRef && picRef.current) {
      console.log(picRef);
    }
  };

  return (
    <div>
      <div className="border grid grid-cols-3">
        <div
          id="ts"
          className={`border flex justify-center ${
            currentObj.title === "ts" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="ts" className="w-[80%] ">
            <Icon
              defaultIcon={WorkAndPartnershipContent.ts.default}
              coloredIcon={WorkAndPartnershipContent.ts.colored}
              isCurrent={currentObj.title === "ts"}
            />
          </div>
        </div>
        <div
          id="posco"
          className={`border flex justify-center ${
            currentObj.title === "posco" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="posco" className="w-[80%] ">
            <Icon
              defaultIcon={WorkAndPartnershipContent.posco.default}
              coloredIcon={WorkAndPartnershipContent.posco.colored}
              isCurrent={currentObj.title === "posco"}
            />
          </div>
        </div>
        <div
          id="h2"
          className={`border flex justify-center ${
            currentObj.title === "h2" ? "border-blue-400" : ""
          }`}>
          <div id="h2" className="w-[80%] " onClick={userClick}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.h2.default}
              coloredIcon={WorkAndPartnershipContent.h2.colored}
              isCurrent={currentObj.title === "h2"}
            />
          </div>
        </div>
      </div>
      <div className="border grid grid-cols-2">
        <div
          id="totalBusiness"
          className={`border flex justify-center ${
            currentObj.title === "totalBusiness" ? "border-blue-400" : ""
          }`}>
          <div id="totalBusiness" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.totalBusiness.default}
              coloredIcon={WorkAndPartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title === "totalBusiness"}
            />
          </div>
        </div>
        <div
          id="snu"
          className={`border flex justify-center ${
            currentObj.title === "snu" ? "border-blue-400" : ""
          }`}>
          <div id="snu" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.snu.default}
              coloredIcon={WorkAndPartnershipContent.snu.colored}
              isCurrent={currentObj.title === "snu"}
            />
          </div>
        </div>
      </div>

      <div className="mt-[2vh] border-2 p-[3vw] mb-[3vh] h-[65vh] iphone12Pro:h-[48vh] xxxs:h-[65vh] xxs:h-[85vh] ">
        <div>
          {currentObj.hasMultiple ? (
            <Carousel currentObj={currentObj} />
          ) : (
            <>
              <div className=" flex justify-center self-center  ">{currentObj.img}</div>
              <div className="text-[5.5vw]  font-semibold flex justify-start pb-[1vh] pt-[2vh]">
                {currentObj.kTitle}
              </div>
              <div className="text-[3vw]   ">
                <ul>
                  {currentObj.content.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PartnershipMobile;
