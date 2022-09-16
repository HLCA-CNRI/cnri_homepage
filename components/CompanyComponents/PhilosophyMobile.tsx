import styled from "styled-components";

interface PhilosophyMobileType {
  // 카드 내용
  type: {
    title: string;
    content: string[];
    imgPath: string;
  };
}

function PhilosophyMobile({type}: PhilosophyMobileType) {
  return (
    // 구조: 이미지 위에 내용
    <section className="flex-shrink-1  h-[65vh] mr-[3vw]  rounded-lg  ">
      <div className={` h-full  flex `}>
        {/* 이미지 */}
        <div className="relative w-[80vw] rounded-r-lg  ">
          <img
            alt="philImg"
            src={type.imgPath}
            className=" object-cover h-full w-full flex-wrap  rounded-lg shadow-xl"
          />
          {/* 내용 */}
          <div className=" absolute inset-0 flex justify-start items-end px-4 pb-2 ">
            <div>
              <div className=" text-[8vw] text-white font-semibold mb-4 underline underline-offset-8">
                <Title>{type.title}</Title>
              </div>
              <ul className="text-[4vw] whitespace">
                {type.content.map((val: string) => (
                  <Li className="text-white my-1" key={val}>
                    {val}
                  </Li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhilosophyMobile;

const Title = styled.span`
  @media screen and (orientation: landscape) {
    font-size: 7vh;
  }
`;

const Li = styled.li`
  margin: 0.25rem;
  color: white;
  @media screen and (orientation: landscape) {
    margin: 2px 0;
    font-size: 1vh;
    line-height: 150%;
  }
`;
