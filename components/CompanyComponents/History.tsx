import { memo, useState } from "react";
import styled from "styled-components";
import { Button } from "flowbite-react";
import HistoryContent from "../../functions/HistoryContents";

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100px;
`;

const BlackContainer = styled(Container)`
  background-color: black;
`;

const RedContainer = styled(Container)`
  background-color: red;
`;

interface HistoryType {
  year: number;
}

const History = ({ year }: HistoryType) => {
  const [isActive, setIsActive] = useState(false);

  const clickButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative  overflow-hidden  shadow-lg cursor-pointer rounded-lg " onClick={clickButton}>
      {/* <BlackContainer /> */}

      {year == 2021 ? (
        <img src={"/images/historyimg2.png"} className="object-cover w-full " />
      ) : (
        <img src={"/images/historyimg1.png"} className="object-cover w-full h-full" />
      )}

      <div className={`${isActive ? "absolute top-0 left-0  w-[100%] h-[100%] bg-slate-600 opacity-60" : ""}`} />

      <div className={`absolute top-0 left-0 px-[2vw] w-[100%]`}>
        <h4 className="text-[10vw] md:text-[6vw] font-extrabold tracking-tight text-white flex w-[100%] justify-center mt-[2vh]">{year}</h4>

        {isActive ? (
          <button onClick={clickButton} className="mb-[1vh] text-[3vw] font-semibold tracking-tight text-white flex w-[100%] justify-center ">
            ×
          </button>
        ) : (
          <button onClick={clickButton} className="mb-[1vh] text-[4vw] font-semibold tracking-tight text-white flex w-[100%] justify-center  ">
            +
          </button>
        )}

        {isActive ? (
          <div className="text-white  mx-[6vw] ">
            {HistoryContent[year].map((note: any) => (
              <div key={note.month} className="flex my-[2vh] text-[2vw] md:text-[1vw]">
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
};

export default memo(History);
