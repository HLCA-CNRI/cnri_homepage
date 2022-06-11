import { ContactlessOutlined } from "@material-ui/icons";
import { useRef, useEffect } from "react";
import SlideShow from "../components/SlideShow";
// import { TruckColor,TruckNoColor } from "../functions/LCAContents";
import Prac from "../components/Pac";

const Product: React.FC = () => {
  const leafObject = useRef<null | HTMLObjectElement>(null);
  const square = useRef<null | HTMLVideoElement>(null);
  useEffect(() => {
      if(square && square.current){
        console.log(square.current.src);
        square.current.src = "./video/measure4.mp4"

      }
    
  }, []);
  const onMouseEnter = (e: any) => {
    console.log("Look ma!");
  };

  return (
    <div className="px-16 border-4 h-[5000px]">
      <div className="w-[100%] bg-slate-200">
        <SlideShow />
      </div>
      <div className="text-5xl pt-10">What is LCA?</div>

      <div className="grid grid-cols-3">
        <div className="col-span-2 border-4 p-4 bg-slate-400">
          <div className="border-4">Hello</div>
        </div>
        <div className="border-4  grid grid-cols-5">
          <div className="border-2 col-span-2"></div>
          <div className="flex justify-center" onMouseEnter={onMouseEnter}>
            <object
              ref={leafObject}
              id="animated-svg"
              type="image/svg+xml"
              data="./svg/leaf.svg"
            >
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-2"></div>
          <div className="flex justify-center">
            <object type="image/svg+xml" data="./svg/car.svg">
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-3"></div>
          <div className="flex justify-center">
            <object type="image/svg+xml" data="./svg/factory.svg">
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-2"></div>
          <div className="flex justify-center">
            <object type="image/svg+xml" data="./svg/leaf.svg">
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-2"></div>
          <div className="flex justify-center">
            <object type="image/svg+xml" data="./svg/manufacture.svg">
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-3"></div>
          <div className="flex justify-center">
            <object type="image/svg+xml" data="./svg/recycle.svg">
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-2"></div>
          <div className="flex justify-center">
            <object type="image/svg+xml" data="./svg/battery.svg">
              svg-animation
            </object>
          </div>
          <div className="border-2 col-span-2"></div>
        </div>
      </div>
      <div className = "grid grid-cols-3">
      <div className="grid grid-cols-5">
        <div className="border-2 col-span-2"></div>
        <Prac />
        <div className="border-2 col-span-2"></div>
      </div>
      <div className = "col-span-2">
      <video ref = {square} src={(`./video/video1.mp4`)}  autoPlay loop  /> 
      </div>

      </div>
     
    </div>
  );
};

export default Product;
