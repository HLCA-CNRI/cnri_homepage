import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {memo, useEffect, useRef} from "react";
import classNames from "classnames";

// Grid 형태로 놓고 싶어서 따로 Horizontal TransitionVideoInfo를 만듬
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

function HorizontalTransitionVideoInfo({
  imagePosition,
  moveVidFrom,
  moveContextFrom,
  contentInfo,
  isTop,
  colorType,
  basisVal,
}: HorizontalTransitionVideoInfoType) {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const controlVid = useAnimation();
  const controlText = useAnimation();
  const [ref, inView] = useInView();

  const handleVidMouseEnter = async () => {
    console.log("open");
    if (videoRef && videoRef.current) {
      console.log("open2");
      await videoRef.current.play();
      await controlText.start("open");
    }
  };

  const handleVidMouseLeave = () => {
    if (videoRef && videoRef.current) {
      // videoRef.current.muted = false
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    controlText.start("close2");
  };

  const handleImgMouseEnter = () => {
    controlText.start("open");
  };

  const handleImgMouseLeave = () => {
    controlText.start("close2");
  };

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
      className={`h-[100%] flex flex-row drop-shadow-lg ${
        isTop ? "pb-[3vh]" : "pt-[3vh]"
      } cursor-pointer`}
      onMouseEnter={contentInfo.isVideo ? handleVidMouseEnter : handleImgMouseEnter}
      onMouseLeave={contentInfo.isVideo ? handleVidMouseLeave : handleImgMouseLeave}>
      {" "}
      <motion.div
        animate={controlText}
        initial="initial"
        variants={moveContextFrom}
        style={{width: `${basisVal}`}}
        className={`${colorType === "green" ? "bg-[#EEF7E9]" : "bg-[#FFF7E1]"} p-[2vw]  ${
          imagePosition === "right" ? "order-first" : "order-last"
        } -z-50`}>
        <p className={classNames("flex items-center justify-center h-[100%] text-[1vw] py-[3vh]")}>
          {contentInfo.content}
        </p>
      </motion.div>
      <div
        className={`${
          colorType === "green" ? "bg-[#EEF7E9]" : "bg-[#FFF7E1]"
        } p-[2vw] h-[100%] flex flex-col justify-center`}>
        <div
          className={`text-[1.8vw] font-bold  w-[100%] flex ${
            imagePosition === "right" ? "justify-end" : ""
          }`}>
          {/* <div className = "w-[50%]"> */}
          {contentInfo.title}
          {/* </div> */}
        </div>
        {contentInfo.isVideo ? (
          <video
            ref={videoRef}
            src={contentInfo.videoPath}
            muted
            loop
            className="w-[100%] transition-[width] delay-150 object-cover  rounded-lg shadow-xl mt-[2vh] "
          />
        ) : (
          <img
            src="/images/report1.png"
            alt="report1Img"
            className="transition-[width] delay-150 object-cover rounded-lg shadow-xl  mt-[2vh]"
          />
        )}
      </div>
    </motion.div>
  );
}

export default memo(HorizontalTransitionVideoInfo);
