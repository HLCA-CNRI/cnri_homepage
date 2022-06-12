import { useState } from "react";
import stkImage from "../../images/stkImage.png"
import nature1 from "../../images/nature1.jpg"
import styled from "styled-components";
import { Button } from "flowbite-react";


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
    console.log("click!");
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
        <li>법인 설립</li>
        <li>창헙진흥원 주관</li>
        <li>국토교통부, 사업통산자원부 주요 LCA R&D</li>
        <li>서울대학교 창업단 입주기업 선정</li>
        <li>서울대학교 송한호 교수, 국토교통부 장관 표창 수상</li>
     </div>:
     ""}

    </div>
     </div>

     
  );
};

export default History;
