import React, {useState, useRef, useEffect, memo} from "react";
import LCAContents from "../../functions/LCAContents";
import Icon from "./Icon";
import VideoContainer from "./VideoContainer/VideoContainer";

function LCA() {
  const [userInteracted, setUserInteracted] = useState(false);
  const [currentObj, setCurrentObj] = useState(LCAContents.resources);
  const videoRef = useRef<null | HTMLVideoElement>();
  useEffect(() => {
    if (!userInteracted) {
      console.log("userInteracted");
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
      }, 2000);
      return () => clearInterval(interval);
    }
    if (videoRef && videoRef.current) videoRef.current.pause();
  }, [userInteracted]);

  // useEffect(()=>{
  //   console.log(userClicked)
  // },[userClicked])

  const MouseOver = (e: any) => {
    setUserInteracted(true);
    const val = e.target.id;

    if (LCAContents[val] !== undefined) {
      setCurrentObj(LCAContents[val]);
    }
    if (videoRef && videoRef.current) {
      console.log(videoRef);
      videoRef.current.play();
    }
  };

  const MouseOut = () => {
    setUserInteracted(false);
    const videos = document.getElementsByClassName("videos");
    Array.from(videos).forEach((video: any) => {
      video.currentTime = 0;
      video.pause();
    });
  };

  const clickIcon = () => {
    setUserInteracted(true);
    if (videoRef && videoRef.current) {
      console.log(videoRef.current);
      console.log("통과");
      videoRef.current.play();
    }
  };

  const mouseEnterVid = () => {
    setUserInteracted(true);
    if (videoRef && videoRef.current) {
      console.log(videoRef.current);
      console.log("통과");
      videoRef.current.play();
    }
  };

  const mouseLeaveVid = () => {
    // console.log("leave")
    setUserInteracted(false);
    if (videoRef && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="w-[100%]">
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="grid grid-cols-10 mr-12">
            <div className="col-span-9 h-200">
              {/* <video ref={videoRef} src={currentObj.videoPath} loop className={`pt-4`} /> */}
              <div
                role="button"
                onMouseEnter={mouseEnterVid}
                onClick={clickIcon}
                onFocus={() => 0}
                onMouseLeave={mouseLeaveVid}
                className=" h-50">
                <div className="text-4xl mb-[2vh] lg:text-[2.5vw] ">{currentObj.kTitle}</div>

                <VideoContainer
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
              </div>
              <div className="pb-4 text-md xl:text-[1.2vw] mt-4 h-32 ">
                <div>{currentObj.content1}</div>
                <div>{currentObj.content2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 col-span-2">
          <div className="col-span-2" />
          <div
            role="button"
            id="test"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
            onFocus={() => 0}
            className="relative">
            <div className="absolute  w-[100%] bottom-[-50%]">
              <div
                className={`flex w-[100%] justify-center ${
                  currentObj.title === "resources" ? "" : "text-stone-400"
                } `}>
                원료 채굴
              </div>
              <Icon
                defaultIcon={LCAContents.resources.default}
                coloredIcon={LCAContents.resources.colored}
                isCurrent={currentObj.title === "resources"}
              />
            </div>
          </div>
          <div className="col-span-2" />

          <div
            role="button"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
            onFocus={() => 0}
            className="relative">
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

          <div className=" col-span-3" />

          <div
            role="button"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
            onFocus={() => 0}
            className="relative">
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
          </div>

          <div className=" col-span-2 " />
          <div className="relative ">
            <div className="absolute w-[150%] -top-[30%] -left-[30%]">
              <img alt="lcaImg" src="/images/lca.png" />
            </div>
          </div>

          {/* <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <div>Hello</div>
          </div> */}

          <div className=" col-span-2" />

          <div
            role="button"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
            onFocus={() => 0}
            className="relative ">
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

          <div className=" col-span-3" />

          <div
            role="button"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
            onFocus={() => 0}
            className="relative">
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

          <div className="col-span-2" />

          <div
            role="button"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
            onFocus={() => 0}
            className="relative">
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
      </div>
    </div>
  );
}

export default memo(LCA);
