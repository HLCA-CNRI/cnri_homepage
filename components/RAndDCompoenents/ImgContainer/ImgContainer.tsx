interface imgContainerType {
  currentContent: string;
}

function ImgContainer({currentContent}: imgContainerType) {
  return (
    <div>
      <img
        alt="h2Img"
        id="totalBusiness"
        src="/images/partnershipData/h2.png"
        className={`${currentContent === "totalBusiness" ? "visible" : "hidden"} object-cover`}
      />
      <img
        alt="h2Img"
        id="h2"
        src="/images/partnershipData/posco.png"
        className={`${currentContent === "h2" ? "visible" : "hidden"} object-cover`}
      />
      <img
        alt="poscoImg"
        id="posco"
        src="/images/partnershipData/snu.png"
        className={`${currentContent === "posco" ? "visible" : "hidden"} object-cover`}
      />
      <img
        alt="poscoImg"
        src="/images/partnershipData/totalBusiness.png"
        className={`${currentContent === "snu" ? "visible" : "hidden"} object-cover`}
      />
    </div>
  );
}

export default ImgContainer;
