import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {memo, useEffect, useRef} from "react";

interface VerticalTansitionVideoInfoType {
  moveVidFrom: any;
  moveContextFrom: any;
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
  };
  colorType: string;
}

function VerticalTansitionVideoInfo({
  moveVidFrom,
  moveContextFrom,
  contentInfo,
  colorType,
}: VerticalTansitionVideoInfoType) {
  const controlVid = useAnimation();
  const controlText = useAnimation();
  const [ref, inView] = useInView();
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const handleCardMouseEnter = () => {
    if (videoRef && videoRef.current) {
      // videoRef.current.muted
      videoRef.current.play();
    }
    controlText.start("open");
  };

  const handleCardMouseLeave = async () => {
    if (videoRef && videoRef.current) {
      // videoRef.current.muted = false
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    await controlText.start("close");
    await controlText.start("close2");
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
      className="flex flex-col h-full drop-shadow-lg cursor-pointer"
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}>
      <div>
        <div
          className={`text-[1.8vw] font-bold  w-[100%] ${
            colorType === "blue" ? "bg-[#EAF2FA]" : "bg-[#EEF7E9]"
          } pt-[5vh] px-[2vw]  `}>
          {contentInfo.title}
        </div>
        <div
          className={` ${
            colorType === "blue" ? "bg-[#EAF2FA]" : "bg-[#EEF7E9]"
          } px-[2vw] pt-[2vh] pb-[3vh] z-30  `}>
          <video
            ref={videoRef}
            src={contentInfo.videoPath}
            muted
            loop
            className="w-[100%] transition-[width] delay-150 object-cover shadow-xl  rounded-lg  z-30"
          />
        </div>
      </div>

      <motion.div
        animate={controlText}
        initial="initial"
        variants={moveContextFrom}
        className={`${colorType === "blue" ? "bg-[#EAF2FA]" : "bg-[#EEF7E9]"} -z-50 `}
        onMouseEnter={() => controlText.start("open")}
        onMouseLeave={async () => {
          await controlText.start("close");
          await controlText.start("close2");
        }}>
        <div className="p-[2vw] z-0 text-[1vw]">
          {contentInfo.content}
          {contentInfo.title === "포트폴리오 관리" ? (
            <a className="cursor-pointer text-blue-600 " href="#footer">
              Contact
            </a>
          ) : (
            ""
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default memo(VerticalTansitionVideoInfo);
