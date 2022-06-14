import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import VideoOnHover from "../../components/CompanyComponents/VideoOnHover";
import Member from "../../components/CompanyComponents/Member";
import History from "../../components/CompanyComponents/History";
import SlideShow from "../../components/SlideShow";
import companyIntro from "../../images/companyIntro.jpg"
import { SignalCellularNoSimSharp } from "@material-ui/icons";


const Company: React.FC = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (carousel && carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="m-4 mx-16 ">
      <div className="my-4 mb-20">
        <div className=" h-[80vh] mb-20">
          <img src = {companyIntro.src} className = "object-cover h-full w-full rounded-lg shadow-lg" ></img>
          {/* <SlideShow /> */}
        </div>
        <div className="text-5xl font-semibold  mb-5">Philosophy</div>
        <div className="flex">
          <VideoOnHover videoPath="./video/philosophy1.mp4" isMiddle = {false}/>
          <VideoOnHover  videoPath="./video/philosophy2.mp4" isMiddle = {true}/>
          <VideoOnHover  videoPath="./video/philosophy3.mp4" isMiddle = {false}/>
         
        
        </div>
      </div>
      <div className= "mb-20">
        <div className="text-5xl font-semibold mb-5">Members</div>
        {/* <div className="flex overflow-x-auto space-x-7 w-[100%] border-4 py-4 no-scrollbar"> */}
        <motion.div ref={carousel} className="cursor-grab  overflow-x-auto no-scrollbar pl-18  bg-white">
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex">
            <Member name="min" />
            <Member name="jonghoh" />
            <Member name="prof" />
            <Member name="minhyeok" />
            <Member name="kyunghoh" />
            <Member name="cherin" />
          </motion.div>
        </motion.div>

        {/* </div> */}
      </div>
      <div className="my-4">
        <div className="text-5xl font-semibold mb-5">History</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          <History year={2022} />
          <History year={2021} />
        </div>
      </div>
    </div>
  );
};

export default Company;
