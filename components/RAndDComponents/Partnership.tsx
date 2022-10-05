import {useState, useRef, useEffect, memo} from "react";
import Image from "next/image";
import PartnershipContent from "../../functions/PartnershipContent";
import PartnershipCard from "./PartnershipCard";
import {ArrowDirection} from "../../constants/enum/arrow_direction.enum";
import Arrow from "./Arrow";

function Partnership() {
  const [curContentTitle, setCurContentTitle] = useState<string>(PartnershipContent.snu.title);
  const [curImgs, setCurImgs] = useState(PartnershipContent.snu.img);
  const [curImgIdx, setCurImgIdx] = useState(0);
  const contents = useRef([
    PartnershipContent.snu,
    PartnershipContent.posco,
    PartnershipContent.h2,
    PartnershipContent.totalBusiness,
    PartnershipContent.ts,
  ]);

  const onCompanyClick = (e: any) => {
    const {id} = e.currentTarget;
    if (!id || id === curContentTitle) {
      setCurContentTitle("");
    } else if (id) {
      setCurContentTitle(id);
    }
    setCurImgIdx(0);
  };

  const onArrowClick = (e: any) => {
    const {id} = e.currentTarget;
    const len = curImgs.length;
    switch (id) {
      case ArrowDirection.LEFT:
        setCurImgIdx((cur) => (cur - 1 + len) % len);
        break;
      case ArrowDirection.RIGHT:
        setCurImgIdx((cur) => (cur + 1 + len) % len);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setCurImgs(contents.current.filter((c) => c.title === curContentTitle)[0]?.img);
  }, [curContentTitle]);

  return (
    <div>
      {/* 카드 부분 */}
      <div className="flex snap-center">
        {contents.current.map((c, idx) => (
          <div
            className=" hover:cursor-pointer snap-end"
            key={c.title}
            id={c.title}
            onClick={onCompanyClick}
            role="button">
            <PartnershipCard
              content={c}
              isLeft={idx < 3}
              isOpened={curContentTitle === c.title}
              contentIdx={0}
              isLast={idx === contents.current.length - 1}
            />
          </div>
        ))}
      </div>
      {/* 사진 + 화살표 */}
      {curImgs && (
        <div className="snap-end flex items-center justify-center mb-10 animate-fadein ">
          {curImgs.length !== 1 && (
            <div className="w-[20px]" id={ArrowDirection.LEFT} role="button" onClick={onArrowClick}>
              <Arrow direction={ArrowDirection.LEFT} />
            </div>
          )}
          <div
            className="w-[700px] h-[300px] mx-8 flex justify-center animate-fadein relative"
            key={`curImg_${curImgIdx}_${curContentTitle}`}>
            <Image
              src={curImgs[curImgIdx].src}
              alt={curImgs[curImgIdx].alt}
              className="object-contain"
              layout="fill"
              sizes="700px"
            />
          </div>
          {curImgs.length !== 1 && (
            <div
              id={ArrowDirection.RIGHT}
              role="button"
              onClick={onArrowClick}
              className="w-[20px]">
              <Arrow direction={ArrowDirection.RIGHT} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default memo(Partnership);
