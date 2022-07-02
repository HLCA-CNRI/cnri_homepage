const additionalMetaTags = [
  {
    name: "application-name",
    content: "CNRIKOREA",
  },
  {
    name: "msapplication-tooltip",
    content: "CNRIKOREA",
  },
  {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
  },
  {
    httpEquiv: "x-ua-compatible" as const,
    content: "IE=edge; chrome=1",
  },
  {
    httpEquiv: "content-type" as const,
    content: "text/html;charset=UTF-8",
  },
];

export default {
  titleTemplate: "%s | CNRIKOREA",
  defaultTitle: "Welcome to CNRIKOREA",
  description: "기후변화와 탄소중립을 위한 최고의 파트너, 탄소중립연구원입니다!",
  canonical: "https://www.cnrikorea.com",
  // keywords:
  //   '기후변화, 탄소, 탄소 배출, 탄소 배출권, 탄소 배출 측정, cis, ci Simulator, 탄소중립연구원, cnri, cnri korea',
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.cnrikorea.com",
    title: "Welcome to CNRIKOREA",
    site_name: "CNRIKOREA | 탄소중립연구원",
    images: [
      {
        url: "https://user-images.githubusercontent.com/73585246/171162566-4b81f072-8238-41ce-bd56-2e4e2dc29d6f.png",
        width: 768,
        height: 220,
        alt: "CNRI-logo",
      },
    ],
  },
  additionalMetaTags,
};
