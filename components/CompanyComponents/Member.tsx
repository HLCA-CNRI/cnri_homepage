import {memo} from "react";
import MemberContent from "../../functions/MemberContent";

interface MemeberType {
  name: string; // Mem Object에서 특정 맴버 key 사용
}
function Member({name}: MemeberType) {
  return (
    <section className="  flex flex-shrink-1 h-[40vh] md:h-[50vh] mr-6  scroll-x rounded-lg border-[0.5px] lg:w-[900px] lg:h-[450px] ">
      {/* 이미지 */}
      <img
        alt="memImg"
        src={MemberContent[name].pic}
        className="w-[40vw] md:w-[20vw] pointer-events-none shadow-md rounded-l-lg object-cover "
      />
      {/* 내용 */}
      <div className="bg-gray-100 w-[340px] xs:w-[400px] md:w-[450px] xl:w-[500px] 2xl:w-[580px] rounded-r-lg p-4 shadow-md text-gray-700">
        <div className="font-bold text-lg text-black ">{MemberContent[name].name}</div>
        <div className="mb-4 text-xs text-black">{MemberContent[name].position}</div>
        <div className="text-sm whitespace-pre-line leading-relaxed">
          {MemberContent[name].description}
        </div>
      </div>
    </section>
  );
}

export default memo(Member);
