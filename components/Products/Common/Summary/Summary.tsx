import React, {memo} from "react";
import Image from "next/image";
import {MdFileDownload} from "react-icons/md";
import styled from "styled-components";
import {ProductNameEnum} from "../../../../constants/enum/product_name.enum";
import {
  ProductDownloadFileNameMapping,
  ProductKorNameMapping,
  ProductNameInterpretMapping,
  ProductNameSummaryMapping,
} from "../../../../constants/productMapping";
import * as CSS from "../SharedStyle";

type PropTypes = {
  isPhotoLeft?: boolean;
  logoPath: string;
  imgPath: string;
  productEnum: ProductNameEnum;
  mainColor: string;
  darkColor: string;
};

const Summary = memo(
  ({isPhotoLeft = false, logoPath, imgPath, productEnum, mainColor, darkColor}: PropTypes) => {
    const esline = "";
    return (
      <CSS.ContentFlex isPhotoLeft={isPhotoLeft}>
        <div>
          <div className="px-[10vw] xl:px-0">
            <NameSection
              productEnum={productEnum}
              logoPath={logoPath}
              mainColor={mainColor}
              darkColor={darkColor}
            />

            <Description>{ProductNameSummaryMapping.get(productEnum ?? "")}</Description>
          </div>
          <MobileImageWrapper>
            <Image src={imgPath} layout="fill" alt={`${productEnum}_sample_img`} />
          </MobileImageWrapper>
          <div className="flex flex-col gap-5 items-center md:items-start ">
            <a
              href={`/downloads/${ProductDownloadFileNameMapping.get(productEnum) ?? ""}`}
              download>
              <Button bgColor={darkColor}>
                제품소개서
                <MdFileDownload size={22} color="white" className="inline xl:ml-1" />
              </Button>
            </a>
            <Button bgColor={mainColor}>데모신청</Button>
          </div>
        </div>
        <PcImageWrapper>
          <Image src={imgPath} layout="fill" alt={`${productEnum}_sample_img`} />
        </PcImageWrapper>
      </CSS.ContentFlex>
    );
  }
);

export default Summary;

const Button = styled.button<{bgColor: string}>`
  background-color: ${({bgColor}) => bgColor};
  color: white;

  width: 70vw;
  padding: 1.5vh 0;
  border-radius: 2vw;
  font-size: 4vw;

  @media screen and (min-width: 1200px) {
    width: 200px;
    padding: 10px 0;
    border-radius: 10px;
    font-size: 1rem;
  }
`;

const Description = styled.div`
  white-space: pre-wrap;

  font-size: 3.8vw;
  margin: 2.5vh 0;
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
    margin: 30px 0 40px 0;
  }
`;

const MobileImageWrapper = styled.div`
  position: relative;

  width: 90vw;
  height: 60vw;
  margin: 5vh 0;
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const PcImageWrapper = styled.div`
  position: relative;

  display: none;

  @media screen and (min-width: 1200px) {
    display: block;
    width: 730px;
    height: 500px;
  }
`;

type NameSectionPropTypes = {
  productEnum: ProductNameEnum;
  logoPath: string;
  mainColor: string;
  darkColor: string;
};

const NameSection = memo(({productEnum, logoPath, mainColor, darkColor}: NameSectionPropTypes) => (
  <div>
    <div className="flex items-end">
      <LogoWrapper>
        <Image src={logoPath} layout="fill" alt={`${productEnum}_logo`} />
      </LogoWrapper>
      <ProductKorean color={darkColor}>
        {ProductKorNameMapping.get(productEnum) ?? ""}
      </ProductKorean>
    </div>

    <ProductNameInterPret bgColor={mainColor}>
      {ProductNameInterpretMapping.get(productEnum) ?? ""}
    </ProductNameInterPret>
  </div>
));

const LogoWrapper = styled.div`
  position: relative;

  width: 35vw;
  height: 14vw;

  @media screen and (min-width: 1200px) {
    width: 200px;
    height: 74px;
  }
`;

const ProductKorean = styled.div<{color: string}>`
  color: ${({color}) => color};

  font-weight: light;
  padding-left: 2vw;
  font-size: 4vw;

  @media screen and (min-width: 1200px) {
    font-weight: bold;
    font-size: 20px;
    padding-left: 7px;
  }
`;

const ProductNameInterPret = styled.div<{bgColor: string}>`
  color: white;
  background-color: ${({bgColor}) => bgColor};
  text-align: center;

  font-weight: light;
  font-size: 3.5vw;
  border-radius: 3vw;
  width: 40vw;
  padding: 0.7vw 0;
  margin-top: 0.5vh;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    border-radius: 10px;
    width: 230px;
    padding: 1px 0;
    margin-top: 10px;
    font-weight: normal;
  }
`;
