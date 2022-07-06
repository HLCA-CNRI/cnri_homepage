import styled from "styled-components";

// 해상도 작아질때 카드에 스크로로보이게 하는 styled components
// FIXME:scroll does not show on phone.
const Container = styled.div`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0.5vh;
    width: 0.5vw;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: ${(props) => props.color}; */
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;

interface LandingMobileType {
  contentInfo: any; // 카드 내용 --> 배열로 받음
  isVid: boolean; // 비디오인지 사진인지
  backgroundColor: string; // 카드 색
}

function LandingMobile({contentInfo, isVid, backgroundColor}: LandingMobileType) {
  return (
    <Container style={{backgroundColor}} className="snap-x flex snap-mandatory overflow-auto ">
      {/* video일때 배열을 map해서 하나식 나열 */}
      {/* img일때 배열 길이 1 map안해도되서 바로 나열 */}
      {isVid ? (
        contentInfo.map((val: any) => (
          <div key={val.title} className="flex-shrink-0  snap-center  w-[100%]  ">
            {/* 키드 비디오 */}
            <div className="p-[2vw]">
              <video
                autoPlay
                loop
                muted
                playsInline
                src={val.videoPath}
                className=" object-cover   rounded-lg"
              />
            </div>
            {/* 키드 제목 */}
            <div className="px-[3vw] text-[3.5vw] my-[2vh] font-bold">{val.title}</div>
            {/* 키드 내용: 포트폴리오 관리일때  tag 따로 있음 */}
            <div className="px-[3vw] pb-[3vh] text-[2.5vw]">
              {val.content}{" "}
              {val.title === "포트폴리오 관리" ? (
                <a className="cursor-pointer text-blue-600" href="#footer">
                  Contact
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="flex-shrink-0  snap-center  w-[100%]  relative">
          {/* 키드 이미지 */}
          <img alt="" src={contentInfo[0].videoPath} className="p-[2vw]" />
          {/* 키드 제목 */}
          <div className="px-[3vw] text-[3.5vw] my-[2vh] font-bold">{contentInfo[0].title}</div>
          {/* 키드 내용 */}
          <div className="px-[3vw] pb-[3vh] text-[2.5vw]">{contentInfo[0].content}</div>
        </div>
      )}
    </Container>
  );
}

export default LandingMobile;
