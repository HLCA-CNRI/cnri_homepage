import SlideShow from "../../components/SlideShow";
import React, { useState, useRef, useEffect } from "react";
import LCA from "../../components/RAndDCompoenents/LCA";
import Partnership from "../../components/RAndDCompoenents/Partnership";
import Carousel from "../../components/Carousel"
import cherin from "../../images/members/cherin.jpg"
import prof from "../../images/members/prof.jpg"



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
      <div className="w-[100%] ">
        <div className="text-5xl mb-10">What is LCA?</div>
        <LCA />
        <div className="grid grid-cols-2"></div>
      </div>
      <div className="w-[100%] mt-20">
        <div className="text-5xl mb-10">Our Work and Partnership</div>
        <Partnership />
      </div>
  
    </div>
  );
};

export default Randd;
