import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {memo, useEffect, useRef} from "react";
import TransitionVariants from "../../functions/TransitionVariants";

interface VerticalSlidingCardType {
  moveVidFrom: any; // 카드 TransitionVariant --> 처음 view에 나올때 어디에서 나오는지 지정.
  // 카드 내용
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
  };
  bgColor: string; // 카드 색
}

function VerticalSlidingCard({moveVidFrom, contentInfo, bgColor}: VerticalSlidingCardType) {
  const controlVid = useAnimation(); // 카드 애니메이션 variant
  const controlText = useAnimation(); // 내용 애니메이션 variant
  const [ref, inView] = useInView(); // react-intersection-observer 쓰이는 hook.사용자가 view안에 접근했는지 확인.
  const videoRef = useRef<null | HTMLVideoElement>(null);

  // 사용자 마우스 앤터 이벤트 핸들러 --> 카드 펼치는 기능 + 비디오 재생 기능.
  const handleCardMouseEnter = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
    controlText.start("open");
  };

  // 사용자 마우스 아웃 이벤트 핸들러 --> 카드 펼치는 접기 + 비디오 멈추기.
  const handleCardMouseLeave = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
    controlText.start("close2");
  };

  // 처음 뷰 접근할때 애니메이션 기능
  useEffect(() => {
    if (inView) {
      controlVid.start("vidVisible");
    } else {
      // controlVid.start("vidHidden");
    }
  }, [controlVid, inView]);

  return (
    // 카드 전체.
    <motion.div
      ref={ref}
      animate={controlVid}
      initial="vidHidden"
      variants={moveVidFrom}
      className={`flex flex-col h-full drop-shadow-lg cursor-pointer `}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}>
      {/* 카드 title + video  */}
      <div>
        <div
          className={`text-[1.8vw] font-bold  w-[100%]  pt-[5vh] px-[2vw] `}
          style={{backgroundColor: bgColor}}>
          {contentInfo.title}
        </div>
        <div className={` px-[2vw] pt-[2vh] pb-[3vh] z-30 `} style={{backgroundColor: bgColor}}>
          <video
            ref={videoRef}
            src={contentInfo.videoPath}
            muted
            loop
            className="w-[100%] transition-[width] delay-150 object-cover shadow-xl  rounded-lg  z-30"
          />
        </div>
      </div>
      {/* 카드 내용부분 + 내용 펼쳐질때 애니메이션 */}
      <motion.div
        animate={controlText}
        initial="initial"
        variants={TransitionVariants.TransitionContextTToB}
        className={`-z-50 `}>
        <div className={` p-[2vw] z-0 text-[1vw] `} style={{backgroundColor: bgColor}}>
          {contentInfo.content}
          {/* 포트폴리오관리에 밑에 a tag  */}
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

export default memo(VerticalSlidingCard);
