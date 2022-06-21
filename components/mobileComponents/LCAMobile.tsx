import Icon from "../RAndDCompoenents/Icon";
import { LCAContents } from "@/functions/LCAContents";
import { useState,useRef } from "react";

const LCAMobile = () => {
  const [currentObj, setCurrentObj] = useState(LCAContents.resources);
  const videoRef = useRef<null | HTMLVideoElement>(null);

  const userClick = (e:any) =>{
    const val = e.target.id;
    if (LCAContents[val] != undefined) {
        setCurrentObj(LCAContents[val]);
      }
      if (videoRef && videoRef.current) {
        console.log(videoRef);
      }
  }
  return (
    <div>
      <div className="border grid grid-cols-3 ">
      <div id = "resources" className={`border flex justify-center py-[1vh] ${currentObj.title == "resources" ? "border-blue-400":""}`} onClick={userClick}>
          <div id = "resources" className="w-[50%] ">
            <div id = "resources" className={`flex justify-center ${currentObj.title == "resources" ? "" :"text-stone-400"} text-[3.5vw] mb-[1vh]`}>원료 채굴</div>
            <div>
            <Icon
              defaultIcon={LCAContents.resources.default}
              coloredIcon={LCAContents.resources.colored}
              isCurrent={currentObj.title == "resources" ? true : false}
              hasMultiple={false}

            />

            </div>
            
          </div>
        </div>

        <div id = "processing" className={`border flex justify-center py-[1vh] ${currentObj.title == "processing" ? "border-blue-400":""}`}   onClick={userClick}>
        <div id = "processing" className="w-[50%] ">
            <div id = "processing" className={`flex justify-center ${currentObj.title == "processing" ? "" :"text-stone-400"} text-[3.5vw] mb-[1vh]`} >원료 가공</div>
            <Icon
              defaultIcon={LCAContents.processing.default}
              coloredIcon={LCAContents.processing.colored}
              isCurrent={currentObj.title == "processing" ? true : false}   
              hasMultiple={false}

            />
          </div>
        </div>

        <div id = "manufacturing" className={`border flex justify-center py-[1vh] ${currentObj.title == "manufacturing" ? "border-blue-400":""}`} onClick={userClick}>
        <div id = "manufacturing" className="w-[50%] ">
            <div id = "manufacturing" className={`flex justify-center ${currentObj.title == "manufacturing" ? "" :"text-stone-400"} text-[3.5vw] mb-[1vh]`}>제품 제조</div>
            <Icon
              defaultIcon={LCAContents.manufacturing.default}
              coloredIcon={LCAContents.manufacturing.colored}
              isCurrent={currentObj.title == "manufacturing" ? true : false}   
              hasMultiple={false}
            />
          </div>
        </div>
        <div id = "distribution"  className={`border flex justify-center py-[1vh] ${currentObj.title == "distribution" ? "border-blue-400":""}`} onClick={userClick}>
        <div id = "distribution" className="w-[50%] ">
            <div id = "distribution" className={`flex justify-center ${currentObj.title == "distribution" ? "" :"text-stone-400"} text-[3.5vw] mb-[1vh]`} >분배</div>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              isCurrent={currentObj.title == "distribution" ? true : false}   
              hasMultiple={false}
            />
          </div>
        </div>
        <div id = "use" className={`border flex justify-center py-[1vh] ${currentObj.title == "use" ? "border-blue-400":""}`} onClick={userClick}>
        <div id = "use" className="w-[50%] ">
            <div id = "use" className={`flex justify-center ${currentObj.title == "use" ? "" :"text-stone-400"} text-[3.5vw] mb-[1vh]`} >제품 사용</div>
            <Icon
              defaultIcon={LCAContents.use.default}
              coloredIcon={LCAContents.use.colored}
              isCurrent={currentObj.title == "use" ? true : false}   
              hasMultiple={false}
            />
          </div>
        </div>

        <div id = "endOfLife" className={`border flex justify-center py-[1vh] ${currentObj.title == "endOfLife" ? "border-blue-400":""}`} onClick={userClick}>
        <div id = "endOfLife" className="w-[50%] ">
            <div id = "endOfLife" className={`flex justify-center ${currentObj.title == "endOfLife" ? "" :"text-stone-400"} text-[3.5vw] mb-[1vh]`} >폐기</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={currentObj.title == "endOfLife" ? true : false}   
              hasMultiple={false}
            />
          </div>
        </div>
      </div>
      <div className = "mt-[2vh] border-2 p-[3vw]  h-[40vh] xs:h-[60vh]">
          <video ref = {videoRef} autoPlay loop muted playsInline src = {currentObj.videoPath}></video>
          <div className = "text-[6vw] font-semibold mt-2">{currentObj.kTitle}</div>
          <div className = "text-[3vw] "> {currentObj.content1} {currentObj.content2}</div>
    </div>
    </div>
    
  );
};

export default LCAMobile;
