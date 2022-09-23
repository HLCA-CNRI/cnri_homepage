import React, {memo} from "react";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";

const Arrow = memo(({direction}: {direction: ArrowDirection}) => (
  <div>
    {direction === ArrowDirection.UP ? (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 45 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 22.5L22.5 5L40 22.5"
          stroke="#A8A8A8"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ) : direction === ArrowDirection.DOWN ? (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 45 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40 5L22.5 22.5L5 5"
          stroke="#A8A8A8"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ) : direction === ArrowDirection.RIGHT ? (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 28 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 5L22.5 22.5L5 40"
          stroke="#A8A8A8"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ) : direction === ArrowDirection.LEFT ? (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 28 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.5 40L5 22.5L22.5 5"
          stroke="#A8A8A8"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ) : (
      <svg
        className="invisible"
        width="100%"
        height="100%"
        viewBox="0 0 45 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5 22.5L22.5 5L40 22.5"
          stroke="#A8A8A8"
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )}
  </div>
));

export default Arrow;
