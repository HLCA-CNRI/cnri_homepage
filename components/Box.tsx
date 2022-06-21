import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 2 , x:0 ,transition: { duration: 0.6 } },
  hidden: { opacity: 0, scale: 0 ,x:-400},
  
};

const Box = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {

        control.start("visible");
    }else{
        control.start("hidden")
    }
  }, [control, inView]);
  return (
    <div className = "border-4">
      <motion.div
        className="aspect-square h-32 bg-slate-800 m-20"
        animate="visible"
        initial="hidden"
        variants={boxVariant}
      >
        Hello
      </motion.div>

      <motion.div ref={ref}
        className="aspect-square h-32 bg-red-800 m-20"
        animate={control}
        initial="hidden"
        variants={boxVariant}>
        Hello
      </motion.div>

    </div>


  );
};

export default Box;

