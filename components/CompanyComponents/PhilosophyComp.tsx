import {useRef, memo} from "react";

interface VideoOnHoverType {
  // 카드 내용
  type: {
    title: string;
    content: string[];
    videoPath: string;
  };
}

function PhilosophyComp({type}: VideoOnHoverType) {
  const videoRef = useRef<null | HTMLVideoElement>(null);
  // 사용자 마우스 앤터 이벤트 핸들러 --> 비디오 재생 기능
  const videoMouseEnter = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.play();
    }
  };
  // 사용자 마우스 아웃 이벤트 핸들러 --> 비디오 멈추기 기능
  const videoMouseLeave = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
    }
  };

  return (
    <div className="mt-2 relative z-0">
      {/* 비디오 */}
      <video
        ref={videoRef}
        src={type.videoPath}
        loop
        muted
        className=" relative w-[100%]  object-cover  h-[60vh] 2xl:h-[550px]  flex-wrap  rounded-lg shadow-xl"
      />
      {/* 내용 */}
      <div
        className=" absolute inset-0 flex justify-start items-end  px-4 pb-2 "
        onMouseEnter={videoMouseEnter}
        onMouseLeave={videoMouseLeave}>
        <div>
          <div className=" text-[2.5vw] text-white font-semibold mb-4 underline underline-offset-8 lg:text-[50px]">
            {type.title}
          </div>
          <ul className="text-[1vw] whitespace lg:text-[15px]">
            {type.content.map((val: string) => (
              <li className="text-white my-1" key={val}>
                {val}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default memo(PhilosophyComp);
