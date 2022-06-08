import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface VerticalTansitionVideoInfoType  {
  imagePosition:string
  moveFrom:any
  contentInfo:{
    title:string, 
    content:string, 
    videoPath:string
  }

}

const DescriptionVariant = {
  open: { opacity: 1, transition: { duration: 0.6 } },
  close: { opacity: 0.4 },
};

const VerticalTansitionVideoInfo = ({imagePosition,moveFrom,contentInfo}:VerticalTansitionVideoInfoType) => {
  const handleVideoMouseEnter = (e: any) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
    controlText.start("open");
  };

  const handleVideoMouseLeave = (e: any) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
    controlText.start("close");
  };
  const controlVid = useAnimation();
  const controlText = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controlVid.start("visible");
    } else {
      controlVid.start("hidden");
    }
  }, [controlVid, inView]);

  return (
    <div ref={ref}>
      <div className="text-3xl font-bold m-2 w-[100%]">{contentInfo.title}</div>
      <motion.div
        animate={controlVid}
        initial="hidden"
        variants={moveFrom}
      >
        <div>
          {/* <div onMouseEnter={() => controlText.start("open") } onMouseLeave={() => controlText.start("close")}> */}
          <video
            src={require("../../video/measure2.mp4")}
            // autoPlay
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-fill  hover:scale-x-105 duration-700 rounded-lg shadow-xl"
          />
        </div>

        <motion.div
          animate={controlText}
          initial="close"
          variants={DescriptionVariant}
          className = "mt-4"

        >
         {contentInfo.content}
        </motion.div> 
      </motion.div>
    </div>
  );
};

export default VerticalTansitionVideoInfo;
