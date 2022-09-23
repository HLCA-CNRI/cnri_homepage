import {useState} from "react";

type MouseCallback = (e: any) => void;
type IsHover = boolean;
type ReturnTypes = [IsHover, MouseCallback, MouseCallback];

const useHover = (): ReturnTypes => {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnter = () => {
    setIsHover(true);
  };
  const onMouseLeave = () => {
    setIsHover(false);
  };

  return [isHover, onMouseEnter, onMouseLeave];
};

export default useHover;
