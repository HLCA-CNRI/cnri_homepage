import React, {memo, useRef, useState} from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import MemberContent from "../../functions/MemberContent";
import Arrow from "../RAndDComponents/Arrow";
import MemberCard from "./MemberCard";

const Members = memo(() => {
  const [curFirstIdx, setCurFirstIdx] = useState(0);
  //   const [cur];s
  const members = useRef([
    MemberContent.min,
    MemberContent.jonghoh,
    MemberContent.prof,
    MemberContent.minhyeok,
    MemberContent.kyunghoh,
    MemberContent.cherin,
  ]);

  const onArrowClick = (e) => {
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
    <div className="flex w-[100%] flex-nowrap items-center">
      {/* PC ver */}
      <div className="hidden xl:flex flex-nowrap items-center justify-center">
        <div
          role="button"
          className={`mt-[200px] ${curFirstIdx === 0 ? "invisible" : ""} `}
          onClick={onArrowClick}
          id={ArrowDirection.LEFT}>
          <Arrow direction={ArrowDirection.LEFT} />
        </div>
        <div className=" flex overflow-hidden">
          {members.current.map(
            (m, idx) =>
              (idx === curFirstIdx || idx === curFirstIdx + 1 || idx === curFirstIdx + 2) && (
                <div key={m.name} className="mx-10 ">
                  <MemberCard member={m} />
                </div>
              )
          )}
        </div>
        <div
          role="button"
          className={`mt-[200px] ${curFirstIdx === members.current.length - 3 ? "invisible" : ""} `}
          onClick={onArrowClick}
          id={ArrowDirection.RIGHT}>
          <Arrow direction={ArrowDirection.RIGHT} />
        </div>
      </div>

      {/* mobile ver */}
      <ScrollContainer
        hideScrollbars={false}
        className=" xl:hidden scroll-container flex overflow-hidden cursor-pointer pb-[3vh]">
        {members.current.map((m, idx) => (
          <div key={m.name} className="mx-10 ">
            <MemberCard member={m} />
          </div>
        ))}
      </ScrollContainer>
    </div>
  );
});

export default Members;
