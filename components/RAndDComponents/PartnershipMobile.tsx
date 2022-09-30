import styled from "styled-components";
import Image from "next/image";
import {useState, useRef} from "react";
import PartnershipContent from "../../functions/PartnershipContent";
import Icon from "./Icon";
import Carousel from "./Carousel";
import PartenershipMobileContentCard from "./PartenershipMobileContentCard";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import Arrow from "./Arrow";

function PartnershipMobile() {
  const [currentObj, setCurrentObj] = useState(PartnershipContent.totalBusiness);
  // ICON:사용자 아이콘 클릭 이벤트 핸들러 --> currentObj가 현제 오브젝트로 지정
  const [curIdx, setCurIdx] = useState(0);
  const contents = useRef([
    PartnershipContent.snu,
    PartnershipContent.posco,
    PartnershipContent.h2,
    PartnershipContent.totalBusiness,
    PartnershipContent.ts,
  ]);

  const onArrowClick = (e: any) => {
    const {id} = e.currentTarget;
    const len = contents.current.length;
    switch (id) {
      case ArrowDirection.LEFT:
        setCurIdx((cur) => (cur - 1 + len) % len);
        break;
      case ArrowDirection.RIGHT:
        setCurIdx((cur) => (cur + 1 + len) % len);
        break;
      default:
        break;
    }
  };
  // const userClick = (e: any) => {
  //   const val = e.target.id;
  //   if (PartnershipContent[val] !== undefined) {
  //     setCurrentObj(PartnershipContent[val]);
  //   }
  // };

  return (
    <div>
      {/* 상단부 - 로고 + 화살표  */}
      <div className="flex justify-around items-center">
        <div className="w-[4vw]" role="button" onClick={onArrowClick} id={ArrowDirection.LEFT}>
          <Arrow direction={ArrowDirection.LEFT} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[25vw] relative h-[25vw]">
            <Image
              src={contents.current[curIdx].colored.src}
              alt={contents.current[curIdx].colored.alt}
              layout="fill"
              sizes="25vw"
              className="object-cover"
            />{" "}
          </div>
          <div className="flex w-[15vw] justify-around">
            {contents.current.map((c, idx) => (
              <div
                className={`w-[1.6vw] h-[1.6vw] rounded-[50%]  ${
                  idx === curIdx ? "bg-black" : "bg-[#D9D9D9]"
                }`}>
                {" "}
              </div>
            ))}
          </div>
        </div>
        <div className="w-[4vw]" role="button" onClick={onArrowClick} id={ArrowDirection.RIGHT}>
          <Arrow direction={ArrowDirection.RIGHT} />
        </div>
      </div>

      {/* 하단부 - 내용 + 사진 */}
      {/* 사진 하나일때 */}
      <div className="w-full mx-auto mt-[2vh] mb-[5vh]">
        {contents.current[curIdx].kTitle.length === 1 ? (
          <div className="flex justify-center">
            <PartenershipMobileContentCard
              heightAuto
              content={contents.current[curIdx].content[0]}
              title={contents.current[curIdx].kTitle}
              img={contents.current[curIdx].img[0]}
            />
          </div>
        ) : (
          /* 사진 여러개일때 */
          <Container className={`snap-x flex   overflow-auto pl-10 `}>
            {contents.current[curIdx].kTitle.map((t: string, idx: number) => (
              <div className="flex-shrink-0  snap-center mx-[2vw]">
                <PartenershipMobileContentCard
                  heightAuto
                  content={contents.current[curIdx].content[idx]}
                  title={t}
                  img={contents.current[curIdx].img[idx]}
                />
              </div>
            ))}
          </Container>
        )}
      </div>
      {/* 위에 아이콘 부분 -->위에 3칸 grid 구성 */}
      {/* <div className="border grid grid-cols-3"> */}
      {/* ts */}
      {/* <div
          role="button"
          id="ts"
          className={`border flex justify-center ${
            currentObj.title === "ts" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="ts" className="w-[80%] ">
            <Icon
              defaultIcon={PartnershipContent.ts.default}
              coloredIcon={PartnershipContent.ts.colored}
              isCurrent={currentObj.title === "ts"}
            />
          </div>
        </div> */}
      {/* posco */}
      {/* <div
          role="button"
          id="posco"
          className={`border flex justify-center ${
            currentObj.title === "posco" ? "border-blue-400" : ""
          }`}
          onClick={userClick}>
          <div id="posco" className="w-[80%] ">
            <Icon
              defaultIcon={PartnershipContent.posco.default}
              coloredIcon={PartnershipContent.posco.colored}
              isCurrent={currentObj.title === "posco"}
            />
          </div>
        </div> */}
      {/* h2 */}
      {/* <div
          id="h2"
          className={`border flex justify-center ${
            currentObj.title === "h2" ? "border-blue-400" : ""
          }`}>
          <div role="button" id="h2" className="w-[80%] " onClick={userClick}>
            <Icon
              defaultIcon={PartnershipContent.h2.default}
              coloredIcon={PartnershipContent.h2.colored}
              isCurrent={currentObj.title === "h2"}
            />
          </div>
        </div>
      </div> */}
      {/* 위에 아이콘 부분 -->밑에 2칸 grid 구성 */}
      {/* <div className="border grid grid-cols-2"> */}
      {/* totalBusiness */}
      {/* <div
          id="totalBusiness"
          className={`border flex justify-center ${
            currentObj.title === "totalBusiness" ? "border-blue-400" : ""
          }`}>
          <div role="button" id="totalBusiness" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={PartnershipContent.totalBusiness.default}
              coloredIcon={PartnershipContent.totalBusiness.colored}
              isCurrent={currentObj.title === "totalBusiness"}
            />
          </div>
        </div> */}
      {/* snu */}
      {/* <div
          id="snu"
          className={`border flex justify-center ${
            currentObj.title === "snu" ? "border-blue-400" : ""
          }`}>
          <div role="button" id="snu" className="w-[55%] " onClick={userClick}>
            <Icon
              defaultIcon={PartnershipContent.snu.default}
              coloredIcon={PartnershipContent.snu.colored}
              isCurrent={currentObj.title === "snu"}
            />
          </div>
        </div>
      </div> */}
      {/* 밑에 내용 부분 --> 사진 + 내용 */}
      {/* 만야에 hasMultiple --> 내용이 1개 이상이면 Carousel 형태로 보여주기 아니면 그냥 currentObj 내용 보내주기 */}
      {/* <div className="mt-[2vh] border-2 p-[20px] mb-[3vh] ">
        <div>
          {currentObj.hasMultiple ? (
            <Carousel currentObj={currentObj} />
          ) : (
            <>
              <div className=" flex justify-center self-center  ">{currentObj.img}</div>
              <div className="text-[5.5vw]  font-semibold flex justify-start pb-[1vh] pt-[2vh]">
                {currentObj.kTitle}
              </div>
              <div className="text-[3vw]   ">
                <div>{currentObj.content}</div> */}
      {/* <ul>
                  {currentObj.content.map((note: string) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul> */}
      {/* </div>
            </>
          )}
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default PartnershipMobile;

const Container = styled.div`
  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0.5vh;
    width: 0.5vw;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: ${(props) => props.color}; */
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
`;
