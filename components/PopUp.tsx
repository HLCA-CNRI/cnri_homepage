import {useState, useRef, memo, useEffect} from "react";
import Image from "next/image";
import styled from "styled-components";
import {setCookie} from "cookies-next";
import {PopUpContents} from "../functions/PopUpContents";
import {CookieKey} from "../constants/enum/cookie_key.enum";
import pcBackground from "../public/images/popup_background.png";
import mbBackground from "../public/images/mobile_popup_background.png";

const PopUp = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [doesHideToday, setDoesHideToday] = useState(false);
  const delBtnId = useRef("delete");

  // 팝업 오늘 하루 안보기 쿠키 설정
  useEffect(() => {
    if (!doesHideToday) return;
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

    const options = {path: "/", expires: expireDate};

    setCookie(CookieKey.NOT_SHOW_TODAY, true, options);
  }, [doesHideToday]);

  const onDelbtnClick = (e: any) => {
    const {id} = e.target;
    if (id === delBtnId.current) {
      setIsOpened(false);
    } else {
      window.open("/lca");
    }
  };

  const onNotOpenPopup = (e: any) => {
    e.stopPropagation();
    setDoesHideToday((cur) => !cur);
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
            className={`hidden md:block landscape:block absolute w-[880px] h-[490px]  bg-cover z-[200] rounded-forPopup  shadow-md `}>
            <div className="w-full h-full absolute">
              <Image
                priority
                src={pcBackground}
                alt="background"
                sizes="880px"
                layout="fill"
                className="object-cover"
              />
            </div>
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
                  href={`${window.location.href}/lca`}
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
              <div
                role="button"
                className="absolute text-right w-full top-10 right-4"
                onClick={onNotOpenPopup}>
                <input type="checkbox" id="checkbox" checked={doesHideToday} />
                <span> 하루동안 열지 않기</span>
              </div>
            </footer>
          </div>

          {/* Moblie version */}
          <MobliePopUp className="md:hidden landscape:hidden relative  overflow-hidden m-auto w-[77vw] h-[68vh] bg-cover pt-[1.7vh]">
            <div className="absolute w-full h-full">
              <Image
                src={mbBackground}
                alt="popup background"
                layout="fill"
                sizes="77vw"
                className="object-cover z-[-10]"
              />
            </div>
            <div
              role="button"
              id={delBtnId.current}
              onClick={onDelbtnClick}
              className="relative top-[2vh] font-normal text-light_gray  hover:cursor-pointer left-[4vw]">
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

            <div className="absolute bottom-[10vh] text-[2.8vw] text-[gray] left-[19vw]">
              예상 결과물
            </div>
            <div className="bottom-0 absolute w-full text-white text-center text-[18px] h-[9vh] bg-popup_btn">
              <div className="h-[75%] flex items-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${window.location.href}/lca`}
                  className="block w-full m-0">
                  안내 바로가기
                </a>
              </div>
              <div className=" bottom-0 w-full h-[25%] z-[999] text-[2vw] border-t-[0.1vh] py-[0.3vh] border-dashed ">
                CNRIKOREA
              </div>
            </div>
          </MobliePopUp>
          <div
            role="button"
            className=" md:hidden landscape:hidden text-right absolute text-white text-[3vw] w-full bottom-[12vh] mr-[25vw] z-[30]"
            onClick={onNotOpenPopup}>
            <input type="checkbox" id="checkbox" checked={doesHideToday} />
            <span> 하루동안 열지 않기</span>
          </div>
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
