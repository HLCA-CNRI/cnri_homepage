import {useState} from 'react'

//STYLES
interface VideoOnHoverType {
  videoPath:string

}

const VideoOnHover = ({videoPath}:VideoOnHoverType) => {

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
      <video src={(videoPath)}  loop onMouseEnter={handleVideoMouseEnter}  onMouseLeave = {handleVideoMouseLeave} className = " relative w-[100%] transition-[width] ease-in-out delay-150 object-cover  h-96  hover:scale-x-105 duration-700  rounded-lg shadow-xl"/> 
      <div className ="">
        <div className = "text-lg"></div>
      </div>    
    </div>
  );
};

export default VideoOnHover;
