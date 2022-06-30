import {useState, useRef} from "react";
import PartnershipContent from "../../functions/PartnershipContent";
import Icon from "./Icon";
import Carousel from "./Carousel";

function PartnershipMobile() {
  const [currentObj, setCurrentObj] = useState(PartnershipContent.totalBusiness);
  const picRef = useRef<null | HTMLVideoElement>(null);

  const userClick = (e: any) => {
    const val = e.target.id;
    if (PartnershipContent[val] !== undefined) {
      setCurrentObj(PartnershipContent[val]);
    }
    if (picRef && picRef.current) {
      console.log(picRef);
    }
  };

  return (
    <div>
      <div className="border grid grid-cols-3">
        <div
          role="button"
          id="ts"
          className={`border flex justify-center ${
            currentObj.title === "ts" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="ts" className="w-[80%] ">
            <Icon
              defaultIcon={PartnershipContent.ts.default}
              coloredIcon={PartnershipContent.ts.colored}
              isCurrent={currentObj.title === "ts"}
            />
          </div>
        </div>
        <div
          role="button"
          id="posco"
          className={`border flex justify-center ${
            currentObj.title === "posco" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="posco" className="w-[80%] ">
            <Icon
              defaultIcon={PartnershipContent.posco.default}
              coloredIcon={PartnershipContent.posco.colored}
              isCurrent={currentObj.title === "posco"}
            />
          </div>
        </div>
        <div
          id="h2"
          className={`border flex justify-center ${
            currentObj.title === "h2" ? "border-blue-400" : ""
          }`}>
          <div role="button" id="h2" className="w-[80%] " onClick={userClick}>
            <Icon
              defaultIcon={PartnershipContent.h2.default}
              coloredIcon={PartnershipContent.h2.colored}
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
          <div role="button" id="totalBusiness" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={PartnershipContent.totalBusiness.default}
              coloredIcon={PartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title === "totalBusiness"}
            />
          </div>
        </div>
        <div
          id="snu"
          className={`border flex justify-center ${
            currentObj.title === "snu" ? "border-blue-400" : ""
          }`}>
          <div role="button" id="snu" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={PartnershipContent.snu.default}
              coloredIcon={PartnershipContent.snu.colored}
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