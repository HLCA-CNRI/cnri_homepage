import React, {memo, useState} from "react";
import Image from "next/image";
import styled, {css} from "styled-components";
import {useRouter} from "next/router";
import colors from "../../../constants/colors";

type ButtonContentType = {
  description: string;
  title: string;
  mainColor: string;
  logoPath: string;
  link: string;
};

const ProductButtons = memo(() => {
  const buttonContents: ButtonContentType[] = [
    {
      description: "CDP/SBTi/해외 고객사 대응을 위한",
      title: "탄소회계 ERP",
      mainColor: colors.CIS_MAIN_GREEN,
      logoPath: "/images/cis/greenerp_logo.svg",
      link: "/product/cis",
    },
    {
      description: "업무 효율 개선을 위한",
      title: "탄소회계 RPA",
      mainColor: colors.CIET_MINT_2,
      logoPath: "/images/ciet/ciet_logo.svg",
      link: "/product/ciet",
    },
    {
      description: "제품 탄소발자국",
      title: "LCA 문의",
      mainColor: colors.CIET_NAVY,
      logoPath: "/images/lca/lca_logo.svg",
      link: "/lca",
    },
  ];
  return (
    <Wrapper>
      {buttonContents.map((content) => (
        <ProductButton
          key={content.logoPath}
          description={content.description}
          title={content.title}
          mainColor={content.mainColor}
          logoPath={content.logoPath}
          link={content.link}
        />
      ))}
    </Wrapper>
  );
});

export default ProductButtons;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (min-width: 1200px) {
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-around;
    gap: 0;
  }
`;

type ButtonPropTypes = {
  description: string;
  title: string;
  mainColor: string;
  logoPath: string;
  link: string;
};
const ProductButton = memo(({description, title, mainColor, logoPath, link}: ButtonPropTypes) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };
  return (
    <ButtonWrapper
      onClick={() => router.push(link)}
      isHover={isHover}
      hoverBgColor={mainColor}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      <ButtonCover isHover={isHover}>
        <div className="w-1/2 h-full relative ">
          <Image src={logoPath} alt="logo" layout="fill" className="object-contain" />
        </div>
      </ButtonCover>

      <Description>{description}</Description>
      <Title color={mainColor}>{title}</Title>
    </ButtonWrapper>
  );
});

const ButtonSizeStyle = css`
  width: 70vw;
  height: 20vw;

  @media screen and (min-width: 1200px) {
    width: 250px;
    height: 90px;
  }
`;

const Transition = css`
  transition: all ease-in-out 0.5s;
`;

const ButtonWrapper = styled.div<{isHover: boolean; hoverBgColor: string}>`
  ${Transition}
  cursor: pointer;
  background-color: ${({isHover, hoverBgColor}) => (isHover ? hoverBgColor : "white")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  border-radius: 3vw;

  @media screen and (min-width: 1200px) {
    border-radius: 10px;
  }

  ${ButtonSizeStyle}
`;

const ButtonCover = styled.div<{isHover: boolean}>`
  ${Transition}
  ${ButtonSizeStyle}
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;

  transform: ${({isHover}) => (isHover ? "" : "translateY(-100%)")};
  border-radius: ${({isHover}) => (isHover ? "" : "0 0 100% 100%")};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div<{color: string}>`
  font-weight: bold;
  color: ${({color}) => color};

  font-size: 5vw;

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

const Description = styled.div`
  font-size: 3vw;

  @media screen and (min-width: 1200px) {
    font-size: 0.8rem;
  }
`;
