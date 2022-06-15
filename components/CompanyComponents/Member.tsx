import Mem from "../../functions/MemberInfo"

interface MemeberType {
  name: string;
}
const Member = ({ name }: MemeberType) => {
  return (
    <section className="flex-shrink-1 xs: w-[60%] sm:w-[50%] md:w-[28%] mr-6  scroll-x rounded-lg border-[0.5px] ">
      <div className={` h-[100%] flex rounded-lg`}>
        <img src={Mem[name].pic} className="w-[50%] pointer-events-none shadow-md rounded-l-lg object-cover" />
        <div className="bg-gray-100 w-[500px] rounded-r-lg p-4 shadow-md text-gray-700">
          <div className="font-bold text-lg text-black">{Mem[name].name}</div>
          <div className = "mb-4 text-xs text-black">{Mem[name].position}</div>
          <div className = "text-sm">{Mem[name].description}</div>
        </div>
      </div>
    </section>
  );
};

export default Member;

