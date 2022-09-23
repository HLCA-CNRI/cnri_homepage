import {useState, useRef, useEffect} from "react";
import LCAContents, {LCAContentsType} from "../../functions/LCAContents";
import Icon from "./Icon";
import LCAIcon from "./LCAIcon";

function LCAMobile() {
  const [currentObj, setCurrentObj] = useState(LCAContents.resources); // 현제  옵젝트/아이콘
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [curContentTitle, setCurContentTitle] = useState("");
  const [curContentText, setCurContentText] = useState("");
  const contents = useRef([
    LCAContents.resources,
    LCAContents.processing,
    LCAContents.manufacturing,
    LCAContents.distribution,
    LCAContents.use,
    LCAContents.endOfLife,
  ]);

  useEffect(() => {
    if (curContentTitle) {
      const content: LCAContentsType = contents.current.filter(
        (c) => c.title === curContentTitle
      )[0];
      setCurContentText(`${content?.content1} ${content?.content2}`);
    }
  }, [curContentTitle]);
  // ICON:사용자 아이콘 클릭 이벤트 핸들러 --> currentObj가 현제 오브젝트로 지정 + currentObj 비디오 play
  const userClick = (e: any) => {
    const val = e.target.id;
    if (LCAContents[val] !== undefined) {
      setCurrentObj(LCAContents[val]);
    }
  };

  const iconClick = (e: any) => {
    const {id} = e.currentTarget;
    setCurContentTitle(!id || id === curContentTitle ? "" : id);
  };
  return (
    <div>
      <div className="flex justify-evenly my-[1vh]">
        {contents.current.map(
          (c, idx) =>
            idx < 3 && (
              <div role="button" className="m-auto" onClick={iconClick} id={c.title} key={c.title}>
                <LCAIcon content={c} isOpened={c.title === curContentTitle} />
              </div>
            )
        )}
      </div>
      {curContentText &&
        (curContentTitle === contents.current[0].title ||
          curContentTitle === contents.current[1].title ||
          curContentTitle === contents.current[2].title) && (
          <div className=" text-[3vw] text-left leading-[3vh] px-[6vw] py-[3vh]">
            {curContentText}
          </div>
        )}
      <div className="flex  flex-row-reverse justify-evenly my-[0.3vh]">
        {contents.current.map(
          (c, idx) =>
            idx >= 3 && (
              <div role="button" className="m-auto" onClick={iconClick} id={c.title} key={c.title}>
                <LCAIcon content={c} isOpened={c.title === curContentTitle} />
              </div>
            )
        )}
      </div>
      {curContentText &&
        (curContentTitle === contents.current[3].title ||
          curContentTitle === contents.current[4].title ||
          curContentTitle === contents.current[5].title) && (
          <div className=" text-[3vw] text-left leading-[3vh] px-[6vw] py-[3vh]">
            {curContentText}
          </div>
        )}

      {/* 위에 아이콘 부분 -->3X2 grid 구성 */}
      {/* <div className="border grid grid-cols-3 "> */}
      {/* 원료 채굴 */}
      {/* <div
          role="button"
          id="resources"
          className={`border flex justify-center py-[1vh] ${
            currentObj.title === "resources" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="resources" className="w-[50%] ">
            <div
              id="resources"
              className={`flex justify-center ${
                currentObj.title === "resources" ? "" : "text-stone-400"
              } text-[3.5vw] mb-[1vh]`}>
              원료 채굴
            </div>
            <div>
              <Icon
                defaultIcon={LCAContents.resources.default}
                coloredIcon={LCAContents.resources.colored}
                isCurrent={currentObj.title === "resources"}
              />
            </div>
          </div>
        </div> */}
      {/* 원료 가공 */}
      {/* <div
          role="button"
          id="processing"
          className={`border flex justify-center py-[1vh] ${
            currentObj.title === "processing" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="processing" className="w-[50%] ">
            <div
              id="processing"
              className={`flex justify-center ${
                currentObj.title === "processing" ? "" : "text-stone-400"
              } text-[3.5vw] mb-[1vh]`}>
              원료 가공
            </div>
            <Icon
              defaultIcon={LCAContents.processing.default}
              coloredIcon={LCAContents.processing.colored}
              isCurrent={currentObj.title === "processing"}
            />
          </div>
        </div> */}
      {/* 제품 제조  */}
      {/* <div
          role="button"
          id="manufacturing"
          className={`border flex justify-center py-[1vh] ${
            currentObj.title === "manufacturing" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="manufacturing" className="w-[50%] ">
            <div
              id="manufacturing"
              className={`flex justify-center ${
                currentObj.title === "manufacturing" ? "" : "text-stone-400"
              } text-[3.5vw] mb-[1vh]`}>
              제품 제조
            </div>
            <Icon
              defaultIcon={LCAContents.manufacturing.default}
              coloredIcon={LCAContents.manufacturing.colored}
              isCurrent={currentObj.title === "manufacturing"}
            />
          </div>
        </div> */}
      {/* 분배  */}
      {/* <div
          role="button"
          id="distribution"
          className={`border flex justify-center py-[1vh] ${
            currentObj.title === "distribution" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="distribution" className="w-[50%] ">
            <div
              id="distribution"
              className={`flex justify-center ${
                currentObj.title === "distribution" ? "" : "text-stone-400"
              } text-[3.5vw] mb-[1vh]`}>
              분배
            </div>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              isCurrent={currentObj.title === "distribution"}
            />
          </div>
        </div> */}
      {/* 제품 사용  */}
      {/* <div
          role="button"
          id="use"
          className={`border flex justify-center py-[1vh] ${
            currentObj.title === "use" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="use" className="w-[50%] ">
            <div
              id="use"
              className={`flex justify-center ${
                currentObj.title === "use" ? "" : "text-stone-400"
              } text-[3.5vw] mb-[1vh]`}>
              제품 사용
            </div>
            <Icon
              defaultIcon={LCAContents.use.default}
              coloredIcon={LCAContents.use.colored}
              isCurrent={currentObj.title === "use"}
            />
          </div>
        </div> */}
      {/* 폐기  */}
      {/* <div
          role="button"
          id="endOfLife"
          className={`border flex justify-center py-[1vh] ${
            currentObj.title === "endOfLife" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="endOfLife" className="w-[50%] ">
            <div
              id="endOfLife"
              className={`flex justify-center ${
                currentObj.title === "endOfLife" ? "" : "text-stone-400"
              } text-[3.5vw] mb-[1vh]`}>
              폐기
            </div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={currentObj.title === "endOfLife"}
            />
          </div>
        </div>
      </div> */}
      {/* 밑에 내용 부분 -->영상 + 내용 */}
      {/* <div className="mt-[2vh] border-2 p-[20px] ">
        <video ref={videoRef} autoPlay loop muted playsInline src={currentObj.videoPath} />
        <div className="text-[5.5vw]  font-semibold pb-[1vh] pt-[2vh]">{currentObj.kTitle}</div>
        <div className="text-[3vw] ">
          {" "}
          {currentObj.content1} {currentObj.content2}
        </div>
      </div> */}
    </div>
  );
}

export default LCAMobile;
