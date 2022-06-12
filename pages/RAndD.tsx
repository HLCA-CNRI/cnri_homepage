import SlideShow from "../components/SlideShow";
import React, { useState, useRef, useEffect } from "react";

import LCA from "../components/RAndDCompoenents/LCA";
import Partnership from "../components/RAndDCompoenents/Partnership";

const Randd = () => {
  const [video, setVideo] = useState(`./video/measure3.mp4`);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef && videoRef.current) {
      console.log(videoRef.current.src);
    }
  }, []);

  return (
    <div className="m-4 border-2 mx-16 ">
      <div className="w-[100%] bg-slate-200">
        <SlideShow />
      </div>
      <div className="w-[100%] bg-slate-300 p-4">
        <div className="text-5xl">What is LCA?</div>
        <LCA />
        <div className="grid grid-cols-2"></div>
      </div>
      <div className="w-[100%] bg-slate-400 p-4">
        <div className="text-5xl">Our Work and Partnership</div>
        <Partnership/>
      </div>
    </div>
  );
};

export default Randd;
