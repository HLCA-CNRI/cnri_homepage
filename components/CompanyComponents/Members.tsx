import React, {memo, useRef, useState} from "react";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import MemberContent from "../../functions/MemberContent";
import {ScrollContainer} from "../../styles/commonStyles";
import Arrow from "../RAndDComponents/Arrow";
import MemberCard from "./MemberCard";

const Members = memo(() => {
  const [curFirstIdx, setCurFirstIdx] = useState(0);
  const members = useRef([
    MemberContent.min,
    MemberContent.jonghoh,
    MemberContent.prof,
    MemberContent.hyeonseo,
    MemberContent.yoondeok,
    MemberContent.jeongyun,
    MemberContent.jihyung,
    MemberContent.hyelim,
  ]);

  const onArrowClick = (e: any) => {
    const {id} = e.currentTarget;
    switch (id) {
      case ArrowDirection.LEFT:
        curFirstIdx > 0 && setCurFirstIdx((cur) => cur - 1);
        break;
      case ArrowDirection.RIGHT:
        curFirstIdx < members.current.length - 3 && setCurFirstIdx((cur) => cur + 1);
        break;
      default:
        break;
    }
  };
  return (
    <div className="w-full">
      {/* PC ver */}
      <div className="hidden xl:flex  items-center justify-center h-full">
        <div
          role="button"
          className={`block h-full  pt-[130px] ${curFirstIdx === 0 ? "invisible" : ""} `}
          onClick={onArrowClick}
          id={ArrowDirection.LEFT}>
          <div className="w-[20px] mr-6 h-full">
            <Arrow direction={ArrowDirection.LEFT} />
          </div>
        </div>

        {members.current.map(
          (m, idx) =>
            (idx === curFirstIdx || idx === curFirstIdx + 1 || idx === curFirstIdx + 2) && (
              <div key={m.name} className={`${idx === curFirstIdx + 1 ? "mx-8" : ""}`}>
                <MemberCard member={m} />
              </div>
            )
        )}
        <div
          role="button"
          className={`mt-[130px] ${curFirstIdx === members.current.length - 3 ? "invisible" : ""} `}
          onClick={onArrowClick}
          id={ArrowDirection.RIGHT}>
          <div className="w-[20px] ml-6">
            <Arrow direction={ArrowDirection.RIGHT} />
          </div>
        </div>
      </div>

      {/* mobile ver */}
      <ScrollContainer className="snap-x snap-mandatory xl:hidden scroll-container flex overflow-auto cursor-pointer pb-[3vh]">
        {members.current.map((m) => (
          <div key={m.name} className="mx-8 snap-center">
            <MemberCard member={m} />
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
});

export default Members;
