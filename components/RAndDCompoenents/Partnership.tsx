import { WorkAndPartnershipContent } from "../../functions/WorkAndResponsibilitiesPartnership";
import { useState, useRef, useEffect } from "react";
import totalBusinessD from "../../images/companies/totalBusinessD.png";
import Icon from "./Icon";

const Partnership = () => {
  const [userInteracted, setUserInteracted] = useState(true)
  const [currentObj, setCurrentObj] = useState(
    WorkAndPartnershipContent.totalBusiness
  );
  const picRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if(userInteracted){
        let currentIdx = 0
        const interval = setInterval(async()=>{
            const values = [WorkAndPartnershipContent.totalBusiness,WorkAndPartnershipContent.ts,WorkAndPartnershipContent.h2,WorkAndPartnershipContent.posco,WorkAndPartnershipContent.snu,WorkAndPartnershipContent.totalBusiness]
            await setCurrentObj(values[currentIdx + 1])
            currentIdx == (values.length -2) ? currentIdx = 0 : currentIdx += 1
        },2000)
          return () => clearInterval(interval);
    }
  }, [userInteracted]);

  const MouseOver = (e: any) => {
    setUserInteracted(false)
    const val = e.target.id;
    if (WorkAndPartnershipContent[val] != undefined) {
      setCurrentObj(WorkAndPartnershipContent[val]);
    }
  };


  const MouseOut = (e:any) =>{
    setUserInteracted(true)
  }

  const clickIcon = (e:any) =>{
    setUserInteracted(false)
  }



  return (
    <div className="w-[100%] bg-slate-400">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-5">
          <div className="col-span-2"></div>
          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.totalBusiness.default}
              coloredIcon={WorkAndPartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title == "totalBusiness" ? true : false}
            />
          </div>
          <div className="col-span-2"></div>
          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.ts.default}
              coloredIcon={WorkAndPartnershipContent.ts.colored}
              isCurrent={currentObj.title == "ts" ? true : false}
            />
          </div>
          <div className="col-span-3"></div>
    

          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.posco.default}
              coloredIcon={WorkAndPartnershipContent.posco.colored}
              isCurrent={currentObj.title == "posco" ? true : false}
            />
          </div>

          <div className="col-span-2"></div>
          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.totalBusiness.default}
              coloredIcon={WorkAndPartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title == "totalBusiness" ? true : false}
            />
          </div>
          
          <div className="col-span-2"></div>
          <div className="col-span-5  h-8"></div>
          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.h2.default}
              coloredIcon={WorkAndPartnershipContent.h2.colored}
              isCurrent={currentObj.title == "h2" ? true : false}
            />
          </div>
          <div className="col-span-3"></div>
      
          <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <Icon
              defaultIcon={WorkAndPartnershipContent.snu.default}
              coloredIcon={WorkAndPartnershipContent.snu.colored}
              isCurrent={currentObj.title == "snu" ? true : false}
            />
          </div>
          
        </div>

        <div className="">
          {/* <video ref={picRef} src={currentObj.videoPath} autoPlay loop /> */}
          <div ref={picRef}>
              {currentObj.img}
              Hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
