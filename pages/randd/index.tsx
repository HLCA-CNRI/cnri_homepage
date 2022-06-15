import SlideShow from "../../components/SlideShow";
import React, { useState, useRef, useEffect } from "react";
import LCA from "../../components/RAndDCompoenents/LCA";
import Partnership from "../../components/RAndDCompoenents/Partnership";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import rAnddIntro from "../../images/rAnddIntro.jpg"

const TansitionVidLToR = {
  visible: { z: 30, opacity: 1, x: 0, transition:  { duration: 0.8 }  },
  hidden: { opacity: 0, x: -1000 },
};

const TansitionVidRToL = {
  visible: { opacity: 1, x: 0, transition:  { duration: 0.8 } },
  hidden: { opacity: 0, x: 1000 },
};


const Randd = () => {
  const controlText = useAnimation()
  const controlVid = useAnimation()
  const [ref, inView] = useInView();
  const [video, setVideo] = useState(`./video/measure3.mp4`);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef && videoRef.current) {
      console.log(videoRef.current.src);
    }
  }, []);

  useEffect(() => {
    if (inView) {
      controlText.start("visible")
      controlVid.start("visible");
    }else{

    }
  }, [controlVid,controlText, inView]);

  return (
    <div className="m-4 mx-16 ">
       <div className="relative mb-20">
            <motion.div ref = {ref} className = "h-[80vh]" animate = {controlVid} initial = "hidden"  variants = {TansitionVidLToR}>
            <img
              src={rAnddIntro.src}
              className="object-cover h-full w-full rounded-lg shadow-lg"
            ></img>
            </motion.div>
            <motion.div ref = {ref} animate = {controlText}  initial = "hidden"  variants = {TansitionVidRToL} className="absolute inset-0 flex justify-center items-center z-10 text-9xl text-zinc-600">
            <div >
              R&D
            </div>
            </motion.div>
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
