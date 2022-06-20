import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { memo } from "react";


interface LandingMobileType {
  moveContextFrom: any;
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
  }[];
  isImg :boolean
}

const LandingMobile = ({ moveContextFrom, contentInfo,isImg }: LandingMobileType) => {
  const [userInteracted, setUserInteracted] = useState(false);
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    if (!userInteracted) {
      const interval = setInterval(() => {
        if(contentInfo.length - 1  == current ){
            setCurrent(0);
            
        }else{
            setCurrent((seconds) => seconds + 1);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [current,userInteracted]);

const proceedToNextCard = (e:any) =>{
    if(contentInfo.length - 1 == current){
        setCurrent(0);   
    }else{
        setCurrent(current + 1)
    }
}




  return (
    <motion.div
      className="flex justify-center border-2 rounded-lg md:hidden"
      initial="vidHidden"
    //   onClick={()=>setUserInteracted(!userInteracted)}
        onClick={proceedToNextCard}
    >
      <AnimatePresence exitBeforeEnter >
        <motion.div
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1, transition: { duration: 2.5 } }}
          exit={{ opacity:0.7 }}
          style={{ fontSize: 100 }}
          key={current}
          className = "bg-red-100"
        >
            <div className = "p-[2vw] ">
                {isImg == true ? 
                <img src = {contentInfo[current].videoPath}></img>:
                <video playsInline autoPlay muted loop src = {contentInfo[current].videoPath} className = "rounded-lg mt-[1vh]"/>
                }
           <div className = "text-[4vw] xs:text-[3vw] mt-[2vh]">{contentInfo[current].title }</div>
           <div className = "text-[2.7vw] xs:text-[2vw] mt-[2vh] mb-[10vh]">{contentInfo[current].content }</div>


            </div>
          
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default memo(LandingMobile);
