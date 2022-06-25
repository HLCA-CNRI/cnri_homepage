import {memo, useState} from "react";
import HistoryContent from "../../functions/HistoryContents";

interface HistoryType {
  year: number;
}

function History({year}: HistoryType) {
  const [isActive, setIsActive] = useState(false);

  const clickButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      role="button"
      className="relative  overflow-hidden  shadow-lg cursor-pointer rounded-lg "
      onClick={clickButton}>
      {/* <BlackContainer /> */}

      {year === 2021 ? (
        <img alt="history1Img" src="/images/historyimg2.png" className="object-cover w-full " />
      ) : (
        <img
          alt="history2Img"
          src="/images/historyimg1.png"
          className="object-cover w-full h-full"
        />
      )}

      <div
        className={`${
          isActive ? "absolute top-0 left-0  w-[100%] h-[100%] bg-slate-600 opacity-60" : ""
        }`}
      />

      <div className="absolute top-0 left-0 px-[2vw] w-[100%]">
        <h4 className="text-[10vw] md:text-[6vw] font-extrabold tracking-tight text-white flex w-[100%] justify-center mt-[2vh]">
          {year}
        </h4>

        {isActive ? (
          <button
            type="button"
            onClick={clickButton}
            className="mb-[1vh] text-[3vw] font-semibold tracking-tight text-white flex w-[100%] justify-center ">
            ×
          </button>
        ) : (
          <button
            type="button"
            onClick={clickButton}
            className="mb-[1vh] text-[4vw] font-semibold tracking-tight text-white flex w-[100%] justify-center  ">
            +
          </button>
        )}

        {isActive ? (
          <div className="text-white  mx-[6vw] ">
            {HistoryContent[year].map((note: any) => (
              <div key={note.month} className="flex my-[2vh] text-[2.5vw] md:text-[1vw]">
                <div key={note.month} className="mr-4 font-semibold">
                  {note.month}
                </div>
                <div key={note.des} className="">
                  {note.des}
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default memo(History);
