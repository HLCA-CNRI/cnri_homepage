/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
import {useState, useRef, useEffect, memo} from "react";
import WorkAndPartnershipContent from "../../functions/WorkAndResponsibilitiesPartnership";
import Icon from "./Icon";
import Carousel from "../Carousel";

function Partnership() {
  const [userInteracted, setUserInteracted] = useState(true);
  const [currentObj, setCurrentObj] = useState(WorkAndPartnershipContent.totalBusiness);
  const picRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (userInteracted) {
      let currentIdx = 0;
      const interval = setInterval(async () => {
        const values = [
          WorkAndPartnershipContent.ts,
          WorkAndPartnershipContent.h2,
          WorkAndPartnershipContent.snu,
          WorkAndPartnershipContent.totalBusiness,
          WorkAndPartnershipContent.posco,
          WorkAndPartnershipContent.ts,
        ];
        await setCurrentObj(values[currentIdx + 1]);
        currentIdx === values.length - 2 ? (currentIdx = 0) : (currentIdx += 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [userInteracted]);

  const MouseOver = (e: any) => {
    setUserInteracted(false);
    const val = e.target.id;
    if (WorkAndPartnershipContent[val] !== undefined) {
      setCurrentObj(WorkAndPartnershipContent[val]);
    }
  };

  const MouseOut = () => {
    setUserInteracted(true);
  };

  const clickIcon = () => {
    setUserInteracted(false);
  };

  return (
    <div className="grid grid-cols-3 w-[100%] h-[75vh] py-4 ">
      <div className="grid grid-cols-5 h-[70vh]">
        <div className="col-span-2" />

        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] -bottom-[60%] left-[20%]">
            <Icon
              defaultIcon={WorkAndPartnershipContent.ts.default}
              coloredIcon={WorkAndPartnershipContent.ts.colored}
              isCurrent={currentObj.title === "ts"}
            />
          </div>
        </div>
        <div className="col-span-2" />

        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] -bottom-[85%] -right-[40%]">
            <Icon
              defaultIcon={WorkAndPartnershipContent.posco.default}
              coloredIcon={WorkAndPartnershipContent.posco.colored}
              isCurrent={currentObj.title === "posco"}
            />
          </div>
        </div>

        <div className="col-span-3" />
        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] -bottom-[85%] left-[40%]">
            <Icon
              defaultIcon={WorkAndPartnershipContent.h2.default}
              coloredIcon={WorkAndPartnershipContent.h2.colored}
              isCurrent={currentObj.title === "h2"}
            />
          </div>
        </div>

        <div className="col-span-2" />
        <div className="relative ">
          <div className="absolute w-[200%] top-[50%] -left-[20%]">
            <img alt="logoImg" src="/images/logo.png" />
          </div>
        </div>

        <div className="col-span-2" />

        <div className="col-span-5  h-8" />
        <div className="col-span-1" />

        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] bottom-[40%] -left-[20%]">
            <Icon
              defaultIcon={WorkAndPartnershipContent.totalBusiness.default}
              coloredIcon={WorkAndPartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title === "totalBusiness"}
            />
          </div>
        </div>

        <div className="col-span-1" />

        <div
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] bottom-[40%] -right-[120%]">
            <Icon
              defaultIcon={WorkAndPartnershipContent.snu.default}
              coloredIcon={WorkAndPartnershipContent.snu.colored}
              isCurrent={currentObj.title === "snu"}
            />
          </div>
        </div>
        <div className="col-span-1" />
      </div>

      <div className="col-span-2 ml-40">
        <div
          ref={picRef}
          onMouseEnter={MouseOver}
          onMouseLeave={MouseOut}
          className="flex flex-col px-4 h-[70vh]">
          {currentObj.hasMultiple ? (
            <Carousel currentObj={currentObj} />
          ) : (
            <>
              <div className="text-4xl pb-4 h-20  flex justify-start ml-8">{currentObj.kTitle}</div>
              <div className="h-[80%] w-[90%] flex justify-center self-center xl:h-[60%] ">
                {currentObj.img}
              </div>
              <div className="text-md pt-4 px-8 ">
                <ul>
                  {currentObj.content.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Partnership);
