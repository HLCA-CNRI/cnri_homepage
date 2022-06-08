import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const TransitionVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: -400 },
};

const DescriptionVariant = {
  open: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  close: { opacity: 0, x: -400 },
};

const TransitionInfo = () => {
  const handleVideoMouseEnter = (e: any) => {

    const vid = e.target;
    vid.muted = true;
    vid.play();
    controlText.start("open")
  };

  const handleVideoMouseLeave = (e: any) => {

   
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
    controlText.start("close")
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
    <div ref={ref} className="bg-amber-300 ">
      <motion.div
        animate={controlVid}
        initial="hidden"
        variants={TransitionVariant}

      >
        <div className="text-3xl font-bold">Title</div>
        {/* <div onMouseEnter={() => controlText.start("open") } onMouseLeave={() => controlText.start("close")}> */}
        <video
          src={require("../../video/company1.mp4")}
          autoPlay
          loop
          onMouseEnter={handleVideoMouseEnter}
          onMouseLeave={handleVideoMouseLeave}
          className="w-[100%] transition-[width] delay-150 object-fill  hover:scale-x-105 duration-700 rounded-lg shadow-xl"
        />
        {/* </div> */}
            <motion.div
            animate={controlText}
            initial="close"
            variants={DescriptionVariant}
        >
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making it
            over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
            of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
        </motion.div>
      </motion.div>

    </div>
  );
};

export default TransitionInfo;
