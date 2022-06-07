import VideoOnHover from "../components/CompanyComponents/VideoOnHover";
import Member from "../components/CompanyComponents/Member";
import History from "../components/CompanyComponents/History";

const Company: React.FC = () => {
  return (
    <div className = "m-4 border-2 mx-16 ">
      <div className = "bg-slate-100 my-4">
        <div className = "text-5xl">Philosophy</div>
        <div className="flex ">
        <VideoOnHover/>
        <VideoOnHover/>
        <VideoOnHover/>           
        </div>
      </div>
      <div className = "bg-slate-200">
        <div className = "text-5xl">Members</div>
        <div className="flex overflow-x-auto space-x-7 w-[100%] border-4 py-4 no-scrollbar">
            <Member name = "min"/>
            <Member name = "jonghoh"/>
            <Member name = "prof"/>
            <Member name = "minhyeok"/>
            <Member name = "kyunghoh"/>
            <Member name = "cherin"/>
        </div>
      </div>
      <div className = "bg-slate-300 my-4">
        <div className = "text-5xl">History</div>
        <div className = "grid sm:grid-cols-1 md:grid-cols-2 gap-20 py-4">
        <History year = {2022}/>
        <History year = {2021}/>


        </div>
       

      </div>
    </div>
  );
};

export default Company;
