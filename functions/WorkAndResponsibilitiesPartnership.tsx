import totalBusinessD from "../images/companies/totalBusinessD.png"
import totalBusinessC from "../images/companies/totalBusinessC.png"
import tsD from "../images/companies/tsD.png"
import tsC from "../images/companies/tsC.png"
import h2D from "../images/companies/h2D.png"
import h2C from "../images/companies/h2C.png"
import poscoC from "../images/companies/poscoC.png"
import poscoD from "../images/companies/poscoD.png"
import snuD from "../images/companies/snuD.png"
import snuC from "../images/companies/snuC.png"

import h2 from "../images/partnershipData/h2.png"
import posco from "../images/partnershipData/posco.png"
import snu from "../images/partnershipData/snu.png"
import totalBusiness from "../images/partnershipData/totalBusiness.png"
import ts1 from "../images/partnershipData/ts1.png"
import ts2 from "../images/partnershipData/ts2.png"




export const WorkAndPartnershipContent:{ [key: string]: any  } = {
    totalBusiness:{
        title: "totalBusiness", 
        kTitle: "전과정평가 기반의 자동차 환경성 분석",
        content: ["산업통상자원부 자동차과, 서울대학교(민경덕 교수, 송한호 교수, 명차리 교수)와 협업하여 전기자동차와 하이브리드 자동차 간의 LCA 기반 온실가스 배출량을 분석하였습니다.","전기차 보급의 가속화와 더불어 기존 내연기관, 하이브리드 자동차 관련 규제에 탄소중립연구원의 연구결과가 적극 활용될 예정입니다."],
        default:  <img id  = "totalBusiness" src={totalBusinessD.src} className = "object-cover w-full "/>,
        colored:  <img id  = "totalBusiness" src={totalBusinessC.src} className = "object-cover w-full "/>,
        img: <img id  = "totalBusiness" src = {totalBusiness.src}  className = "object-cover " />,
        hasMultiple: false
    },
    ts:{
        title: "ts", 
        kTitle: "온실가스 LCI DB/Green NCAP",
        content: ["자동차 주요 에너지원(휘발유/경유/LPG/CNG/전기/수소)과 업스트림 공정의 주요 연료(석탄/천연가스 등)에 대한 온실가스 LCI DB를 개발했습니다.","해외 LCI DB(Gabi, Ecoinvent 등), 서울대 연구실과 국내외 연구결과를 적극 활용하였으며 자체 알고리즘을 개발하여 국내 최고 수준의 결과물을 도출하였습니다."],
        default:  <img id = "ts" src={tsD.src} className = "object-cover w-full "/>,
        colored:  <img id = "ts" src={tsC.src} className = "object-cover w-full "/>,
        img: [<img id  = "ts" src = {ts1.src}  className = "object-cover w-full h-28" />,<img id  = "ts" src = {ts2.src}  className = "object-cover h-28" />],
        hasMultiple: true
    }, 
    h2:{
        title: "h2", 
        kTitle: "청정수소 이니셔티브(인증제)",
        content: ["수소 경제 활성화를 위한 수소법의 첫 단계인 청정수소 인증제의 LCA 기준치를 산정합니다.(청정수소 이니셔티브 전문가 워킹그룹 참여)","해외 수입 수소 뿐만 아니라 국내의 그레이수소(철강, 석유화학 업계의 부생, 추출수소), CCUS를 적용한 블루수소의 전과정 탄소 배출량을 측정합니다."],
        default:  <img  id = "h2" src={h2D.src} className = "object-cover w-full "/>,
        colored:  <img id = "h2" src={h2C.src} className = "object-cover w-full "/>,
        img: <img id  = "ts" src = {h2.src}  className = "object-cover h-28" />,
        hasMultiple: false
    },
    // 청정수소 인증을 위한 제철 부생가스 기반 수소 생산 설비의 온실가스 배출량 평가
    posco:{
        title: "posco", 
        kTitle: "청정수소 인증을 위한 온실가스 배출량 평가",
        content:["포항산업과학연구원, 서울대학교(송한호 교수)와 협업하여 광양제철소 부생가스를 활용한 수소 생산에서의 전과정 온실가스 배출량을 분석하였습니다.","2022년까지 배포될 청정수소 인증제 가이드라인에 대비하여 선제적 대응 및 인증을 목표로 실질적인 연구결과를 도출해냈습니다."],
        default:  <img id = "posco" src={poscoD.src} className = " object-cover w-full "/>,
        colored:  <img id = "posco" src={poscoC.src} className = " object-cover w-full "/>,
        img: <img id  = "totalBusiness" src = {posco.src}  className = "object-cover h-28 " />,
        hasMultiple: false
    },
    snu:{
        title: "snu", 
        kTitle: "자동차 LCA 자체 알고리즘 개발",
        content:["미국 캘리포니아 주정부와 연방정부에서도 적극 활용하고 있는 아르곤국가연구소가 개발한 GREET 프로그램의 알고리즘을 기반으로 서울대 연구실과 공동연구를 통해 자체 알고리즘"],
        default:  <img id = "snu" src={snuD.src} className = "object-cover w-full "/>,
        colored:  <img id = "snu" src={snuC.src} className = "object-cover w-full "/>,
        img: <img id  = "totalBusiness" src = {snu.src}  className = "object-cover h-28 " />,
        hasMultiple: false
    },

}