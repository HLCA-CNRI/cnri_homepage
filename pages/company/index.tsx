import {motion, useAnimation} from "framer-motion";
import styled from "styled-components";
import {useEffect, memo} from "react";
import {useInView} from "react-intersection-observer";
import {NextSeo} from "next-seo";
import ScrollContainer from "react-indiana-drag-scroll";
import TransitionVariants from "../../functions/TransitionVariants";
import PhilosophyComp from "../../components/CompanyComponents/PhilosophyComp";
import Member from "../../components/CompanyComponents/Member";
import History from "../../components/CompanyComponents/HistoryComp";
import PhilosophyContent from "../../functions/PhilosophyContent";
import PhilosophyMobile from "../../components/CompanyComponents/PhilosophyMobile";
import {SectionTitleStyle} from "../../styles/commonStyles";

// Company Page seo 내용
const companySeo = {
  title: "Company",
  canonical: "https://www.cnrikorea.com/company",
  openGraph: {
    url: "https://www.cnrikorea.com/company",
    title: "Company | CNRIKOREA",
  },
};

function Company() {
  const controlText = useAnimation(); // Welcoming section에서 Company 애니메이션
  const controlPic = useAnimation(); // Welcoming section에서 배경 애니메이션
  const [ref, inView] = useInView(); // react-intersection-observer 쓰이는 hook.사용자가 view안에 접근했는지 확인.

  // 처음 뷰 접근할때 애니메이션 기능
  useEffect(() => {
    if (inView) {
      controlText.start("vidVisible");
      controlPic.start("vidVisible");
    }
  }, [controlPic, controlText, inView]);

  return (
    <>
      <NextSeo {...companySeo} />
      <div className="mx-[6vw] ">
        {/* Welcoming Section */}
        {/* TODO:md 싸이즈 이상일때 transition 적용 */}
        <section className="relative my-[3vh] mb-[5vh] md:mb-[10vh] lg:w-[750px] xl:w-[900px] 2xl:w-[1200px] mx-auto">
          <motion.div
            ref={ref}
            className="h-[80vh] flex "
            animate={controlPic}
            initial="vidHidden"
            variants={TransitionVariants.TansitionVidLToR}>
            <img
              alt="comapnyImg"
              src="/images/companyIntro.jpg"
              className="object-cover h-full w-full rounded-lg shadow-lg z-0 "
            />
          </motion.div>
          {/* FIXME:애니메이션 기능 적용하면 모바일에서 깨짐.. */}
          <motion.div
            ref={ref}
            animate={controlText}
            // initial="hidden"
            // variants={TansitionVidRToL}
            className="absolute inset-0 flex justify-center items-center z-10 text-[15vw] md:text-[10vw] 2xl:text-[180px] font-bold text-white ">
            <div>COMPANY</div>
          </motion.div>
        </section>
        <div className="mx-auto  lg:w-[700px] xl:w-[900px] 2xl:w-[1300px]">
          {/* Philosophy Section */}
          <section className="mb-[5vh] md:mb-[10vh] ">
            <SectionTitleStyle>Philosophy</SectionTitleStyle>
            {/* When display size is greater than md  */}
            <div className=" hidden md:flex ">
              {/* philosophyCard는 css file에 지정해놓음 --> 애니메이션 기능 따로 css으로 구현함 */}
              <div className="philosophyCard">
                <PhilosophyComp type={PhilosophyContent.mission} />
              </div>
              <div className="philosophyCard mx-10">
                <PhilosophyComp type={PhilosophyContent.vision} />
              </div>
              <div className="philosophyCard">
                <PhilosophyComp type={PhilosophyContent.coreValues} />
              </div>
            </div>
            {/* When display size is smaller than md  */}
            <div className=" md:hidden ">
              {/* indiana-drag-scroll 사용해서 마우스로 스크롤 가능하게 만듬 */}
              <ScrollContainer className="scroll-container flex cursor-pointer">
                <PhilosophyMobile type={PhilosophyContent.mission} />
                <PhilosophyMobile type={PhilosophyContent.vision} />
                <PhilosophyMobile type={PhilosophyContent.coreValues} />
              </ScrollContainer>
            </div>
          </section>
          {/* Member Section */}
          <section className="mb-[5vh] md:mb-[10vh]">
            <SectionTitleStyle>Members</SectionTitleStyle>
            {/* indiana-drag-scroll 사용해서 마우스로 스크롤 가능하게 만듬 */}
            <ScrollContainer className="scroll-container flex cursor-pointer">
              <Member name="min" />
              <Member name="jonghoh" />
              <Member name="prof" />
              <Member name="minhyeok" />
              <Member name="kyunghoh" />
              <Member name="cherin" />
            </ScrollContainer>
          </section>
          {/* History Section */}
          <section className="my-4">
            <SectionTitleStyle>History</SectionTitleStyle>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
              <History year={2022} />
              <History year={2021} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default memo(Company);
