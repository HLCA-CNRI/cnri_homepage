import React, { useState, useRef, useEffect, memo } from "react";
import { LCAContents } from "../../functions/LCAContents";
import Icon from "../../components/RAndDCompoenents/Icon";
import lca from "../../images/lca.png";
import VideoContainer from "./VideoContainer/VideoContainer";

const LCA = () => {
  const [userClicked, setUserClicked] = useState(false);
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
        currentIdx == values.length - 2 ? (currentIdx = 0) : (currentIdx += 1);
      }, 1000);
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
    if (LCAContents[val] != undefined) {
      setCurrentObj(LCAContents[val]);
    }
    if (videoRef && videoRef.current) {
      console.log(videoRef);
      videoRef.current.play();
    }
  };

  const MouseOut = (e: any) => {
    setUserClicked(false);
    setUserInteracted(false);
    const videos = document.getElementsByClassName("videos");
    Array.from(videos).forEach((video: any) => {
      video.currentTime = 0;
      video.pause();
    });
  };

  const clickIcon = (e: any) => {
    setUserInteracted(true);
    if (videoRef && videoRef.current) {
      console.log(videoRef.current);
      console.log("통과");
      videoRef.current.play();
    }
  };

  const mouseEnterVid = (e: any) => {
    setUserInteracted(true);
    if (videoRef && videoRef.current) {
      console.log(videoRef.current);
      console.log("통과");
      videoRef.current.play();
    }
  };

  const mouseLeaveVid = (e: any) => {
    // console.log("leave")
    setUserInteracted(false);
    if (videoRef && videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="w-[100%] p-6 bg-[#DEEBF7]">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="grid grid-cols-10">
            <div className="col-span-9 ">
              {/* <video ref={videoRef} src={currentObj.videoPath} loop className={`pt-4`} /> */}
              <div
                onMouseEnter={mouseEnterVid}
                onClick={clickIcon}
                onMouseLeave={mouseLeaveVid}
                className = ""
              >
                <div className = "text-4xl mb-4">{currentObj.kTitle}</div>
                <div >
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
                
              </div>

              <div className="pb-4 h-[10%] text-lg mt-4">
                <div>{currentObj.content1}</div>
                <div>{currentObj.content2}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>
          <div
            id="test"
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
          >
            <div  className = "flex w-[100%] justify-center">원료 채굴</div>
            <Icon
              defaultIcon={LCAContents.resources.default}
              coloredIcon={LCAContents.resources.colored}
              isCurrent={currentObj.title == "resources" ? true : false}
              hasMultiple = {false}
            />
          </div>
          <div className="col-span-2"></div>

          <div
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
          >
            <div  className = "flex w-[100%] justify-center">폐기</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={currentObj.title == "endOfLife" ? true : false}
              hasMultiple = {false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
          >
            <div  className = "flex w-[100%] justify-center">원료 가공</div>
            <Icon
              defaultIcon={LCAContents.processing.default}
              coloredIcon={LCAContents.processing.colored}
              isCurrent={currentObj.title == "processing" ? true : false}
              hasMultiple = {false}
            />
          </div>

          <div className=" col-span-2"></div>

          <img src={lca.src} className = ""></img>

          {/* <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <div>Hello</div>
          </div> */}

          <div className=" col-span-2"></div>

          <div
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
          >
            <div  className = "flex w-[100%] justify-center">제품 사용</div>
            <Icon
              defaultIcon={LCAContents.use.default}
              coloredIcon={LCAContents.use.colored}
              isCurrent={currentObj.title == "use" ? true : false}
              hasMultiple = {false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
          >
            <div  className = "flex w-[100%] justify-center">제품 제조</div>
            {" "}
            <Icon
              defaultIcon={LCAContents.manufacturing.default}
              coloredIcon={LCAContents.manufacturing.colored}
              isCurrent={currentObj.title == "manufacturing" ? true : false}
              hasMultiple = {false}
            />
          </div>

          <div className="col-span-2"></div>

          <div
            onMouseOver={MouseOver}
            onMouseLeave={MouseOut}
            onClick={clickIcon}
          >
            <div className = "flex w-[100%] justify-center">분배</div>
            {" "}
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              isCurrent={currentObj.title == "distribution" ? true : false}
              hasMultiple = {false}
            />
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(LCA);
