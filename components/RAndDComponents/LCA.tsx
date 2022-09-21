import React, {useState, useRef, useEffect, memo} from "react";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import LCAContents from "../../functions/LCAContents";
import {SectionSubTitleStyle} from "../../styles/commonStyles";
import Arrow from "./Arrow";
import Icon from "./Icon";
import LCACard from "./LCACard";
import VideoContainer from "./VideoContainer/VideoContainer";

function LCA() {
  const [userInteracted, setUserInteracted] = useState(false); // 유저가 비디오에 클릭을 하거나, 아이콘에 호버를 했는지 확인. 유저한테 인터랙션이 이뤄졌는지. --> 이뤄졌다면 setUserInteracted(true)
  const [currentObj, setCurrentObj] = useState(LCAContents.resources); // 현제 옵젝트/아이콘
  const videoRef = useRef<null | HTMLVideoElement>();
  // userInteracted state 감시, 유저 인터렉션이 없으면 2초마다 current옵젝트가 바뀜,그리고 비디오는 pause되있는 상태.
  useEffect(() => {
    if (!userInteracted) {
      let currentIdx = 0;
      const interval = setInterval(() => {
        const values = [
          LCAContents.resources,
          LCAContents.processing,
          LCAContents.manufacturing,
          LCAContents.distribution,
          LCAContents.use,
          LCAContents.endOfLife,
          LCAContents.resources,
        ];
        setCurrentObj(values[currentIdx + 1]);
        currentIdx === values.length - 2 ? (currentIdx = 0) : (currentIdx += 1);
      }, 3000);
      return () => clearInterval(interval);
    }
    if (videoRef && videoRef.current) videoRef.current.pause();
  }, [userInteracted]);

  // ICON + VIDEO:사용자 마우스 앤터 이벤트 핸들러 --> userInteracted는 true + currentObj가 현제 오브젝트로 지정 + currentObj 비디오 play
  const MouseOver = (e: any) => {
    setUserInteracted(true);
    const val = e.target.id;
    if (LCAContents[val] !== undefined) {
      setCurrentObj(LCAContents[val]);
    }
    // if (videoRef && videoRef.current) {
    //   videoRef.current.play();
    // }
  };

  // ICON + VIDEO:사용자 마우스 아웃 이벤트 핸들러 --> userInteracted는 false + currentObj 비디오 pause
  const MouseOut = () => {
    setUserInteracted(false);
    // const videos = document.getElementsByClassName("videos");
    // Array.from(videos).forEach((video: any) => {
    //   // video.currentTime = 0;
    //   // video.pause();
    // });
  };

  // VIDEO:사용자 비디오 클릭 이벤트 핸들러 --> userInteracted는 true + currentObj 비디오 play
  const clickVid = () => {
    setUserInteracted(true);
    // if (videoRef && videoRef.current) {
    //   videoRef.current.play();
    // }
  };

  // VIDEO:사용자 마우스 앤터 이벤트 핸들러 --> userInteracted는 true + currentObj가 현제 오브젝트로 지정 + currentObj 비디오 play
  const mouseEnterVid = () => {
    setUserInteracted(true);
    // if (videoRef && videoRef.current) {
    //   videoRef.current.play();
    // }
  };

  // VIDEO:사용자 마우스 앤터 이벤트 핸들러 --> userInteracted는 false + currentObj 비디오 pause
  const mouseLeaveVid = () => {
    setUserInteracted(false);
    // if (videoRef && videoRef.current) {
    //   videoRef.current.pause();
    // }
  };

  return (
    <div className="w-full">
      {/* new LCA */}
      <div className="flex items-center justify-around">
        <LCACard content={LCAContents.resources} />
        <Arrow direction={ArrowDirection.RIGHT} />
        <LCACard content={LCAContents.processing} />
        <Arrow direction={ArrowDirection.RIGHT} />
        <LCACard content={LCAContents.manufacturing} />
      </div>
      <div className="flex justify-around w-full my-[10px]  ">
        <Arrow direction={ArrowDirection.UP} />
        <div className="w-[200px]">
          <Arrow direction={ArrowDirection.NONE} />
        </div>
        <Arrow direction={ArrowDirection.DOWN} />
      </div>
      <div className="flex items-center justify-around">
        <LCACard content={LCAContents.distribution} />
        <Arrow direction={ArrowDirection.LEFT} />
        <LCACard content={LCAContents.use} />
        <Arrow direction={ArrowDirection.LEFT} />
        <LCACard content={LCAContents.endOfLife} />
      </div>
      {/* old one */}
      {/* <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="grid grid-cols-10 mr-12"> */}
      {/* 왼쪽 내용 부분 */}
      {/* <div className="col-span-9 h-200"> */}
      {/* TODO: 버그 있음: mouse enter도 하고 클릭도 해야 비디오 재생이 가능함. mouse enter 지우면 클릭 두번해야함. */}
      {/* FIXME : 아마 따로 컴퍼넌트로 빠져서 그렇다고 추정됨 FIX */}
      {/* <div
                role="button"
                onMouseEnter={MouseOver}
                onClick={clickVid}
                onMouseLeave={MouseOut}
                className=" h-50"> */}
      {/* 제목 */}
      {/* <SectionSubTitleStyle className="text-4xl mb-[2vh] lg:text-[2.5vw] ">
                  {currentObj.kTitle}
                </SectionSubTitleStyle> */}
      {/* 비디오 VideoContainer 통해서 currentObj 보여주고 나머지 hidden으로 해놓음  */}
      {/* <VideoContainer
                  videoRef={videoRef}
                  currentContent={currentObj.title}
                  videoPaths={[
                    LCAContents.resources.videoPath,
                    LCAContents.processing.videoPath,
                    LCAContents.manufacturing.videoPath,
                    LCAContents.distribution.videoPath,
                    LCAContents.use.videoPath,
                    LCAContents.endOfLife.videoPath,
                    LCAContents.resources.videoPath,
                  ]}
                />
              </div> */}
      {/* 내용 */}
      {/* <div className="pb-4 text-md xl:text-[19px] 2xl:text-[23px] mt-4 h-32 ">
                <div>{currentObj.content1}</div>
                <div>{currentObj.content2}</div>
              </div>
            </div>
          </div>
        </div> */}
      {/* 오른쪽 아이콘 부분 -->5X5 구성 */}
      {/* <div className="grid grid-cols-5 col-span-2">
          <div className="col-span-2" /> */}
      {/* 원료 채굴 icon */}
      {/* <div
            role="button"
            id="test"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            className="relative">
            <div className="absolute  w-[100%] bottom-[-50%]">
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "resources" ? "" : "text-stone-400"
                } `}>
                원료 채굴
              </div> */}
      {/* <Icon
                defaultIcon={LCAContents.resources.default}
                coloredIcon={LCAContents.resources.colored}
                isCurrent={currentObj.title === "resources"}
              />
            </div>
          </div>
          <div className="col-span-2" /> */}
      {/* 폐기 icon */}
      {/* <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
            <div className="absolute w-[100%] bottom-[-20%] left-[50%]">
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "endOfLife" ? "" : "text-stone-400"
                } `}>
                폐기
              </div>
              <Icon
                defaultIcon={LCAContents.endOfLife.default}
                coloredIcon={LCAContents.endOfLife.colored}
                isCurrent={currentObj.title === "endOfLife"}
              />
            </div>
          </div>

          <div className=" col-span-3" /> */}
      {/* 원료 가공 icon */}
      {/* <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
            <div className="absolute w-[100%] bottom-[-20%] right-[50%]">
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "processing" ? "" : "text-stone-400"
                } `}>
                원료 가공
              </div>
              <Icon
                defaultIcon={LCAContents.processing.default}
                coloredIcon={LCAContents.processing.colored}
                isCurrent={currentObj.title === "processing"}
              />
            </div>
          </div> */}

      {/* <div className=" col-span-2 " /> */}
      {/* MAIN LCA */}
      {/* <div className="relative ">
            <div className="absolute w-[150%] -top-[30%] -left-[30%]">
              <img alt="lcaImg" src="/images/lca.png" />
            </div>
          </div>

          <div className=" col-span-2" /> */}
      {/* 제품 사용 icon */}
      {/* <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative ">
            <div className="absolute w-[100%] bottom-[20%] left-[50%]">
              <Icon
                defaultIcon={LCAContents.use.default}
                coloredIcon={LCAContents.use.colored}
                isCurrent={currentObj.title === "use"}
              />
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "use" ? "" : "text-stone-400"
                } `}>
                제품 사용
              </div>
            </div>
          </div>

          <div className=" col-span-3" /> */}
      {/* 제품 제조 icon */}
      {/* <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
            <div className="absolute w-[100%] bottom-[20%] right-[50%]">
              <Icon
                defaultIcon={LCAContents.manufacturing.default}
                coloredIcon={LCAContents.manufacturing.colored}
                isCurrent={currentObj.title === "manufacturing"}
              />
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "manufacturing" ? "" : "text-stone-400"
                } `}>
                제품 제조
              </div>{" "}
            </div>
          </div>

          <div className="col-span-2" /> */}

      {/* 분배 icon */}
      {/* <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
            <div className="absolute  w-[100%] bottom-[50%] ">
              <Icon
                defaultIcon={LCAContents.distribution.default}
                coloredIcon={LCAContents.distribution.colored}
                isCurrent={currentObj.title === "distribution"}
              />
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "distribution" ? "" : "text-stone-400"
                } `}>
                분배
              </div>{" "}
            </div>
          </div>

          <div className="col-span-2" />
        </div>
      </div> */}
    </div>
  );
}

export default memo(LCA);
