import {memo, useState} from "react";

interface CarouselType {
  currentObj: any;
}

function Carousel({currentObj}: CarouselType) {
  const [current, setCurrent] = useState(0);
  const clickNext = () => {
    if (current === currentObj.title.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const clickPrev = () => {
    if (current === 0) {
      setCurrent(currentObj.title.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <>
      <div className=" hidden sm:flex text-[5.5vw]   sm:text-4xl sm:pb-4 sm:h-20  justify-start ">
        {currentObj.kTitle[current]}
      </div>
      <div>
        <div>
          <div className="flex justify-center self-center">
            <button type="button" onClick={clickPrev} className="w-[20%]">
              <div className="w-[100%] ">
                <img alt="leftButtonImg" className="w-8" src="./images/buttonImg/leftBtn.png" />
              </div>
            </button>

            <div className="h-[20vh] md:h-[35vh] max-w-[80%] object-contain">
              {currentObj.img[current]}
            </div>

            <button type="button" onClick={clickNext} className="w-[20%]">
              <div className="w-[100%] flex justify-end">
                <img alt="leftButtonImg" className="w-8" src="./images/buttonImg/rightBtn.png" />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="  sm:hidden text-[5.5vw]  font-semibold  sm:pb-4 sm:h-20  justify-start pb-[1vh] pt-[2vh]">
        {currentObj.kTitle[current]}
      </div>
      {/* font size display size sm이때 안매겨짐  */}
      <div className="  hidden md:flex md:text-md  pt-4   ">
        <ul>
          {currentObj.content[current].map((note: string) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

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
