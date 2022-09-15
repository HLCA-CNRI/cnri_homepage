import {motion, useAnimation} from "framer-motion";
import {memo, useState} from "react";
import styled from "styled-components";
import HistoryContent from "../../functions/HistoryContents";
import TransitionVariants from "../../functions/TransitionVariants";

interface HistoryCompType {
  year: number; // HistoryContent Object에서 특정 year을 key로 사용
}

function HistoryComp({year}: HistoryCompType) {
  const controlHistoryBtn = useAnimation();
  // 카드가 펼쳐져있는지 확인하는 state
  const [isActive, setIsActive] = useState(false);
  // 카드 펼치고 닫기 기능 구현 --> button에 onClick으로 사용 됨
  const clickButton = () => {
    isActive ? controlHistoryBtn.start("rotateCW") : controlHistoryBtn.start("initial");

    setIsActive(!isActive);
  };

  return (
    // 전체가 버튼 형태로 구현
    <div
      role="button"
      className="relative  overflow-hidden  shadow-lg cursor-pointer rounded-lg "
      onClick={clickButton}>
      {/* 이미지 */}
      <img
        alt="historyImg"
        src={HistoryContent[year].imgPath}
        className="object-cover w-full h-full"
      />

      {/* 펼쳐져있으면 배경색 깔아주기 */}
      <div
        className={`${
          isActive ? "absolute top-0 left-0  w-[100%] h-[100%] bg-slate-600 opacity-60" : ""
        }`}
      />

      <div className="absolute top-0 left-0 px-[2vw] lg:px-[10px] w-[100%]">
        <h4 className="text-[10vw] md:text-[6vw] lg:text-[110px] lg:mt-[20px] font-extrabold tracking-tight text-white flex w-[100%] justify-center mt-[2vh]">
          {year}
        </h4>
        {/* 카드 펼쳐져있지 않으면 + 펼쳐져있으면 X */}
        <Button onClick={clickButton}>
          <motion.div animate={controlHistoryBtn} variants={TransitionVariants.RotateHistoryIcon}>
            ×
          </motion.div>
        </Button>

        {/* 펼쳐져있으면 내용 사져와서 내열하기 */}
        {isActive ? (
          <div className="text-white  mx-[6vw] lg:mx-[70px]">
            {HistoryContent[year].content.map((note: any) => (
              <div
                key={note.month}
                className="flex my-[2vh] text-[2.5vw] md:text-[1vw] lg:text-[17px] lg:my-[20px]">
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

export default memo(HistoryComp);

const Button = styled.div`
  margin-bottom: 1vh;
  font-size: 3vw;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  letter-spacing: -0.025em;
  width: 100%;

  @media only screen and (min-width: 1024px) {
    font-size: 45px;
  }
`;
