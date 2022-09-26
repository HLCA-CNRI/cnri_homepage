import React, {useState, useRef, memo} from "react";
import styled from "styled-components";
import {PopUpContents} from "../functions/PopUpContents";

const PopUp = () => {
  const [isOpened, setIsOpened] = useState(true);
  const delBtnId = useRef("delete");
  const onDelbtnClick = (e: any) => {
    const {id} = e.target;
    if (id === delBtnId.current) {
      setIsOpened(false);
    } else {
      window.location.href = "https://lca.oopy.io/";
    }
  };
  return (
    <>
      <div> </div>
      {isOpened ? (
        <div
          role="button"
          id={delBtnId.current}
          onClick={onDelbtnClick}
          className={`flex justify-center items-center  fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[999] `}>
          {/* PC version */}
          <div
            className={`hidden md:block landscape:block absolute w-[880px] h-[490px] bg-popup-img bg-cover z-[200] rounded-forPopup  shadow-md `}>
            <div className="px-[34px] py-[37px]">
              <div
                role="button"
                id={delBtnId.current}
                onClick={onDelbtnClick}
                className="relative text-[28px] font-semibold text-light_gray top-[-20px] hover:cursor-pointer">
                ×
              </div>
              <div className="mx-8 relative">
                <h2 className="text-[35px] whitespace-pre font-bold">{PopUpContents.title}</h2>
                <ul className="my-4 mx-2">
                  {PopUpContents.list.map((content) => (
                    <li key={content} className="text-[22px] py-2">
                      {content}
                    </li>
                  ))}
                </ul>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lca.oopy.io/"
                  className="inline-block mx-4 bg-white text-popup_text text-[30px] font-semibold rounded-md px-[30px] py-[8px] shadow-md">
                  안내 바로가기
                </a>
                <div className="absolute right-[260px] bottom-[-30px] text-[3px] text-[gray]  ">
                  예상 결과물
                </div>
              </div>
            </div>
            <footer className=" absolute w-full text-center text-white text-[13px]  leading-[50px] bottom-0 transform:transition w-full h-[40px]">
              CNRIKOREA
            </footer>
          </div>

          {/* Moblie version */}
          <MobliePopUp className="md:hidden landscape:hidden relative  overflow-hidden m-auto w-[77vw] h-[68vh] bg-popup-img-moblie bg-cover pt-[1.7vh]">
            <div
              role="button"
              id={delBtnId.current}
              onClick={onDelbtnClick}
              className="relative text-1vw] font-normal text-light_gray  hover:cursor-pointer left-[4vw]">
              ×
            </div>
            <div className="text-[4.5vw] font-bold text-center whitespace-pre mt-[2vh] mb-[2vh]">
              {PopUpContents.title}
            </div>
            <div className="static">
              {/* 첫번째줄 */}
              <div className="block relative py-[0.5vh]">
                <span className="listContainer dummyList right-[72vw]">
                  {PopUpContents.list[2]}
                </span>
                <span className="listContainer realList left-[9vw]">{PopUpContents.list[0]}</span>
                <span className="listContainer dummyList left-[68vw] ">
                  {PopUpContents.list[1]}
                </span>
              </div>
              {/* 두번째줄 */}
              <div className="block relative top-[5vh] py-[0.5vh]">
                <span className="listContainer dummyList right-[63vw]">
                  {PopUpContents.list[0]}
                </span>
                <span className="listContainer realList left-[17vw]">{PopUpContents.list[1]}</span>
              </div>
              {/* 세번째줄 */}
              <div className="block relative top-[10vh] py-[0.5vh]">
                <span className="listContainer realList left-[3vw]">{PopUpContents.list[2]}</span>
                <span className="listContainer dummyList left-[66vw]  ">
                  {PopUpContents.list[0]}
                </span>
              </div>
            </div>

            <div className="absolute bottom-[7vh] text-[2.8vw] text-[gray] left-[19vw]">
              예상 결과물
            </div>
            <div className="bottom-0 absolute w-full text-white text-center text-[18px] h-[9vh] bg-popup_btn">
              <div className="h-[75%] flex items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://lca.oopy.io/"
                  className="block w-full m-0">
                  안내 바로가기
                </a>
              </div>
              <div className=" bottom-0 w-full h-[25%] z-[999] text-[2vw] border-t-[0.1vh] py-[0.3vh] border-dashed ">
                CNRIKOREA
              </div>
            </div>
          </MobliePopUp>
        </div>
      ) : null}
    </>
  );
};

export default memo(PopUp);

const MobliePopUp = styled.div`
  .dummyList {
    color: rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.7);
    text-overflow: clip;
  }
  .realList {
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  }

  .listContainer {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    position: absolute;
    height: 4.5vh;
    font-size: 3.8vw;
    font-weight: 500;
    padding: 0 2vw;
    line-height: 4.5vh;
    border-radius: 5px;
    padding: 0 5vw;
  }
`;
