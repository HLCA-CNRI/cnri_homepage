interface PhilosophyMobileType {
  videoPath: string;
  type: {
    title: string;
    content: string[];
  };
}

const PhilosophyMobile = ({ videoPath, type }: PhilosophyMobileType) => {
  return (
    <section className="flex-shrink-1 xs: w-80  mr-[3vw]  scroll-x rounded-lg border-[0.5px] ">
      <div className={` h-[100%] flex rounded-lg`}>
        <div className="relative bg-gray-100 w-[500px] rounded-r-lg  shadow-md text-gray-700">
          <video
            src={videoPath}
            loop
            muted
            className=" object-cover h-[60vh] flex-wrap  rounded-lg shadow-xl"
          />
          <div className=" absolute inset-0 flex justify-start items-end z-10 px-4 pb-2 ">
          <div>
          <div className=" text-[6vw] text-white font-semibold mb-4 underline underline-offset-8">{type.title}</div>
          <ul className="text-[2vw] whitespace">
            {type.content.map((val: string) => (
              <li className="text-white my-1" key={val}>
                {val}
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyMobile;
