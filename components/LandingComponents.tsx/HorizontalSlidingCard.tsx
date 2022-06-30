import {motion, useAnimation} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {memo, useEffect, useRef} from "react";
import classNames from "classnames";

interface HorizontalSlidingCardType {
  imagePosition: string; // 비디오+제목이 왼쪽에 있는지 오릉쪽에 있는지
  moveVidFrom: any; // 카드 TransitionVariant --> 처음 view에 나올때 어디에서 나오는지 지정.
  moveContextFrom: any; // 내용 TransitionVariant --> 호버할때 애니메이션 지정해줌.
  // 카드 내용
  contentInfo: {
    title: string;
    content: string;
    videoPath: string;
    isVideo: boolean;
  };
  bgColor: string; // 카드 색
  basisVal: string; // flex-basis
}

function HorizontalSlidingCard({
  imagePosition,
  moveVidFrom,
  moveContextFrom,
  contentInfo,
  bgColor,
  basisVal,
}: HorizontalSlidingCardType) {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const controlVid = useAnimation(); // 카드 애니메이션 variant
  const controlText = useAnimation(); // 내용 애니메이션 variant
  const [ref, inView] = useInView(); // react-intersection-observer 쓰이는 hook.사용자가 view안에 접근했는지 확인.

  // 비디오일때: 사용자 마우스 앤터 이벤트 핸들러 --> 카드 펼치는 기능 + 비디오 재생 기능.
  const handleVidMouseEnter = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
    controlText.start("open");
  };

  // 비디오일때: 사용자 마우스 아웃 이벤트 핸들러 --> 카드 펼치는 접기 + 비디오 멈추기.
  const handleVidMouseLeave = () => {
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
      className="h-[100%] flex flex-row drop-shadow-lg  cursor-pointer"
      onMouseEnter={contentInfo.isVideo ? handleVidMouseEnter : () => controlText.start("open")} // 비디오일때는 handleVidMouseEnter, 사진일때 그냥 카드 open
      onMouseLeave={contentInfo.isVideo ? handleVidMouseLeave : () => controlText.start("close2")}>
      {" "}
      {/* 카드 내용부분 + 내용 펼쳐질때 애니메이션 */}
      <motion.div
        animate={controlText}
        initial="initial"
        variants={moveContextFrom}
        style={{width: `${basisVal}`, backgroundColor: bgColor}}
        className={` ${imagePosition === "right" ? "pl-[2vw]" : "pr-[2vw]"} ${
          imagePosition === "right" ? "order-first" : "order-last"
        } -z-50`}>
        <p className={classNames("flex items-center justify-center h-[100%] text-[1vw] py-[3vh]")}>
          {contentInfo.content}
        </p>
      </motion.div>
      {/* 카드 title + video or img  */}
      <div
        className={` p-[2vw] h-[100%] flex flex-col justify-center`}
        style={{backgroundColor: bgColor}}>
        <div
          className={`text-[1.8vw] font-bold  w-[100%] flex ${
            imagePosition === "right" ? "justify-end" : ""
          }`}>
          {contentInfo.title}
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

export default memo(HorizontalSlidingCard);
