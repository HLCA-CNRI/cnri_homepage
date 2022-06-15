import React, { useState } from "react";

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
      <div className="text-4xl pb-4 h-20">{currentObj.kTitle[current]}</div>
      <div className="h-[80%] w-[90%] flex justify-center self-center xl:h-[60%]">
        <div className="w-[100%] border-2 flex justify-between">
          <button onClick={clickPrev}>←</button>
          <div className="border-2">{currentObj.img[current]}</div>
          <button onClick={clickNext}>→</button>
        </div>
      </div>
      <div className="text-lg ">
        <ul>
          {currentObj.content[current].map((note: string) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
