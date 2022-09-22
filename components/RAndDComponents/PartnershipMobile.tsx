import {useState, useRef} from "react";
import PartnershipContent from "../../functions/PartnershipContent";
import Icon from "./Icon";
import Carousel from "./Carousel";

function PartnershipMobile() {
  const [currentObj, setCurrentObj] = useState(PartnershipContent.totalBusiness);
  // ICON:사용자 아이콘 클릭 이벤트 핸들러 --> currentObj가 현제 오브젝트로 지정
  const userClick = (e: any) => {
    const val = e.target.id;
    if (PartnershipContent[val] !== undefined) {
      setCurrentObj(PartnershipContent[val]);
    }
  };

  return (
    <div>
      {/* 위에 아이콘 부분 -->위에 3칸 grid 구성 */}
      <div className="border grid grid-cols-3">
        {/* ts */}
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
        {/* posco */}
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
        {/* h2 */}
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
      {/* 위에 아이콘 부분 -->밑에 2칸 grid 구성 */}
      <div className="border grid grid-cols-2">
        {/* totalBusiness */}
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
        {/* snu */}
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
      {/* 밑에 내용 부분 --> 사진 + 내용 */}
      {/* 만야에 hasMultiple --> 내용이 1개 이상이면 Carousel 형태로 보여주기 아니면 그냥 currentObj 내용 보내주기 */}
      <div className="mt-[2vh] border-2 p-[20px] mb-[3vh] ">
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
                <div>{currentObj.content}</div>
                {/* <ul>
                  {currentObj.content.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul> */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default PartnershipMobile;
