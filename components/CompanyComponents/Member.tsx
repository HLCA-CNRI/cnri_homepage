import {memo} from "react";
import Mem from "../../functions/MemberInfo";

interface MemeberType {
  name: string;
}
function Member({name}: MemeberType) {
  return (
    <section className="flex-shrink-1 h-[40vh] md:h-[50vh] mr-6  scroll-x rounded-lg border-[0.5px] ">
      <div className={` h-[100%] flex rounded-lg`}>
        <img
          alt="memImg"
          src={Mem[name].pic}
          className="w-[40vw] md:w-[20vw] pointer-events-none shadow-md rounded-l-lg object-cover"
        />
        <div className="bg-gray-100 w-[340px] xs:w-[400px] md:w-[450px] xl:w-[500px] 2xl:w-[580px] rounded-r-lg p-4 shadow-md text-gray-700">
          <div className="font-bold text-lg text-black ">{Mem[name].name}</div>
          <div className="mb-4 text-xs text-black">{Mem[name].position}</div>
          <div className="text-sm whitespace-pre-line">{Mem[name].description}</div>
        </div>
      </div>
    </section>
  );
}

export default memo(Member);
