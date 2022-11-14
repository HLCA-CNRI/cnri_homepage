import Link from "next/link";
import {memo, useEffect} from "react";
import LandingContents from "../functions/LandingContents";
import {SectionTitleStyle, SectionSubTitleStyle, LinkButton} from "../styles/commonStyles";
import ReduceCards from "../components/LandingComponents.tsx/ReduceCards";
import RemoveCards from "../components/LandingComponents.tsx/RemoveCards";
import ReportCard from "../components/LandingComponents.tsx/ReportCard";
import MeasureCard from "../components/LandingComponents.tsx/MeasureCard";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Welcoming Section */}
      <div className="snap-mandatory">
        <div className="pt-[5vh] snap-center">
          <div className="flex justify-center font-bold text-[7vw] md:text-[5vw] 2xl:text-[60px]">
            넷제로 달성을 위해 필요한
          </div>
          <div className="flex justify-center font-bold text-[7vw] md:text-[5vw]  2xl:text-[60px]">
            Actionable Plan의 모든 것
          </div>
        </div>
        <div className="flex justify-center my-[34.56px]  ">
          <Link href="product/cis" passHref>
            <LinkButton>CIS</LinkButton>
          </Link>
          <Link href="product/ciet" passHref>
            <LinkButton>CIET</LinkButton>
          </Link>
        </div>
        <div className="flex justify-center snap-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:w-[80vw] 2xl:w-[1200px]  mt-[2vh] shadow-lg rounded-lg mb-6"
            src="/video/LandingIntro.mp4"
          />
        </div>
      </div>

      {/* Second Navbar  */}
      <section className="sticky inset-x-0 top-[9.5vh] md:top-[11.5vh] left-0 flex justify-center  w-[100%] bg-white z-40 opacity-90 border-2 text-[3.25vw] md:text-[1vw]">
        <Link href="#measure" passHref>
          <div className="py-[1.7vh] mx-[3vw]  cursor-pointer">측정</div>
        </Link>

        <Link href="#reduce" passHref>
          <div className="py-[1.7vh] mx-[3vw]  cursor-pointer">감축</div>
        </Link>

        <Link href="#remove" passHref>
          <div className="py-[1.7vh] mx-[3vw]  cursor-pointer">오프셋</div>
        </Link>

        <Link href="#report" passHref>
          <div className="py-[1.7vh] mx-[3vw]  cursor-pointer">보고서</div>
        </Link>
      </section>
      <section className=" flex-col justify-center items-center 2xl:w-[1450px]  mx-auto 2xl:px-[200px] px-[3vw] pb-[130px] ">
        {/* Measure Section */}
        <section id="measure" className="snap-center scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Measure.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Measure.subtitle}</SectionSubTitleStyle>

          {/* PC ver & Mobile ver  */}
          <MeasureCard />
        </section>

        {/* Reduce Section */}
        <section id="reduce" className="snap-center scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Reduce.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Reduce.subtitle}</SectionSubTitleStyle>

          {/* PC ver & Mobile ver  */}
          <ReduceCards />
        </section>

        {/* Remove Section */}
        <section id="remove" className="snap-center  scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Remove.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Remove.subtitle}</SectionSubTitleStyle>

          {/* PC ver & Mobile ver  */}
          <RemoveCards />
        </section>

        {/* Report Section */}
        <section id="report" className="snap-center scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Report.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Report.subtitle}</SectionSubTitleStyle>
          {/* When display is greater than md */}

          {/* PC ver & Mobile ver  */}
          <ReportCard content={LandingContents.Report.content1} />
        </section>
      </section>
    </>
  );
}

export default memo(Home);
