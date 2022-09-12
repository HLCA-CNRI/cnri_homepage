import {memo, useState} from "react";
import HistoryContent from "../../functions/HistoryContents";

interface HistoryCompType {
  year: number; // HistoryContent Object에서 특정 year을 key로 사용
}

function HistoryComp({year}: HistoryCompType) {
  // 카드가 펼쳐져있는지 확인하는 state
  const [isActive, setIsActive] = useState(false);
  // 카드 펼치고 닫기 기능 구현 --> button에 onClick으로 사용 됨
  const clickButton = () => {
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

      <div className="absolute top-0 left-0 px-[2vw] w-[100%]">
        <h4 className="text-[10vw] md:text-[6vw] lg:text-[110px] font-extrabold tracking-tight text-white flex w-[100%] justify-center mt-[2vh]">
          {year}
        </h4>
        {/* 카드 펼쳐져있지 않으면 + 펼쳐져있으면 X */}
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

        {/* 펼쳐져있으면 내용 사져와서 내열하기 */}
        {isActive ? (
          <div className="text-white  mx-[6vw] ">
            {HistoryContent[year].content.map((note: any) => (
              <div
                key={note.month}
                className="flex my-[2vh] text-[2.5vw] md:text-[1vw] lg:text-[22px]">
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
