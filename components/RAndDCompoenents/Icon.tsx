import {memo, useState} from "react";
import {Transition} from "@tailwindui/react";

interface IconType {
  defaultIcon: any;
  coloredIcon: any;
  isCurrent: boolean;
}

function Icon({defaultIcon, coloredIcon, isCurrent}: IconType) {
  const [, setIsColored] = useState(false);
  const changeToColored = () => {
    setIsColored(true);
  };
  const changeToDefault = () => {
    setIsColored(false);
  };
  return (
    <div onFocus={() => 0} onMouseOver={changeToColored} onMouseLeave={changeToDefault}>
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
