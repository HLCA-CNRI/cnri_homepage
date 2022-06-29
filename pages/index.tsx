import Head from "next/head";
import Link from "next/link";
import {memo} from "react";
import LandingMobile from "../components/LandingComponents.tsx/LandingMobile";
import TransitionVariants from "../functions/TransitionVariants";
import VerticalSlidingCard from "../components/LandingComponents.tsx/VerticalSlidingCard";
import HorizontalSlidingCard from "../components/LandingComponents.tsx/HorizontalSlidingCard";
import LandingContents from "../functions/LandingContents";

function Home() {
  return (
    <>
      <Head>
        <title>Welcome to CNRIKOREA</title>
        <meta
          name="description"
          content="기후변화와 탄소중립을 위한 최고의 파트너, 탄소중립연구원입니다!"
        />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      {/* Welcoming Section */}
      <div className="">
        <div className="pt-[5vh]">
          <div className="flex justify-center font-bold text-[7vw] md:text-[5vw] 2xl:text-[4vw]">
            넷제로 달성을 위해 필요한
          </div>
          <div className="flex justify-center font-bold text-[7vw] md:text-[5vw]  2xl:text-[4vw]">
            Actionable Plan의 모든 것
          </div>
        </div>
        <div className="flex justify-center my-[3.2vh]  ">
          <a
            className="bg-white hover:bg-blue-500 hover:text-white border-2 border-blue-500  text-[3vw] md:text-[2vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://lc.cnrikorea.net/">
            체험하기
          </a>
          <a
            className="bg-blue-500 hover:bg-blue-700 border-blue-500  border-2 text-white text-[3vw] md:text-[2vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[1.5vh] 2xl:px-[5vw] mx-[1.5vw] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cis.cnrikorea.net/register">
            데모신청
          </a>
        </div>
        <div className="flex justify-center ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[80vw] mt-[2vh] shadow-lg rounded-lg mb-6"
            src="/video/LandingIntro.mp4"
          />
          {/* <img src={"/images/landingMain.gif"} className="w-[80vw] mt-[2vh] shadow-lg rounded-lg mb-6" /> */}
        </div>
      </div>

      {/* Second Navbar  */}
      <section className="sticky inset-x-0 top-[9.5vh] md:top-[11.5vh] left-0 flex justify-center  w-[100%] bg-white z-40 opacity-90 border-2 text-[3.25vw] md:text-[1vw]">
        <Link href="#measure">
          <div className="py-[3vh] mx-[3vw]  cursor-pointer">측정</div>
        </Link>

        <Link href="#reduce">
          <div className="py-[3vh] mx-[3vw]  cursor-pointer">감축</div>
        </Link>

        <Link href="#remove">
          <div className="py-[3vh] mx-[3vw]  cursor-pointer">오프셋</div>
        </Link>

        <Link href="#report">
          <div className="py-[3vh] mx-[3vw]  cursor-pointer">보고서</div>
        </Link>
      </section>

      {/* Measure Section */}
      <section id="measure" className="mx-[6vw]  pt-[7vh] scroll-mt-28 snap-start">
        <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold ">
          {LandingContents.Measure.title}
        </div>
        <div className="text-[4.5vw] sm:text-[2vw] mb-[2vh] md:mb-[5vh]">
          {LandingContents.Measure.subtitle}
        </div>
        {/* When display is greater than md */}
        <div className=" hidden md:grid grid-cols-2 gap-10 ">
          <div className="col-span-1">
            <VerticalSlidingCard
              moveVidFrom={TransitionVariants.TansitionVidLToR}
              contentInfo={LandingContents.Measure.content1}
              bgColor="#EAF2FA"
            />
          </div>
          <div className=" h-[100%] col-span-1">
            <div className=" h-[50%]">
              <HorizontalSlidingCard
                imagePosition="right"
                moveVidFrom={TransitionVariants.TansitionVidRToL}
                moveContextFrom={TransitionVariants.TransitionContextRToL}
                contentInfo={LandingContents.Measure.content2}
                bgColor="#EEF7E9"
                basisVal="fit-content"
              />
            </div>
            <div className=" h-[50%]  mt-[6vh] mb-[3vh]">
              <HorizontalSlidingCard
                imagePosition="left"
                moveVidFrom={TransitionVariants.TansitionVidBToT}
                moveContextFrom={TransitionVariants.TransitionContextLToR}
                contentInfo={LandingContents.Measure.content3}
                bgColor="#FFF7E1"
                basisVal="fit-content"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="relative ">
            <LandingMobile
              contentInfo={[
                LandingContents.Measure.content1,
                LandingContents.Measure.content2,
                LandingContents.Measure.content3,
                LandingContents.Measure.content4,
              ]}
              isVid
              backgroundColor="#EAF2FA"
            />
          </div>
        </div>
      </section>
      {/* Reduce Section */}
      <section id="reduce" className="mx-[6vw]  pt-[7vh] scroll-mt-28 snap-start">
        <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold ">
          {LandingContents.Reduce.title}
        </div>
        <div className="text-[4.5vw] sm:text-[2vw] mb-[2vh] md:mb-[5vh]">
          {LandingContents.Reduce.subtitle}
        </div>
        {/* When display is greater than md */}
        <div className=" hidden md:grid grid-cols-2 gap-10 ">
          <div className="h-full">
            <div className="h-[50%]">
              <HorizontalSlidingCard
                imagePosition="left"
                moveVidFrom={TransitionVariants.TansitionVidLToR}
                moveContextFrom={TransitionVariants.TransitionContextLToR}
                contentInfo={LandingContents.Reduce.content1}
                bgColor="#EEF7E9"
                basisVal="fit-content"
              />
            </div>
            <div className="h-[50%] mt-[6vh] mb-[3vh]">
              <HorizontalSlidingCard
                imagePosition="right"
                moveVidFrom={TransitionVariants.TansitionVidBToT}
                moveContextFrom={TransitionVariants.TransitionContextRToL}
                contentInfo={LandingContents.Reduce.content2}
                bgColor="#FFF7E1"
                basisVal="fit-content"
              />
            </div>
          </div>
          <VerticalSlidingCard
            moveVidFrom={TransitionVariants.TansitionVidRToL}
            contentInfo={LandingContents.Reduce.content3}
            bgColor="#EAF2FA"
          />
        </div>
        <div className="md:hidden">
          <LandingMobile
            contentInfo={[
              LandingContents.Reduce.content1,
              LandingContents.Reduce.content2,
              LandingContents.Reduce.content3,
            ]}
            isVid
            backgroundColor="#EEF7E9"
          />
        </div>
      </section>
      {/* Remove Section */}
      <section id="remove" className="mx-[6vw]  pt-[7vh] scroll-mt-28 snap-start">
        <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold ">
          {LandingContents.Remove.title}
        </div>
        <div className="text-[4.5vw] sm:text-[2vw] mb-[2vh] md:mb-[5vh]">
          {LandingContents.Remove.subtitle}
        </div>
        {/* When display is greater than md */}
        <div className=" hidden md:grid grid-cols-2 gap-10 ">
          <VerticalSlidingCard
            moveVidFrom={TransitionVariants.TansitionVidLToR}
            contentInfo={LandingContents.Remove.content1}
            bgColor="#EAF2FA"
          />

          <VerticalSlidingCard
            moveVidFrom={TransitionVariants.TansitionVidRToL}
            contentInfo={LandingContents.Remove.content2}
            bgColor="#EEF7E9"
          />
        </div>
        <div className="md:hidden">
          <LandingMobile
            contentInfo={[LandingContents.Remove.content1, LandingContents.Remove.content2]}
            isVid
            backgroundColor="#FFF7E1"
          />
        </div>
      </section>
      {/* Report Section */}
      <section id="report" className="mx-[6vw]  pt-[7vh] scroll-mt-28 snap-start mb-[3vh]">
        <div className="text-[10vw] sm:text-[5vw] md:text-[4vw] font-semibold ">
          {LandingContents.Report.title}
        </div>
        <div className="text-[4.5vw] sm:text-[2vw] mb-[2vh] md:mb-[5vh]">
          {LandingContents.Report.subtitle}
        </div>
        {/* When display is greater than md */}
        <div className="hidden  md:grid">
          <HorizontalSlidingCard
            imagePosition="left"
            moveVidFrom={TransitionVariants.TansitionVidLToR}
            moveContextFrom={TransitionVariants.TransitionContextLToR2}
            contentInfo={LandingContents.Report.content1}
            bgColor="#FFF7E1"
            basisVal="50%"
          />
        </div>
        <div className="md:hidden">
          <LandingMobile
            contentInfo={[LandingContents.Report.content1]}
            isVid={false}
            backgroundColor="#FDF0E7"
          />
        </div>
      </section>
    </>
  );
}

export default memo(Home);
