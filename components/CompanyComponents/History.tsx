import { useState } from "react";
import stkImage from "../../images/stkImage.png";
import nature1 from "../../images/nature1.jpg";
import styled from "styled-components";
import { Button } from "flowbite-react";
import HistoryContent from "../../functions/HistoryContents";
import historyimg1 from "../../images/historyimg1.png";
import historyimg2 from "../../images/historyimg2.png";

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
    <div
      className="relative  overflow-hidden  shadow-lg cursor-pointer rounded-lg "
      onClick={clickButton}
    >
      {/* <BlackContainer /> */}

      {year == 2021 ? (
        <img src={historyimg2.src} className="object-cover w-full " />
      ) : (
        <img src={historyimg1.src} className="object-cover w-full h-full" />
      )}

      <div
        className={`${
          isActive
            ? "absolute top-0 left-0 px-6 py-4  w-[100%] h-[100%] bg-slate-600 opacity-60"
            : ""
        }`}
      />

      <div className={`absolute top-0 left-0 px-6 py-4  w-[100%]`}>
        <h4 className="text-7xl font-extrabold tracking-tight text-white flex w-[100%] justify-center mt-5">
          {year}
        </h4>

        {isActive ? (
          <button
          onClick={clickButton}
          className="mb-3 text-5xl font-semibold tracking-tight text-white flex w-[100%] justify-center  mt-3"
        >
          x
        </button>
        ) : (
          <button
          onClick={clickButton}
          className="mb-3 text-5xl font-semibold tracking-tight text-white flex w-[100%] justify-center  mt-3"
        >
          +
        </button>
        )}
        
        {isActive ? (
          <div className="text-white text-xl mx-16 mt-10">
            {HistoryContent[year].map((note: any) => (
              <div className="flex my-4 ">
                <div key={note} className="mr-4 font-semibold">
                  {note.month}
                </div>
                <div key={note} className="text-lg">
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

export default History;
