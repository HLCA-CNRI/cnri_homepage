import {useEffect, memo} from "react";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion";
import {NextSeo} from "next-seo";
import TransitionVariants from "../../functions/TransitionVariants";
import Partnership from "../../components/RAndDComponents/Partnership";
import LCA from "../../components/RAndDComponents/LCA";
import PartnershipMobile from "../../components/RAndDComponents/PartnershipMobile";
import LCAMobile from "../../components/RAndDComponents/LCAMobile";
import {SectionTitleStyle} from "../../styles/commonStyles";
import LCAIcon from "../../components/RAndDComponents/LCAIcon";
import LCAContents from "../../functions/LCAContents";
// R&D Page seo 내용
const randdSeo = {
  title: "R&D",
  canonical: "https://www.cnrikorea.com/randd",
  openGraph: {
    url: "https://www.cnrikorea.com/randd",
    title: "R&D | CNRIKOREA",
  },
};

function Randd() {
  const controlText = useAnimation(); // Welcoming section에서 R&D 애니메이션
  const controlVid = useAnimation(); // Welcoming section에서 배경 애니메이션
  const [ref, inView] = useInView(); // react-intersection-observer 쓰이는 hook.사용자가 view안에 접근했는지 확인.

  // 처음 뷰 접근할때 애니메이션 기능
  useEffect(() => {
    if (inView) {
      controlText.start("vidVisible");
      controlVid.start("vidVisible");
    }
  }, [controlVid, controlText, inView]);

  return (
    <>
      <NextSeo {...randdSeo} />

      <div className="mx-[3vw] 2xl:mx-20">
        {/* Welcoming Section */}
        <section className="block md:hidden relative my-[3vh] mb-[5vh] md:mb-[10vh] 2xl:w-[1300px] mx-auto">
          {/* Welcoming Section */}
          {/* TODO:md 싸이즈 이상일때 transition 적용 */}
          <motion.div
            ref={ref}
            className="h-[60vh] sm:h-[80vh]"
            animate={controlVid}
            initial="vidHidden"
            variants={TransitionVariants.TansitionVidLToR}>
            <img
              alt="rAnddIntro"
              src="/images/rAnddIntro.jpg"
              className="object-cover h-full w-full rounded-lg shadow-lg"
            />
          </motion.div>
          {/* FIXME:애니메이션 기능 적용하면 모바일에서 깨짐.. */}
          <motion.div
            ref={ref}
            animate={controlText}
            initial="hidden"
            // variants={TansitionVidRToL}
            className="absolute inset-0 flex justify-center items-center z-10 text-[15vw] md:text-[10vw] 2xl:text-[180px] font-bold text-white">
            <div>
              <span>R</span>
              <span className="mx-2">&</span>
              <span>D</span>
            </div>
          </motion.div>
        </section>
        {/* LCA Section */}

        <div className="2xl:mx-auto 2xl:w-[1300px] text-center md:text-left ">
          <div className="w-[100%] ">
            <SectionTitleStyle>What is LCA?</SectionTitleStyle>
            {/* When display size is greater than md  */}

            <div className="hidden md:flex">
              <LCA />
            </div>

            {/* When display size is smaller than md  */}
            <div className=" md:hidden">
              <LCAMobile />
            </div>
            <div className="md:hidden"></div>

            <div className="grid grid-cols-2" />
          </div>
          {/* Partnership Section */}
          <div className="w-[100%] mt-[6vh] md:mt-[12vh]">
            <SectionTitleStyle>Our Work and Partnership</SectionTitleStyle>
            {/* When display size is greater than md  */}
            <div className="hidden xl:flex">
              <Partnership />
            </div>
            {/* When display size is smaller than md  */}
            <div className="xl:hidden">
              <PartnershipMobile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Randd);
