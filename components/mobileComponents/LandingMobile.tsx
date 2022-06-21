import ScrollContainer from "react-indiana-drag-scroll";

interface LandingMobileType {
  contentInfo: any;
  isVid: boolean;
}

const LandingMobile = ({ contentInfo, isVid }: LandingMobileType) => {
  return (
    <div className="snap-x flex snap-mandatory overflow-scroll">
      {isVid ? (
        contentInfo.map((val: any) => (
          <div
            key={val.title}
            className="flex-shrink-0  snap-center border-2  w-[100%] "
          >
            <video autoPlay loop muted playsInline src={val.videoPath}></video>
            <div className="px-[3vw] text-[3.5vw] my-[2vh] font-bold">
              {val.title}
            </div>
            <div className="px-[3vw] pb-[3vh] text-[2.5vw]">{val.content}</div>
          </div>
        ))
      ) : (
        <div className="flex-shrink-0  snap-center border-2  w-[100%] ">
          <img src={contentInfo[0].videoPath}></img>
          <div className="px-[3vw] text-[3.5vw] my-[2vh] font-bold">
            {contentInfo[0].title}
          </div>
          <div className="px-[3vw] pb-[3vh] text-[2.5vw]">
            {contentInfo[0].content}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingMobile;
