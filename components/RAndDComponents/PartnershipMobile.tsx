import styled from "styled-components";
import Image from "next/image";
import {useState, useRef} from "react";
import PartnershipContent from "../../functions/PartnershipContent";
import PartenershipMobileContentCard from "./PartenershipMobileContentCard";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import Arrow from "./Arrow";

function PartnershipMobile() {
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
