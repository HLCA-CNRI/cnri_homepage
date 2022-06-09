import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Opacity } from "@material-ui/icons";
//Grid 형태로 놓고 싶어서 따로 Horizontal TransitionVideoInfo를 만듬
interface HorizontalTransitionVideoInfoType {
  imagePosition: string;
  moveVidFrom: any;
  moveContextFrom: any;
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
  };
}

const HorizontalTransitionVideoInfo = ({
  imagePosition,
  moveVidFrom,
  moveContextFrom,
  contentInfo,
}: HorizontalTransitionVideoInfoType) => {
  if (imagePosition == "left") {
    console.log(contentInfo);
  }
  const handleVideoMouseEnter = (e: any) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();

    controlText.start("open");
  };

  const handleVideoMouseLeave = async (e: any) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
    await controlText.start("close");
    await controlText.start("close2");
  };
  const controlVid = useAnimation();
  const controlText = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controlVid.start("vidVisible");
    } else {
      controlVid.start("vidHidden");
    }
  }, [controlVid, inView]);

  return (
    <div ref={ref} className = "mt-4">
      <motion.div
        animate={controlVid}
        initial="vidHidden"
        variants={moveVidFrom}
        className="grid  grid-cols-2 "
      >
        {imagePosition == "right" ? (
          <motion.div
            animate={controlText}
            initial="initial"
            variants={moveContextFrom}
            onMouseEnter={() => controlText.start("open")}
            onMouseLeave={async () => {
              await controlText.start("close");
              await controlText.start("close2");
            }}
            className = "bg-slate-400 p-6"
          >
            {contentInfo.content}
          </motion.div>
        ) : (
          ""
        )}

        <div className = "bg-slate-400 p-6">
          <div
            className={`text-3xl font-bold m-2 w-[100%] flex ${
              imagePosition == "right" ? "justify-end" : ""
            } w-[100%]`}
          >
            {/* <div className = "w-[50%]"> */}
            {contentInfo.title}
            {/* </div> */}
          </div>
          <video
            src={contentInfo.videoPath}
            // autoPlay
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-fill  rounded-lg shadow-xl z-40 "
          />
        </div>

        {imagePosition == "left" ? (
          <motion.div
            animate={controlText}
            initial="initial"
            variants={moveContextFrom}
            onMouseEnter={() => controlText.start("open")}
            onMouseLeave={async () => {
              await controlText.start("close");
              await controlText.start("close2");
            }}
            className = "bg-slate-400 p-6"
            
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
