import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//Grid 형태로 놓고 싶어서 따로 Horizontal TransitionVideoInfo를 만듬
interface HorizontalTransitionVideoInfoType {
  imagePosition: string;
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

const HorizontalTransitionVideoInfo = ({
  imagePosition,moveFrom,contentInfo
}: HorizontalTransitionVideoInfoType) => {
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
      <div
        className={`text-3xl font-bold m-2 w-[100%] flex ${
          imagePosition == "right" ? "justify-end" : ""
        } w-[100%]`}
      >
          {/* <div className = "w-[50%]"> */}
          {contentInfo.title}
          {/* </div> */}
       
      </div>
      <motion.div
        animate={controlVid}
        initial="hidden"
        variants={
            moveFrom
        }
        className="grid  grid-cols-2 gap-4"
      >
        {imagePosition == "right" ? (
          <motion.div
            animate={controlText}
            initial="close"
            variants={DescriptionVariant}
          >
           {contentInfo.content}
          </motion.div>
        ) : (
          ""
        )}

        <div>
          <video
            src={require("../../video/measure1.mp4")}
            // autoPlay
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-fill  hover:scale-x-105 duration-700 rounded-lg shadow-xl"
          />
        </div>

        {imagePosition == "left" ? (
          <motion.div
            animate={controlText}
            initial="close"
            variants={DescriptionVariant}
          >
           {contentInfo.content}
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default HorizontalTransitionVideoInfo;
