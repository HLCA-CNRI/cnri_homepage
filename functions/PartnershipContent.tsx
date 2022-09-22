const PartnershipContent: {[key: string]: any} = {
  totalBusiness: {
    title: "totalBusiness",
    kTitle: ["LCA 기반의 자동차 환경성 분석"],
    content: [
      "산업통상자원부 자동차과, 서울대학교(민경덕 교수, 송한호 교수, 명차리 교수)와 협업하여 전기자동차와 하이브리드 자동차 간의 LCA 기반 온실가스 배출량을 분석하였습니다. 전기차 보급의 가속화와 더불어 기존 내연기관, 하이브리드 자동차 관련 규제에 탄소중립연구원의 연구결과가 적극 활용될 예정입니다.",
    ],
    default: (
      <img
        alt="totalBusinessD"
        id="totalBusiness"
        src="/images/companies/totalBusinessD.png"
        className="object-cover w-full "
      />
    ),
    colored: (
      <img
        alt="totalBusinessC"
        id="totalBusiness"
        src="/images/companies/totalBusinessC.png"
        className="object-cover w-full "
      />
    ),
    img: [
      <img
        alt="totalBusiness"
        id="totalBusiness"
        src="/images/partnershipData/totalBusiness.png"
        className=" h-full w-auto "
      />,
    ],
    hasMultiple: false,
  },
  ts: {
    title: "ts",
    kTitle: ["온실가스 LCI DB", "Green NCAP"],
    content: [
      "자동차 주요 에너지원(휘발유/경유/LPG/CNG/전기/수소)과 업스트림 공정의 주요 연료(석탄/천연가스 등)에 대한 온실가스 LCI DB를 개발했습니다. 해외 LCI DB(Gabi, Ecoinvent 등), 서울대 연구실과 국내외 연구결과를 적극 활용하였으며 자체 알고리즘을 개발하여 국내 최고 수준의 결과물을 도출하였습니다.",
      "국토교통부 BIG 3 과제 중 하나로 LCA 분과의 전문가 워킹그룹으로 참여했습니다. 전기차 보급이 가속화되면서 자동차 온실가스의 환경성 평가 체계의 구조 수정이 중요해졌고 전기차의 에너지원인 전기와 내연기관차의 에너지원인 휘발유/경유/LPG/CNG 의 전과정 온실가스 배출량을 측정하고 기준 수치를 도출하여 규제화를 앞두고 있습니다",
    ],
    default: (
      <img id="ts" alt="ts" src="/images/companies/tsD.png" className="object-cover w-full " />
    ),
    colored: (
      <img id="ts" alt="ts" src="/images/companies/tsC.png" className="object-cover w-full " />
    ),
    img: [
      <img
        key={0}
        id="ts"
        alt="ts"
        src="/images/partnershipData/ts1.png"
        className=" h-full w-auto "
      />,
      <img
        key={1}
        id="ts"
        alt="ts"
        src="/images/partnershipData/ts2.png"
        className=" h-full w-auto "
      />,
    ],
    hasMultiple: true,
  },
  h2: {
    title: "h2",
    kTitle: ["청정수소 이니셔티브(인증제)"],
    content: [
      "수소 경제 활성화를 위한 수소법의 첫 단계인 청정수소 인증제의 LCA 기준치를 산정합니다.(청정수소 이니셔티브 전문가 워킹그룹 참여), 해외 수입 수소 뿐만 아니라 국내의 그레이수소(철강, 석유화학 업계의 부생, 추출수소), CCUS를 적용한 블루수소의 전과정 탄소 배출량을 측정합니다.",
    ],
    default: (
      <img alt="h2D" id="h2" src="/images/companies/h2D.png" className="object-cover w-full " />
    ),
    colored: (
      <img alt="h2C" id="h2" src="/images/companies/h2C.png" className="object-cover w-full " />
    ),
    img: [
      <img alt="h2" id="ts" src="/images/partnershipData/h2.png" className=" h-full w-auto " />,
    ],
    hasMultiple: false,
  },
  posco: {
    title: "posco",
    kTitle: ["부생가스 온실가스 배출량 평가"],
    content: [
      "포항산업과학연구원, 서울대학교(송한호 교수)와 협업하여 광양제철소 부생가스를 활용한 수소 생산에서의 전과정 온실가스 배출량을 분석하였습니다. 2022년까지 배포될 청정수소 인증제 가이드라인에 대비하여 선제적 대응 및 인증을 목표로 실질적인 연구결과를 도출해냈습니다.",
    ],
    default: (
      <img
        alt="poscoD"
        id="posco"
        src="/images/companies/poscoD.png"
        className="object-cover w-full "
      />
    ),
    colored: (
      <img
        alt="poscoC"
        id="posco"
        src="/images/companies/poscoC.png"
        className="object-cover w-full "
      />
    ),
    img: [
      <img
        alt="posco"
        id="totalBusiness"
        src="/images/partnershipData/posco.png"
        className=" h-full w-auto "
      />,
    ],
    hasMultiple: false,
  },
  snu: {
    title: "snu",
    kTitle: ["자동차 LCA 자체 알고리즘 개발"],
    content: [
      "미국 캘리포니아 주정부와 연방정부에서도 적극 활용하고 있는 아르곤국가연구소가 개발한 GREET 프로그램의 알고리즘을 기반으로 서울대 연구실과 공동연구를 통해 자체 알고리즘을 개발하였습니다.",
    ],
    default: (
      <img alt="snuD" id="snu" src="/images/companies/snuD.png" className="object-cover w-full " />
    ),
    colored: (
      <img alt="snuC" id="snu" src="/images/companies/snuC.png" className="object-cover w-full " />
    ),
    img: [
      <img
        alt="snu"
        id="totalBusiness"
        src="/images/partnershipData/snu.png"
        className=" h-full w-auto "
      />,
    ],
    hasMultiple: false,
  },
};
export default PartnershipContent;
export type PartnershipContentType = {
  title: string;
  kTitle: string[];
  content: string[];
  default: any;
  colored: any;
  img: any;
  hasMultiple: boolean;
};
