import { memo, useState } from "react";

interface CarouselType {
  currentObj: any;
}

const Carousel = ({ currentObj }: CarouselType) => {
  const [current, setCurrent] = useState(0);
  const clickNext = (e: any) => {
    if (current == currentObj.title.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const clickPrev = (e: any) => {
    if (current == 0) {
      setCurrent(currentObj.title.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <>
      <div className=" hidden sm:flex text-[5.5vw]  font-semibold sm:text-4xl sm:pb-4 sm:h-20  justify-start sm:ml-12">{currentObj.kTitle[current]}</div>
      <div className="sm:h-[80%] sm:w-[90%] flex justify-center self-center xl:h-[60%]">
        <div className="w-[100%] border-2 flex justify-between">
          <button className="w-[20%]" onClick={clickPrev}>
            <div className="w-[100%] flex justify-center">
              <img className="w-8" src="./images/buttonImg/leftBtn.png"></img>
            </div>
          </button>
          <div className="border-2">{currentObj.img[current]}</div>
          <button className="w-[20%] " onClick={clickNext}>
            <div className="w-[100%] flex justify-center">
              <img className="w-8" src="./images/buttonImg/rightBtn.png"></img>
            </div>
          </button>
        </div>
      </div>
      <div className="  sm:hidden text-[5.5vw]  font-semibold sm:text-4xl sm:pb-4 sm:h-20  justify-start pb-[1vh] pt-[2vh]">{currentObj.kTitle[current]}</div>
      <div className="text-lg  sm:px-8">
        <ul>
          {currentObj.content[current].map((note: string) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default memo(Carousel);
