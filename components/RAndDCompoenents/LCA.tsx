import React, { useState, useRef, useEffect, memo } from "react";
import { LCAContents } from "../../functions/LCAContents";
import Icon from "../../components/RAndDCompoenents/Icon";
import lca from "../../images/lca.png"

const LCA = () => {
  const [userClicked,setUserClicked] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [currentObj, setCurrentObj] = useState(LCAContents.resources);
  const videoRef = useRef<null | HTMLVideoElement>(null);
  useEffect(() => {
    if(!userInteracted){
        console.log("userInteracted")
        let currentIdx = 0
        const interval = setInterval(async()=>{
            const values = [LCAContents.resources,LCAContents.processing,LCAContents.manufacturing,LCAContents.distribution,LCAContents.use,LCAContents.endOfLife,LCAContents.resources]
            await setCurrentObj(values[currentIdx + 1])
            currentIdx == (values.length -2) ? currentIdx = 0 : currentIdx += 1
        },3000)
          return () => clearInterval(interval);
    }
  }, [userInteracted]);

  // useEffect(()=>{
  //   console.log(userClicked)
  // },[userClicked])

  const MouseOver = (e: any) => {
    setUserInteracted(true)
    const val = e.target.id;
    console.log(e.target)
    console.log('MouseOver val', val)
    if (LCAContents[val] != undefined) {
      setCurrentObj(LCAContents[val]);
      // console.log(currentObj)
    }
    

  };

  const MouseOut = (e:any) =>{
    setUserClicked(false)
    setUserInteracted(false)
  }

  const clickIcon = (e:any) =>{
      // setUserInteracted(true)
      setUserClicked(true)
      const val = e.target.id;
      console.log('e.target', e.target)
    console.log('clickIcon val', val)

      console.log(currentObj)
  
      if(videoRef && videoRef.current){
        // videoRef.current.play()
      }
     
  }
  console.log("userClicked", userClicked)
  return (
    <div className="w-[100%]">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className = "grid grid-cols-10">
            <div className = "col-span-9">
            <video ref={videoRef} src={currentObj.videoPath} autoPlay loop  className = {` pt-4 ${userClicked ? "hidden":""} `}/>
            <div className = "text-md  pb-4">
              <div>{currentObj.content1}</div>
              <div>{currentObj.content2}</div>
          </div>
            </div>
          </div>

          
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>
          <div id='test' onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.resources.default}
              coloredIcon={LCAContents.resources.colored}
              isCurrent={currentObj.title == "resources" ? true : false}
            />
          </div>
          <div className="col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.processing.default}
              coloredIcon={LCAContents.processing.colored}
              isCurrent={currentObj.title == "processing" ? true : false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.manufacturing.default}
              coloredIcon={LCAContents.manufacturing.colored}
              isCurrent={currentObj.title == "manufacturing" ? true : false}
            />
          </div>

          <div className=" col-span-2"></div>


          <img src = {lca.src}></img>

          {/* <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <div>Hello</div>
          </div> */}

          <div className=" col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={LCAContents.distribution.default}
              coloredIcon={LCAContents.distribution.colored}
              isCurrent={currentObj.title == "distribution" ? true : false}
            />
          </div>

          <div className=" col-span-3"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>            <Icon
              defaultIcon={LCAContents.use.default}
              coloredIcon={LCAContents.use.colored}
              isCurrent={currentObj.title == "use" ? true : false}
            />
          </div>

          <div className="col-span-2"></div>

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={currentObj.title == "endOfLife" ? true : false}
            />
          </div>

          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(LCA);
