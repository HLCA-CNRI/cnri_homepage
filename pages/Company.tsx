import VideoOnHover from "../components/VideoOnHover";
import Member  from "../components/Member"
import History from "../components/History";

const Company: React.FC = () => {
  return (
    <div className = "m-4 border-2 mx-6">
      <div className = "bg-slate-100 my-4">
        <div className = "text-5xl">Philosophy</div>
        <div className="flex border-4">
        <VideoOnHover/>
        <VideoOnHover/>
        <VideoOnHover/>
           
        </div>
      </div>
      <div className = "bg-slate-200">
        <div className = "text-5xl">Members</div>
        <div className="flex overflow-x-auto space-x-7 w-[100%] border-4 py-4 no-scrollbar">
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
        </div>
   
       
      </div>
      <div className = "bg-slate-300 my-4">
        <div className = "text-5xl">History</div>
        <div className = "grid grid-cols-2 gap-4 py-4">
        <History year = {2022}/>
        <History year = {2021}/>

        </div>
       

      </div>
    </div>
  );
};

export default Company;
