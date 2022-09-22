const HistoryContent: any = {
  2021: {
    year: "2021",
    content: [
      {month: "May", des: "법인 설립"},
      {month: "Jun", des: "창업진흥원 주관 예비창업패키지 선정"},
      {month: "Jul", des: "국토교통부, 산업통산자원부 주요 LCA R&D"},
      {month: "Oct", des: "서울대학교 창업지원단 입주기업 선정"},
      {month: "Dec", des: "서울대학교 송한호 교수, 국토교통부 장관 표창 수상"},
    ],
    imgPath: "/images/historyimg1.png",
  },
  2022: {
    year: "2022",
    content: [
      {month: "Jan", des: "POSCO(RIST) 청정수소 LCA R&D"},
      {month: "Feb", des: "창업진흥원 주관 예비창업패키지 우수기업 선정"},
      {month: "May", des: "Carbon Intensity Simulator 제품 개발"},
      {month: "May", des: "유엔유럽경제위원회 아시아 자동차 LCA 전문가논의기구 참여"},
      {
        month: "Jun",
        des: '재단법인 기후변화 센터 "2022 스타트업을 위한 탄소중립 첫걸음" 프로그램 강연',
      },
      {month: "Jun", des: "소풍벤처스 임팩트클라이밋 엑셀러레이팅 프로그램 선정"},
    ],
    imgPath: "/images/historyimg2.png",
  },
};

export default HistoryContent;

type MonthContent = {
  month: string;
  des: string;
};

export type HistoryContentType = {
  year: string;
  content: MonthContent[];
  imgPath: string;
};
