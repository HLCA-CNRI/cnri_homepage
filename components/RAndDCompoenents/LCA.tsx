import React, { useState, useRef, useEffect } from "react";

import { LCAContents } from "../../functions/LCAContents";
import Icon from "../../components/RAndDCompoenents/Icon";

const LCA = () => {
  const [userInteracted, setUserInteracted] = useState(true)
  const [currentObj, setCurrentObj] = useState(LCAContents.resources);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  useEffect(() => {
    if(userInteracted){
        let currentIdx = 0
        const interval = setInterval(async()=>{
            const values = [LCAContents.resources,LCAContents.processing,LCAContents.manufacturing,LCAContents.distribution,LCAContents.use,LCAContents.endOfLife,LCAContents.resources]
            await setCurrentObj(values[currentIdx + 1])
            currentIdx == (values.length -2) ? currentIdx = 0 : currentIdx += 1
        },5000)
          return () => clearInterval(interval);
    }
  }, [userInteracted]);

  const MouseOver = (e: any) => {
    setUserInteracted(false)
    const val = e.target.id;
    if (LCAContents[val] != undefined) {
      setCurrentObj(LCAContents[val]);
    }
  };

  const MouseOut = (e:any) =>{
    setUserInteracted(true)
  }

  const clickIcon = (e:any) =>{
      if(videoRef && videoRef.current){
        videoRef.current.play()
      }
  }

  return (
    <div className="w-[100%] bg-slate-400">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <video ref={videoRef} src={currentObj.videoPath}  loop  className = "px-4 pt-4"/>
          <div className = "text-md px-4 pb-4">
              <div>{currentObj.content1}</div>
              <div>{currentObj.content2}</div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>
          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.resources.default}
              coloredIcon={LCAContents.resources.colored}
              isCurrent={currentObj.title == "resources" ? true : false}
            />
          </div>
          <div className="col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.processing.default}
              coloredIcon={LCAContents.processing.colored}
              isCurrent={currentObj.title == "processing" ? true : false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.manufacturing.default}
              coloredIcon={LCAContents.manufacturing.colored}
              isCurrent={currentObj.title == "manufacturing" ? true : false}
            />
          </div>

          <div className=" col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              isCurrent={currentObj.title == "distribution" ? true : false}
            />
          </div>

          <div className=" col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              isCurrent={currentObj.title == "distribution" ? true : false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>            <Icon
              defaultIcon={LCAContents.use.default}
              coloredIcon={LCAContents.use.colored}
              isCurrent={currentObj.title == "use" ? true : false}
            />
          </div>

          <div className="col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={currentObj.title == "endOfLife" ? true : false}
            />
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LCA;
