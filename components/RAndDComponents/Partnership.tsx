import {useState, useRef, useEffect, memo} from "react";
import PartnershipContent from "../../functions/PartnershipContent";
import Icon from "./Icon";
import Carousel from "./Carousel";

function Partnership() {
  const [userInteracted, setUserInteracted] = useState(true);
  const [currentObj, setCurrentObj] = useState(PartnershipContent.totalBusiness);
  const picRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (userInteracted) {
      let currentIdx = 0;
      const interval = setInterval(async () => {
        const values = [
          PartnershipContent.ts,
          PartnershipContent.h2,
          PartnershipContent.snu,
          PartnershipContent.totalBusiness,
          PartnershipContent.posco,
          PartnershipContent.ts,
        ];
        setCurrentObj(values[currentIdx + 1]);
        currentIdx === values.length - 2 ? (currentIdx = 0) : (currentIdx += 1);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [userInteracted]);

  const MouseOver = (e: any) => {
    setUserInteracted(false);
    const val = e.target.id;
    if (PartnershipContent[val] !== undefined) {
      setCurrentObj(PartnershipContent[val]);
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
          role="button"
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] -bottom-[60%] left-[20%]">
            <Icon
              defaultIcon={PartnershipContent.ts.default}
              coloredIcon={PartnershipContent.ts.colored}
              isCurrent={currentObj.title === "ts"}
            />
          </div>
        </div>
        <div className="col-span-2" />

        <div
          role="button"
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] -bottom-[85%] -right-[40%]">
            <Icon
              defaultIcon={PartnershipContent.posco.default}
              coloredIcon={PartnershipContent.posco.colored}
              isCurrent={currentObj.title === "posco"}
            />
          </div>
        </div>

        <div className="col-span-3" />
        <div
          role="button"
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] -bottom-[85%] left-[40%]">
            <Icon
              defaultIcon={PartnershipContent.h2.default}
              coloredIcon={PartnershipContent.h2.colored}
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
          role="button"
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] bottom-[40%] -left-[20%]">
            <Icon
              defaultIcon={PartnershipContent.totalBusiness.default}
              coloredIcon={PartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title === "totalBusiness"}
            />
          </div>
        </div>

        <div className="col-span-1" />

        <div
          role="button"
          onMouseOver={MouseOver}
          onMouseLeave={MouseOut}
          onClick={clickIcon}
          onFocus={() => 0}
          className="relative">
          <div className="absolute w-[150%] bottom-[40%] -right-[120%]">
            <Icon
              defaultIcon={PartnershipContent.snu.default}
              coloredIcon={PartnershipContent.snu.colored}
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