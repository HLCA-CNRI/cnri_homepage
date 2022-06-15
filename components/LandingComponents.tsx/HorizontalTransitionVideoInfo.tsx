import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Opacity } from "@material-ui/icons";
import report1 from "../../images/report1.png";
import classNames from "classnames";
import Image from "next/image";
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
    <motion.div ref={ref} animate={controlVid} initial="vidHidden" variants={moveVidFrom} className={`h-[100%] flex flex-row ${isTop ? "pb-4" : "pt-4"}`}>
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
        className={`${colorType == "green" ? "bg-[#EEF7E9]" : "bg-[#FFF7E1]"} p-6 ${imagePosition === "right" ? "order-first" : "order-last"} -z-50`}>
        <p className={classNames("flex items-center justify-center h-[100%] text-sm")}>{contentInfo.content}</p>
      </motion.div>

      <div className={`${colorType == "green" ? "bg-[#EEF7E9]" : "bg-[#FFF7E1]"} p-6 h-[100%] flex flex-col justify-center`}>
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
          <Image
            src={report1.src}
            alt={"report1"}
            layout={"fill"}
            className="w-[100%] transition-[width] delay-150 object-cover rounded-lg shadow-xl z-40 mt-4"
            onMouseEnter={handleImgMouseEnter}
            onMouseLeave={handleImgMouseLeave}
          />
        )}
      </div>
    </motion.div>
  );
};

export default HorizontalTransitionVideoInfo;
