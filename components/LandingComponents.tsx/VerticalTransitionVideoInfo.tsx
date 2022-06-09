import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface VerticalTansitionVideoInfoType {
  imagePosition: string;
  moveVidFrom: any;
  moveContextFrom: any;
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
  };
}

const DescriptionVariant = {
  open: { opacity: 1, transition: { duration: 0.6 } },
  close: { opacity: 0.2 },
};

const VerticalTansitionVideoInfo = ({
  imagePosition,
  moveVidFrom,
  moveContextFrom,
  contentInfo,
}: VerticalTansitionVideoInfoType) => {
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
    <div ref={ref} >
      {/* <div className="text-3xl font-bold  w-[100%] bg-slate-400 pt-6 px-6">{contentInfo.title}</div> */}
  
      <motion.div
        animate={controlVid}
        initial="vidHidden"
        variants={moveVidFrom}
      >
        <div className="text-3xl font-bold  w-[100%] bg-slate-400 pt-6 px-6">{contentInfo.title}</div>
        <div className = "bg-slate-400 p-6 z-30">
          <video
            src={contentInfo.videoPath}
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-fill  rounded-lg shadow-xl z-30"
          />
        </div>

        <motion.div
          animate={controlText}
          initial="initial"
          variants={moveContextFrom}
          className="z-0"
          onMouseEnter={()=>controlText.start("open")}
          onMouseLeave={async()=>{
            await controlText.start("close");
            await controlText.start("close2");
          }}
          >
            <div className=" bg-slate-400 p-6 z-0">
            {contentInfo.content}

            </div>
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VerticalTansitionVideoInfo;
