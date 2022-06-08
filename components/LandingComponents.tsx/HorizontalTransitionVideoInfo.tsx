import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
//Grid 형태로 놓고 싶어서 따로 Horizontal TransitionVideoInfo를 만듬
interface HorizontalTransitionVideoInfoType {
  imagePosition: string;
}

const TransitionVariantL = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 400 },
  };

const TransitionVariantR = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, x: 400 },
};

const DescriptionVariant = {
  open: { opacity: 1, transition: { duration: 0.6 } },
  close: { opacity: 0 },
};

const HorizontalTransitionVideoInfo = ({
  imagePosition,
}: HorizontalTransitionVideoInfoType) => {
  const handleVideoMouseEnter = (e: any) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
    controlText.start("open");
  };

  const handleVideoMouseLeave = (e: any) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
    controlText.start("close");
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
    <div ref={ref}>
      <div className="text-3xl font-bold m-2 w-[100%]">Title</div>
      <motion.div
        animate={controlVid}
        initial="hidden"
        variants={imagePosition == "right" ? TransitionVariantR:TransitionVariantL}
        className="grid  grid-cols-2 gap-4"
      >
          { imagePosition == "right" ? <motion.div
          animate={controlText}
          initial="close"
          variants={DescriptionVariant}
        >
          최근 CDP 보고서[링크]에 의하면 공급망에서의 탄소 배출이 평균 11.3배나
          될 만큼 많은 비중을 차지하고 있지만 규제 부재, 필요성 인지 부족 등으로
          오랫동안 블랙박스였습니다. 그렇지만 국가별 기후 공시 의무화, 글로벌
          기업들의 연이은 Net-Zero 선언으로 인해 공급망에서의 탄소 감축이 어느
          때보다 중요한 시점입니다. 탄소중립연구원은 산업 평균 데이터가 아닌
          구체적인 현장 데이터의 적용을 도울 수 있으며, 공급망에서의 구체적인
          탄소 감축 방안을 제시합니다.
        </motion.div>:""

          }
        
        <div>
          <video
            src={require("../../video/company1.mp4")}
            autoPlay
            loop
            onMouseEnter={handleVideoMouseEnter}
            onMouseLeave={handleVideoMouseLeave}
            className="w-[100%] transition-[width] delay-150 object-fill  hover:scale-x-105 duration-700 rounded-lg shadow-xl"
          />
        </div>

        { imagePosition == "left" ? <motion.div
          animate={controlText}
          initial="close"
          variants={DescriptionVariant}
        >
          최근 CDP 보고서[링크]에 의하면 공급망에서의 탄소 배출이 평균 11.3배나
          될 만큼 많은 비중을 차지하고 있지만 규제 부재, 필요성 인지 부족 등으로
          오랫동안 블랙박스였습니다. 그렇지만 국가별 기후 공시 의무화, 글로벌
          기업들의 연이은 Net-Zero 선언으로 인해 공급망에서의 탄소 감축이 어느
          때보다 중요한 시점입니다. 탄소중립연구원은 산업 평균 데이터가 아닌
          구체적인 현장 데이터의 적용을 도울 수 있으며, 공급망에서의 구체적인
          탄소 감축 방안을 제시합니다.
        </motion.div>:""

          }
      </motion.div>
    </div>
  );
};

export default HorizontalTransitionVideoInfo;
