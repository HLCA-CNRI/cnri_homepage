import { WorkAndPartnershipContent } from "../../functions/WorkAndResponsibilitiesPartnership";
import { useState, useRef, useEffect } from "react";
import Icon from "./Icon";
import logo from "../../images/logo.png";
import Carousel from "../Carousel";
import ImgContainer from "./ImgContainer/ImgContainer";

const Partnership = () => {
  const [userInteracted, setUserInteracted] = useState(true);
  const [currentObj, setCurrentObj] = useState(
    WorkAndPartnershipContent.totalBusiness
  );
  const picRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (userInteracted) {
      let currentIdx = 0;
      const interval = setInterval(async () => {
        const values = [
          WorkAndPartnershipContent.totalBusiness,
          WorkAndPartnershipContent.ts,
          WorkAndPartnershipContent.h2,
          WorkAndPartnershipContent.posco,
          WorkAndPartnershipContent.snu,
          WorkAndPartnershipContent.totalBusiness,
        ];
        await setCurrentObj(values[currentIdx + 1]);
        currentIdx == values.length - 2 ? (currentIdx = 0) : (currentIdx += 1);
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [userInteracted]);

  const MouseOver = (e: any) => {
    setUserInteracted(false);
    const val = e.target.id;
    if (WorkAndPartnershipContent[val] != undefined) {
      setCurrentObj(WorkAndPartnershipContent[val]);
    }
  };

  const MouseOut = (e: any) => {
    setUserInteracted(true);
  };

  const clickIcon = (e: any) => {
    setUserInteracted(false);
  };

  console.log(typeof currentObj.img);

  return (
    <div className="grid grid-cols-3 w-[100%] border-2 h-[90vh]">
      <div className="grid grid-cols-5">
        <div className="col-span-2"></div>
        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
        >
          <Icon
            defaultIcon={WorkAndPartnershipContent.totalBusiness.default}
            coloredIcon={WorkAndPartnershipContent.totalBusiness.colored}
            isCurrent={currentObj.title == "totalBusiness" ? true : false}
            hasMultiple={false}
          />
        </div>
        <div className="col-span-2"></div>
        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
        >
          <Icon
            defaultIcon={WorkAndPartnershipContent.ts.default}
            coloredIcon={WorkAndPartnershipContent.ts.colored}
            isCurrent={currentObj.title == "ts" ? true : false}
            hasMultiple={false}
          />
        </div>
        <div className="col-span-3"></div>

        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
        >
          <Icon
            defaultIcon={WorkAndPartnershipContent.posco.default}
            coloredIcon={WorkAndPartnershipContent.posco.colored}
            isCurrent={currentObj.title == "posco" ? true : false}
            hasMultiple={true}
          />
        </div>

        <div className="col-span-2"></div>
        <img src={"/images/logo.png"}></img>
        {/* <div onMouseOver={MouseOver} onMouseLeave = {MouseOut} onClick = {clickIcon}>
            <div>Hello</div>
          </div> */}

        <div className="col-span-2"></div>

        <div className="col-span-5  h-8"></div>
        <div className="col-span-1"></div>
        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
        >
          <Icon
            defaultIcon={WorkAndPartnershipContent.h2.default}
            coloredIcon={WorkAndPartnershipContent.h2.colored}
            isCurrent={currentObj.title == "h2" ? true : false}
            hasMultiple={false}
          />
        </div>
        <div className="col-span-1"></div>

        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
        >
          <Icon
            defaultIcon={WorkAndPartnershipContent.snu.default}
            coloredIcon={WorkAndPartnershipContent.snu.colored}
            isCurrent={currentObj.title == "snu" ? true : false}
            hasMultiple={false}
          />
        </div>
        <div className="col-span-1"></div>
      </div>


        <div
          ref={picRef}
          onMouseEnter={MouseOver}
          onMouseLeave={MouseOut}
          className="bg-slate-200 flex flex-col col-span-2 px-10"
        >
          <div className="text-4xl pb-4 border-2 h-20">{currentObj.kTitle}</div>
          <div className=" h-[80%] w-[90%] border-4 border-cyan-200 flex justify-center self-center xl:h-[60%]">
            {currentObj.hasMultiple ? (
              <Carousel values={currentObj.img}></Carousel>
            ) : (
              currentObj.img
            )}
          </div>
          <div className="text-lg h-40 border-4 border-red-300 ">
            <ul>
              {currentObj.content.map((note: string) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>

    </div>
  );
};

export default Partnership;
