import styled from "styled-components";
import {useRef,useEffect,useState} from "react"


const Container = styled.div `
  background-color: ${props => props.color};
  overflow-x:scroll;
  ::-webkit-scrollbar {
  -webkit-appearance: none;
  height: 0.5vh;
  width:0.5vw;
 
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, .3);
  /* background-color: ${props => props.color}; */
  box-shadow: 0 0 1px rgba(255, 255, 255, .5);
}
`

interface LandingMobileType {
  contentInfo: any;
  isVid: boolean;
  backgroundColor:string;
}

const LandingMobile = ({ contentInfo, isVid,backgroundColor }: LandingMobileType) => {
  const scroll = useRef<null | HTMLDivElement>(null);
  const [scrollPos,setScrollPos] = useState(0)
  useEffect(()=>{
    if(scroll && scroll.current){
      setScrollPos(scroll.current.scrollLeft)
      // console.log(scroll.current.clientWidth)
      // console.log(contentInfo,scroll.current.scrollLeft)
      // console.log(scroll.current)
    }
  },[scrollPos])

  const setScroller = (e:any) =>{
    if(scroll && scroll.current){
      console.log("scroll Left",e.target.scrollLeft,"clientWidth",scroll.current.clientWidth,"offsetWidth",scroll.current.offsetWidth,"scrollWidth",scroll.current.scrollWidth)
      console.log(e.target.scrollLeft/scroll.current.scrollWidth)
    }

  }
  return (
    
      <div>
      <Container ref = {scroll}color={backgroundColor} className="snap-x flex snap-mandatory overflow-auto " onScroll={setScroller}>
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
        <div className="flex-shrink-0  snap-center  w-[100%]  relative">
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
      </div>
  );
};

export default LandingMobile;
