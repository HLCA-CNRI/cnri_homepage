import styled from "styled-components";
import {useRef,useEffect,useState} from "react"


const Container = styled.div `
  background-color: ${props => props.color};
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
      <Container ref = {scroll}color={backgroundColor} className="snap-x flex snap-mandatory overflow-auto hover:overflow-scroll" onScroll={setScroller}>
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
       {/* <div className = "w-[100%] h-2 bg-slate-400 flex">
          <div className = "w-1/4 bg-red-400"></div>
          <div className = "w-1/4 bg-blue-400"></div>
          <div className = "w-1/4 bg-green-400"></div>
          <div className = "w-1/4 bg-purple-400"></div>
        </div> */}
      </div>
  );
};

export default LandingMobile;
