import React, {memo} from "react";

type Props = {
  title: string;
  content: string;
  img: any;
  heightAuto: boolean;
};

const PartenershipMobileContentCard = memo(({title, content, img, heightAuto = true}: Props) => (
  <div
    className={`w-[80vw] flex flex-col justify-center items-center bg-partnership_bg rounded-[3vw] px-[3vw] py-[2vh] ${
      heightAuto ? "h-auto" : "h-[50vh] landscape:h-auto"
    }`}>
    <div>{img}</div>
    <div className="px-[2vw] text-left">
      <h4 className="text-[3.6vw] font-semibold py-[1vh] pt-[1.6vh]">{title}</h4>
      <div className="text-[2vw] ">{content}</div>
    </div>
  </div>
));

export default PartenershipMobileContentCard;
