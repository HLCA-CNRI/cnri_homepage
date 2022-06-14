import React, { useState } from "react";

interface CarouselType {
  values: any;

}

const Carousel = ({ values }: CarouselType) => {
  const [current, setCurrent] = useState(0);
  const clickNext = (e: any) => {
    if (current == values.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const clickPrev = (e: any) => {
    if (current == 0) {
      setCurrent(values.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  return (
    <div className="w-[100%] border-2 flex justify-between">
      <button onClick={clickPrev}>←</button>
      <div className = "border-2">
        {values[current]}
        </div>
      <button onClick={clickNext}>→</button>
    </div>
  );
};

export default Carousel;
