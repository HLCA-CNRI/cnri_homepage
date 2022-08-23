export type CietCardListType = {
  id: number;
  title: string;
  description: string;
};

export const cietCardContent: CietCardListType[] = [
  {
    id: 1,
    title: "간편한 감축 목표",
    description:
      "2030년도 기준 무공해차 목표 비율 \n 설정을 통해 간편하게 \n ​감축 목표를 설정할 수 있습니다.",
  },
  {
    id: 2,
    title: "차량 우선 전환 순위 제시",
    description: "차량별 WTW·TTW 탄소배출량을 \n 분석하여 최적 전환 시나리오를 \n 제공합니다.",
  },
  {
    id: 3,
    title: "투자비용 최소화",
    description:
      "탄소배출량 원단위 분석을 통해 \n 감축 목표를 달성하고 \n 투자비용을 최소화합니다.",
  },
];
