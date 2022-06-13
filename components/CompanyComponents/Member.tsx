import Mem from "../../functions/MemberInfo"

interface MemeberType {
  name: string;
}
const Member = ({ name }: MemeberType) => {
  return (
    <section className="flex-shrink-1 xs: w-[60%] sm:w-[50%] md:w-[28%] ml-2 mr-2 shadow-md scroll-x ">
      <div className={` h-[100%] flex rounded-lg`}>
        <img src={Mem[name].pic} className="w-[50%] pointer-events-none rounded-l-lg object-cover" />
        <div className="bg-slate-400 w-[500px] rounded-r-lg">
          <div className="font-bold">{Mem[name].name}</div>
          <div>{Mem[name].position}</div>
          <div>{Mem[name].description}</div>
        </div>
      </div>
    </section>
  );
};

export default Member;

