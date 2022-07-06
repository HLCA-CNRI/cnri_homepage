import {useState, useRef, useEffect, memo} from "react";
import PartnershipContent from "../../functions/PartnershipContent";
import Icon from "./Icon";
import Carousel from "./Carousel";

function Partnership() {
  const [userInteracted, setUserInteracted] = useState(false); // 유저가 이미지에 호버 하거나, 아이콘에 호버를 했는지 확인. 유저한테 인터랙션이 이뤄졌는지. --> 이뤄졌다면 setUserInteracted(true)
  const [currentObj, setCurrentObj] = useState(PartnershipContent.h2); // 현제 옵젝트/아이콘
  const picRef = useRef<null | HTMLDivElement>(null);
  // userInteracted state 감시, 유저 인터렉션이 없으면 2초마다 current옵젝트가 바뀜
  useEffect(() => {
    if (!userInteracted) {
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
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [userInteracted]);

  // ICON:사용자 마우스 앤터 이벤트 핸들러 --> userInteracted는 true + currentObj가 현제 오브젝트로 지정
  const MouseOver = (e: any) => {
    setUserInteracted(true);
    const val = e.target.id;
    if (PartnershipContent[val] !== undefined) {
      setCurrentObj(PartnershipContent[val]);
    }
  };
  // ICON :사용자 마우스 아웃 이벤트 핸들러 --> userInteracted는 false
  const MouseOut = () => {
    setUserInteracted(false);
  };

  return (
    <div className="grid grid-cols-3 w-[100%] h-[75vh] py-4 ">
      {/* 왼쪽 아이콘 부분 -->5X5 구성 */}
      <div className="grid grid-cols-5 h-[70vh]">
        <div className="col-span-2" />
        {/* ts icon */}
        <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
          <div className="absolute w-[150%] -bottom-[60%] left-[20%]">
            <Icon
              defaultIcon={PartnershipContent.ts.default}
              coloredIcon={PartnershipContent.ts.colored}
              isCurrent={currentObj.title === "ts"}
            />
          </div>
        </div>
        <div className="col-span-2" />
        {/* posco icon */}
        <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
          <div className="absolute w-[150%] -bottom-[85%] -right-[40%]">
            <Icon
              defaultIcon={PartnershipContent.posco.default}
              coloredIcon={PartnershipContent.posco.colored}
              isCurrent={currentObj.title === "posco"}
            />
          </div>
        </div>

        <div className="col-span-3" />
        {/* h2 icon */}
        <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
          <div className="absolute w-[150%] -bottom-[85%] left-[40%]">
            <Icon
              defaultIcon={PartnershipContent.h2.default}
              coloredIcon={PartnershipContent.h2.colored}
              isCurrent={currentObj.title === "h2"}
            />
          </div>
        </div>

        <div className="col-span-2" />
        {/* MAIN CNRI */}
        <div className="relative ">
          <div className="absolute w-[200%] top-[50%] -left-[20%]">
            <img alt="logoImg" src="/images/logo.png" />
          </div>
        </div>

        <div className="col-span-2" />

        <div className="col-span-5  h-8" />
        <div className="col-span-1" />
        {/* totalBusiness icon */}
        <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
          <div className="absolute w-[150%] bottom-[40%] -left-[20%]">
            <Icon
              defaultIcon={PartnershipContent.totalBusiness.default}
              coloredIcon={PartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title === "totalBusiness"}
            />
          </div>
        </div>

        <div className="col-span-1" />
        {/* snu icon */}
        <div role="button" onMouseOver={MouseOver} onMouseLeave={MouseOut} className="relative">
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
      {/* 오른쪽 내용 부분 */}
      <div className="col-span-2 ml-40">
        {/* 만야에 hasMultiple --> 내용이 1개 이상이면 Carousel 형태로 보여주기 아니면 그냥 currentObj 내용 보내주기 */}
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
