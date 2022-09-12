import Head from "next/head";
import Link from "next/link";
import {memo} from "react";
import styled from "styled-components";
import LandingMobile from "../components/LandingComponents.tsx/LandingMobile";
import TransitionVariants from "../functions/TransitionVariants";
import VerticalSlidingCard from "../components/LandingComponents.tsx/VerticalSlidingCard";
import HorizontalSlidingCard from "../components/LandingComponents.tsx/HorizontalSlidingCard";
import LandingContents from "../functions/LandingContents";
import {SectionTitleStyle, SectionSubTitleStyle} from "../styles/commonStyles";

function Home() {
  return (
    <>
      {/* Welcoming Section */}
      <div className="">
        <div className="pt-[5vh]">
          <div className="flex justify-center font-bold text-[7vw] md:text-[5vw] 2xl:text-[77px]">
            넷제로 달성을 위해 필요한
          </div>
          <div className="flex justify-center font-bold text-[7vw] md:text-[5vw]  2xl:text-[77px]">
            Actionable Plan의 모든 것
          </div>
        </div>
        <div className="flex justify-center my-[34.56px]  ">
          <a
            className="bg-white text-constant-CIET_MINT hover:bg-constant-CIET_MINT hover:text-white border-2 border-constant-CIET_MINT transition-all duration-300 ease-in  text-[3vw] md:text-[2vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[16.2px] 2xl:px-[96px] 2xl:text-[40px] mx-[1.5vw] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://cis.cnrikorea.com">
            CIS
          </a>
          <a
            className="text-white bg-constant-CIET_MINT hover:bg-white hover:text-constant-CIET_MINT border-2 border-constant-CIET_MINT transition-all  ease-in text-[3vw] md:text-[2vw] rounded-lg px-[7vw] py-[1vh] md:py-[2vh] 2xl:py-[16.2px] 2xl:px-[96px] 2xl:text-[40px] mx-[1.5vw] font-bold"
            rel="noopener noreferrer"
            href="/product/ciet">
            CIET
          </a>
        </div>
        <div className="flex justify-center ">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="md:w-[80vw] 2xl:w-[1500px]  mt-[2vh] shadow-lg rounded-lg mb-6"
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
      <section className="flex-col justify-center items-center lg:w-[900px] xl:w-[1100px] 2xl:w-[1900px]  mx-auto">
        {/* Measure Section */}
        <section id="measure" className="mx-[6vw]  pt-[7vh] scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Measure.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Measure.subtitle}</SectionSubTitleStyle>
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
              <div className=" h-[55%]">
                <HorizontalSlidingCard
                  imagePosition="right"
                  moveVidFrom={TransitionVariants.TansitionVidRToL}
                  moveContextFrom={TransitionVariants.TransitionContextRToL}
                  contentInfo={LandingContents.Measure.content2}
                  bgColor="#EEF7E9"
                  basisVal="fit-content"
                />
              </div>
              <div className=" h-[45%]  mt-[6vh] mb-[3vh]">
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
        <section id="reduce" className="mx-[6vw]  pt-[7vh] scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Reduce.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Reduce.subtitle}</SectionSubTitleStyle>
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
        <section id="remove" className="mx-[6vw]  pt-[7vh] scroll-mt-28 ">
          <SectionTitleStyle>{LandingContents.Remove.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Remove.subtitle}</SectionSubTitleStyle>
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
        <section id="report" className="mx-[6vw]  pt-[7vh] scroll-mt-28  mb-[3vh]">
          <SectionTitleStyle>{LandingContents.Report.title}</SectionTitleStyle>
          <SectionSubTitleStyle>{LandingContents.Report.subtitle}</SectionSubTitleStyle>
          {/* When display is greater than md */}
          <div className="hidden md:grid overflow-hidden">
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
      </section>
    </>
  );
}

export default memo(Home);
