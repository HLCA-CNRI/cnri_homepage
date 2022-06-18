import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { memo, useEffect } from "react";
import classNames from "classnames";

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
  isTop: boolean;
  colorType: string;
  basisVal: string;
}

const HorizontalTransitionVideoInfo = ({
  imagePosition,
  moveVidFrom,
  moveContextFrom,
  contentInfo,
  isTop,
  colorType,
  basisVal,
}: HorizontalTransitionVideoInfoType) => {
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
    <motion.div
      ref={ref}
      animate={controlVid}
      initial="vidHidden"
      variants={moveVidFrom}
      className={`h-[100%] flex flex-row drop-shadow-lg ${isTop ? "pb-[3vh]" : "pt-[3vh]"}`}>
      {" "}
      <motion.div
        animate={controlText}
        initial="initial"
        variants={moveContextFrom}
        style={{ width: `${basisVal}` }}
        onMouseEnter={() => controlText.start("open")}
        onMouseLeave={async () => {
          await controlText.start("close");
          await controlText.start("close2");
        }}
        className={`${colorType == "green" ? "bg-[#EEF7E9]" : "bg-[#FFF7E1]"} p-[2vw]  ${imagePosition === "right" ? "order-first" : "order-last"} -z-50`}>
        <p className={classNames("flex items-center justify-center h-[100%] text-[1vw] py-[3vh]")}>{contentInfo.content}</p>
      </motion.div>
      <div className={`${colorType == "green" ? "bg-[#EEF7E9]" : "bg-[#FFF7E1]"} p-[2vw] h-[100%] flex flex-col justify-center`}>
        <div className={`text-[1.8vw] font-bold  w-[100%] flex ${imagePosition == "right" ? "justify-end" : ""}`}>
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
            className="w-[100%] transition-[width] delay-150 object-cover  rounded-lg shadow-xl mt-[2vh] "
          />
        ) : (
          <img
            src={"/images/report1.png"}
            alt={"report1"}
            className="transition-[width] delay-150 object-cover rounded-lg shadow-xl z-40 mt-[2vh]"
            onMouseEnter={handleImgMouseEnter}
            onMouseLeave={handleImgMouseLeave}
          />
        )}
      </div>
    </motion.div>
  );
};

export default memo(HorizontalTransitionVideoInfo);
