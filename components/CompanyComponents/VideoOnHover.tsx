import stkImage from "../images/stkImage.png";
import video1 from "../../video/video1.mp4";

import {useState,useEffect} from 'react'

//STYLES
import { Wrapper } from "../../video/App.style";

const VideoOnHover = () => {

  const [playVid,setPlayVid] = useState(false)

  const handleVideoMouseEnter = (e:any) => {
    setPlayVid(true)
    const vid = e.target
    vid.muted = true
    vid.play()
  }

  const handleVideoMouseLeave = (e:any) => {
    setPlayVid(false)
    const vid = e.target
    vid.muted = false
    vid.currentTime = 0
    vid.pause()
  }

  return (
    <div className="mt-2 mx-4 one">
      {
        playVid ?  <video src={video1}  autoPlay loop onMouseEnter={handleVideoMouseEnter}  onMouseLeave = {handleVideoMouseLeave} className = "w-[100%] transition-[width] ease-in-out delay-150 object-fill  h-96  hover:scale-x-105 duration-700  rounded-lg shadow-xl"/> : 
          <img
      src="https://www.samsungcnt.com/assets/img/home/business4.jpg"
      alt="" onMouseEnter={(e:React.MouseEvent) => setPlayVid(true)}  onMouseLeave={(e:React.MouseEvent) => setPlayVid(false)} className = "w-[100%] h-96 rounded-lg shadow-xl"/>
      }
     
    </div>
  );
};

export default VideoOnHover;
