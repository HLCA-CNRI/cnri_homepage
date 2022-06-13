import { useState } from "react";
import stkImage from "../../images/stkImage.png"
import nature1 from "../../images/nature1.jpg"
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
    year:number
}

const History = ({year}:HistoryType) => {
  const [isActive, setIsActive] = useState(false)

  const clickButton = () => {
    setIsActive(!isActive)
    };


  return (
    <div className = "relative  overflow-hidden  shadow-lg cursor-pointe rounded-lg ">
      {/* <BlackContainer /> */}
      <img src={stkImage.src} className = "object-cover w-full "/>

     <div className ={`${isActive ?"absolute top-0 left-0 px-6 py-4  w-[100%] h-[100%] bg-slate-600 opacity-60":""}`}/>

     <div className ={`absolute top-0 left-0 px-6 py-4  w-[100%]`}>
       <h4 className="text-5xl font-semibold tracking-tight text-white flex w-[100%] justify-center">{year}</h4>
       <button onClick = {clickButton} className = "mb-3 text-3xl font-semibold tracking-tight text-white flex w-[100%] justify-center hover:rotate-45">+</button>
       {isActive ? 
     <div className = "text-white">
      <ul>{HistoryContent[year].content.map((note:string) => <li key = {note} >{note}</li>)}</ul>
     </div>:
     ""}

    </div>
     </div>

     
  );
};

export default History;
