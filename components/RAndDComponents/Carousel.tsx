import {memo, useState} from "react";

interface CarouselType {
  currentObj: any; // 현제 옵젝트
}

function Carousel({currentObj}: CarouselType) {
  const [current, setCurrent] = useState(0); // 현제 옵젝트에 어떤 내용인지 알려주는 state.
  // 다음 내용을 지정시킴. 만약 마지막 내용일 경유 첫번째 내용으로 지정함.
  const clickNext = () => {
    if (current === currentObj.title.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };
  // 전 내용을 지정시킴. 만약 마지막 첫번째 내용일 경유 마지막 내용으로 지정함.
  const clickPrev = () => {
    if (current === 0) {
      setCurrent(currentObj.title.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <>
      {/* When display is greater than sm:맨위에 제목 부분 */}
      <div className=" hidden sm:flex text-[5.5vw]   sm:text-4xl sm:pb-4 sm:h-20  justify-start ">
        {currentObj.kTitle[current]}
      </div>
      {/* 중간에 사진이란 previous next 버튼 부분 */}
      <div className="flex justify-center self-center">
        {/* previous 버튼 */}
        <button type="button" onClick={clickPrev} className="w-[20%]">
          <div className="w-[100%] ">
            <img alt="leftButtonImg" className="w-8" src="./images/buttonImg/leftBtn.png" />
          </div>
        </button>
        {/* 현제 이미지 */}
        <div className="h-[20vh] md:h-[35vh] max-w-[80%] object-contain">
          {currentObj.img[current]}
        </div>
        {/* next 버튼 */}
        <button type="button" onClick={clickNext} className="w-[20%]">
          <div className="w-[100%] flex justify-end">
            <img alt="leftButtonImg" className="w-8" src="./images/buttonImg/rightBtn.png" />
          </div>
        </button>
      </div>
      {/* When display is smaller than sm:밑에 제목 부분 */}
      <div className="  sm:hidden text-[5.5vw]  font-semibold  sm:pb-4 sm:h-20  justify-start pb-[1vh] pt-[2vh]">
        {currentObj.kTitle[current]}
      </div>
      {/* When display is greater than md:내용 */}
      <div className="  hidden md:flex md:text-md  pt-4">
        <ul>
          {currentObj.content[current].map((note: string) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
      {/* hen display is smaller than sm::내용 */}
      <div className=" md:hidden text-[3vw]">
        <ul>
          {currentObj.content[current].map((note: string) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default memo(Carousel);
