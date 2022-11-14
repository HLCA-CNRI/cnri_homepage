import classNames from "classnames";
import React, {memo} from "react";

const ProcessPageTitle = memo(({title, isBgMint = false}: {title: string; isBgMint?: boolean}) => (
  <div
    className={classNames(
      "text-[6vw] w-[70vw] mt-[1vh] md:landscape:text-[1.5vw] md:landscape:w-[50vw] md:landscape:py-3 md:landscape:border-b-[0.1rem]  font-bold   text-center ",
      {
        "text-white md:landscape:border-white": isBgMint,
        "text-dark_gray md:landscape:border-dark_gray": !isBgMint,
      }
    )}>
    {title}
  </div>
));

export default ProcessPageTitle;
