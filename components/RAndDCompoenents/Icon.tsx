import { memo, useState } from "react";
import { Transition } from "@tailwindui/react";

interface IconType {
  defaultIcon: any;
  coloredIcon: any;
  isCurrent: boolean;
  hasMultiple: boolean;
}

const Icon = ({ defaultIcon, coloredIcon, isCurrent, hasMultiple }: IconType) => {
  const [isColored, setIsColored] = useState(false);
  const changeToColored = (e: any) => {
    setIsColored(true);
  };
  const changeToDefault = (e: any) => {
    setIsColored(false);
  };
  return (
    <div onMouseOver={changeToColored} onMouseLeave={changeToDefault}>
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
};

export default memo(Icon);
