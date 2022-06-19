import Icon from "../RAndDCompoenents/Icon";
import { LCAContents } from "@/functions/LCAContents";
import { useState } from "react";

const LCAMobile = () => {
  const [currentObj, setCurrentObj] = useState(LCAContents.resources);
  return (
    <div>
      <div className="border-2 grid grid-cols-3 ">
      <div className="border-2 flex justify-center py-[1vh]">
          <div className="w-[60%] ">
            <div className="flex justify-center">One</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={true}
              hasMultiple={false}
            />
          </div>
        </div>

        <div className="border-2 flex justify-center py-[1vh]">
          <div className="w-[60%] ">
            <div className="flex justify-center">One</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={true}
              hasMultiple={false}
            />
          </div>
        </div>

        <div className="border-2 flex justify-center py-[1vh]">
          <div className="w-[60%] ">
            <div className="flex justify-center">One</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={true}
              hasMultiple={false}
            />
          </div>
        </div>
        <div className="border-2 flex justify-center py-[1vh]">
          <div className="w-[60%] ">
            <div className="flex justify-center">One</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={true}
              hasMultiple={false}
            />
          </div>
        </div>
        <div className="border-2 flex justify-center py-[1vh]">
          <div className="w-[60%] ">
            <div className="flex justify-center">One</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={true}
              hasMultiple={false}
            />
          </div>
        </div>

        <div className="border-2 flex justify-center py-[1vh]">
          <div className="w-[60%] ">
            <div className="flex justify-center">One</div>
            <Icon
              defaultIcon={LCAContents.endOfLife.default}
              coloredIcon={LCAContents.endOfLife.colored}
              isCurrent={true}
              hasMultiple={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LCAMobile;
