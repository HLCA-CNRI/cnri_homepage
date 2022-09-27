import React, {memo} from "react";
import Image from "next/image";
import {MemberType} from "../../functions/MemberContent";

const MemberCard = memo(({member}: {member: MemberType}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={`w-[200px] h-[200px] rounded-[50%] translate-y-2/4 border-2 relative overflow-hidden  `}>
        <Image layout="fill" src={member.pic_square} />
      </div>
      <div className=" w-[330px] h-[350px] border-2 rounded-forImg pt-[100px] px-10 ">
        <div className="flex flex-col justify-center items-center ">
          <h4 className="font-semibold text-[25px] pt-[8px] pb-3px">{member.name}</h4>
          <div className="pb-[13px] font-medium">{member.position}</div>
        </div>
        <div>{member.description}</div>
      </div>
    </div>
  );
});

export default MemberCard;
