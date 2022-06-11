import React, { useState, useRef, useEffect } from "react";
import Prac from "../../components/Pac";
import { LCAContents } from "../../functions/LCAContents";
import Icon from "../../components/RAndDCompoenents/Icon";

const LCA = () => {
  const [video, setVideo] = useState(`./video/measure3.mp4`);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef && videoRef.current) {
      console.log(videoRef.current.src);
    }
  }, []);

  const MouseOver = (e: any) => {
    console.log("Hello");
    const val = e.target.id;
    if (LCAContents[val] != undefined) {
      console.log("Here", LCAContents[val].videoPath);
      setVideo(LCAContents[val].videoPath);
    }
  };
  return (
    <div className="w-[100%] bg-slate-400">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <video ref={videoRef} src={video} autoPlay loop />
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>
          {/* <Prac /> */}
          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.resources.default}
              coloredIcon={LCAContents.resources.colored}
              initial={false}
            />
          </div>
          <div className="col-span-2"></div>

          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.processing.default}
              coloredIcon={LCAContents.processing.colored}
              initial={false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.manufacturing.default}
              coloredIcon={LCAContents.manufacturing.colored}
              initial={false}
            />
          </div>

          <div className=" col-span-2"></div>

          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              initial={false}
            />
          </div>

          <div className=" col-span-2"></div>

          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              initial={false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.use.default}
              coloredIcon={LCAContents.use.colored}
              initial={false}
            />
          </div>

          <div className="col-span-2"></div>

          <div onMouseOver={MouseOver}>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              initial={false}
            />
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default LCA;
