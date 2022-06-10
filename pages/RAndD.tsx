import SlideShow from "../components/SlideShow";
const RAndD = () => {
  return (
    <div className="m-4 border-2 mx-16 ">
      <div className="w-[100%] bg-slate-200">
        <SlideShow />
      </div>
      <div className="w-[100%] bg-slate-300 p-4">
        <div className="text-5xl">What is LCA?</div>
      </div>
      <div className="w-[100%] bg-slate-400 p-4">
        <div className="text-5xl">Our Work and Partnership</div>
        <div>
          <svg height="140" width="500">
            <ellipse
              cx="200"
              cy="80"
              rx="100"
              ry="50"
              className="fill:yellow;stroke:purple;stroke-width:2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RAndD;
