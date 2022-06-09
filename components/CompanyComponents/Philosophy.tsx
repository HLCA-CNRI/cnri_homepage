import { motion, useAnimation } from "framer-motion";


const Philosophy = () => {

  const PhilosophyVariant = {
      hidden : {width:`33%`,transition:{duration : 0.5}},
      visible: { width: `50%`}
  }
  const handleVideoMouseEnter = (e: any) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };

  const handleVideoMouseLeave = (e: any) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };

  return (
    <div>
      <motion.div
        variants={PhilosophyVariant}
        initial = "hidden"
        whileHover= "visible"
      >
        <div>
          <video
            src={(`../../video/measure1.mp4`)}
            // autoPlay
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-fill  rounded-lg shadow-xl"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Philosophy;
