import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Opacity } from "@material-ui/icons";
import report1 from "../../images/report1.png";
//Grid 형태로 놓고 싶어서 따로 Horizontal TransitionVideoInfo를 만듬
interface HorizontalTransitionVideoInfoType {
  imagePosition: string;
  moveVidFrom: any;
  moveContextFrom: any;
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
    isVideo: boolean;
  };
  isTop:boolean;
  colorType:string
}

const HorizontalTransitionVideoInfo = ({ imagePosition, moveVidFrom, moveContextFrom, contentInfo,isTop ,colorType}: HorizontalTransitionVideoInfoType) => {
  if (imagePosition == "left") {
    // console.log(contentInfo);
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

  const handleImgMouseEnter = (e: any) => {
    controlText.start("open");
  };

  const handleImgMouseLeave = async (e: any) => {
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
      // controlVid.start("vidHidden");
    }
  }, [controlVid, inView]);

  return (
    <div ref={ref} className={`h-[100%] flex ${isTop ? "pb-4":"pt-4"}`}>
      <motion.div animate={controlVid} initial="vidHidden" variants={moveVidFrom} className="flex flex-row">
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
            className={`${colorType == "green" ? "bg-[#EEF7E9]" :"bg-[#FFF7E1]"} p-6 flex-1 rounded-l-lg shadow-xl `}>
            <div className=" flex items-center justify-center h-[100%] text-sm">{contentInfo.content}</div>
          </motion.div>
        ) : (
          ""
        )}

        <div className={`${colorType == "green" ? "bg-[#EEF7E9]" :"bg-[#FFF7E1]" } p-6 h-[100%] flex flex-col justify-center basis-3/5 ${imagePosition == "right" ? "rounded-lg":"rounded-lg"} shadow-xl`}>
          <div className={`text-3xl font-bold m-2 w-[100%] flex ${imagePosition == "right" ? "justify-end" : ""} w-[100%]`}>
            {/* <div className = "w-[50%]"> */}
            {contentInfo.title}
            {/* </div> */}
          </div>
          {contentInfo.isVideo ? (
            <video
              src={contentInfo.videoPath}
              // autoPlay
              loop
              onMouseEnter={handleVideoMouseEnter}
              onMouseLeave={handleVideoMouseLeave}
              className="w-[100%] transition-[width] delay-150 object-cover  rounded-lg shadow-xl mt-4 "
            />
          ) : (
            <img
              src={report1.src}
              className="w-[100%] transition-[width] delay-150 object-cover rounded-lg shadow-xl z-40 mt-4"
              onMouseEnter={handleImgMouseEnter}
              onMouseLeave={handleImgMouseLeave}
            />
          )}
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
            className={`${colorType == "green" ? "bg-[#EEF7E9]" :"bg-[#FFF7E1]"} p-6 h-[100%] flex flex-col justify-end flex-1 rounded-r-lg shadow-xl`}>
            <div className=" flex items-center justify-center h-[100%] text-sm">{contentInfo.content}</div>
          </motion.div>
        ) : (
          ""
        )}
      </motion.div>
    </div>
  );
};

export default HorizontalTransitionVideoInfo;
