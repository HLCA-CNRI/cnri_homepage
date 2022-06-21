import styled from "styled-components";


const Container = styled.div `
  background-color: ${props => props.color};
`

interface LandingMobileType {
  contentInfo: any;
  isVid: boolean;
  backgroundColor:string;
}

const LandingMobile = ({ contentInfo, isVid,backgroundColor }: LandingMobileType) => {
  return (
    <Container color={backgroundColor} className="snap-x flex snap-mandatory overflow-scroll">
      {isVid ? (
        contentInfo.map((val: any) => (
          <div
            key={val.title}
            className="flex-shrink-0  snap-center  w-[100%]  "
          >
            <div className="p-[2vw]">
              <video
                autoPlay
                loop
                muted
                playsInline
                src={val.videoPath}
                className=" object-cover   rounded-lg"
              ></video>
            </div>

            <div className="px-[3vw] text-[3.5vw] my-[2vh] font-bold">
              {val.title}
            </div>
            <div className="px-[3vw] pb-[3vh] text-[2.5vw]">{val.content} {val.title == "포트폴리오 관리" ? <a className="cursor-pointer text-blue-600 " href="#footer">
              Contact
            </a> :""}</div>
            
          </div>
        ))
      ) : (
        <div className="flex-shrink-0  snap-center border-2  w-[100%] ">
          <img src={contentInfo[0].videoPath} className = "p-[2vw]"></img>
          <div className="px-[3vw] text-[3.5vw] my-[2vh] font-bold">
            {contentInfo[0].title}
          </div>
          <div className="px-[3vw] pb-[3vh] text-[2.5vw]">
            {contentInfo[0].content}
          </div>
        </div>
      )}
    </Container>
  );
};

export default LandingMobile;
