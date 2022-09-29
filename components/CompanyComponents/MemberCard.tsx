import React, {memo} from "react";
import Image from "next/image";
import {MemberType} from "../../functions/MemberContent";

const MemberCard = memo(({member}: {member: MemberType}) => (
  <div className="flex flex-col justify-center items-center">
    <div
      className={`w-[180px] h-[180px] rounded-[50%] translate-y-2/4 border-2 relative overflow-hidden bg-white mt-[-50px]  `}>
      <Image layout="fill" src={member.pic_square} sizes="200px" />
    </div>
    <div className=" w-[280px] h-[320px] border-2 rounded-forImg pt-[100px] px-10 ">
      <div className="flex flex-col justify-center items-center ">
        <h4 className="font-semibold text-[20px] pt-[8px] pb-3px">{member.name}</h4>
        <div className="pb-[13px] font-medium">{member.position}</div>
      </div>
      <div className="text-[13.5px]">{member.description}</div>
    </div>
  </div>
));

export default MemberCard;
