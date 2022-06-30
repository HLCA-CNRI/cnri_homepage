import {memo, useState} from "react";
import {Transition} from "@tailwindui/react";

interface IconType {
  defaultIcon: any;
  coloredIcon: any;
  isCurrent: boolean;
}
// 아이콘 컴포넌트: 현제 아이콘이라면 colored 아니라면 deafult 애니메이션 까지 추가함
function Icon({defaultIcon, coloredIcon, isCurrent}: IconType) {
  return (
    <div>
      <Transition
        show={isCurrent}
        className={isCurrent ? "" : "hidden"}
        enter="transition-opacity duration-700 ease-in"
        enterFrom="opacity-30"
        enterTo="opacity-100"
        leave="transition-opacity duration-700 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-30">
        {coloredIcon}
      </Transition>
      <Transition
        show={!isCurrent}
        className={!isCurrent ? "" : "hidden"}
        enter="transition-opacity duration-700 ease-in"
        enterFrom="opacity-30"
        enterTo="opacity-100"
        leave="transition-opacity duration-700 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-30">
        {defaultIcon}
      </Transition>
    </div>
  );
}

export default memo(Icon);
