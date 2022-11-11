/**
 * LCA 프로젝트 안내 페이지에서 '더 알아보기' 부분을 위한 컴포넌트
 */
import styled from "styled-components";
import Image from "next/image";
import {memo, useState} from "react";

export type SectionContentType = {
  numberString: string;
  title: string;
  imagePath: string;
  imageAlt: string;
  description: string[];
  additionalContents: AdditionalContentType[];
};

export type AdditionalContentType = {
  title: string;
  topic: TopicType[];
};

type TopicType = {
  summary: string;
  details?: string[];
};

function SectionDetail({
  sectionContent,
  index,
}: {
  sectionContent: SectionContentType;
  index: number;
}) {
  const isEven = (index + 1) % 2 === 0;

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <DetailsSummary onClick={() => setIsOpen((prev) => !prev)}>
        <summary className={`flex align-center ${isEven ? "justify-end" : "justify-start"}`}>
          <span className="mr-2">{isOpen ? "접기" : "더 알아보기"}</span>
          <div className="arrow">
            <Image src="/images/lca/icon_arrow.svg" alt="arrow" width={16} height={16} />
          </div>
        </summary>
      </DetailsSummary>
      <AdditionalContent className={`content ${isEven ? "justify-end" : "justify-start"}`}>
        {sectionContent.additionalContents.map((content) => (
          <Detail key={content.title} className={isEven ? "items-end" : "items-start"}>
            <h4>{content.title}</h4>
            <ul>
              {content.topic.map((topic) => (
                <li key={topic.summary}>
                  <div className="head flex align-center space-x-2">
                    <Image src="/images/lca/icon_check.svg" alt="check" width={16} height={16} />
                    <h5>{topic.summary}</h5>
                  </div>
                  <ul className="ml-4 sm:ml-8 lg:ml-12">
                    {topic.details
                      ? topic.details.map((detail) => <li key={detail}>{detail}</li>)
                      : null}
                  </ul>
                </li>
              ))}
            </ul>
          </Detail>
        ))}
      </AdditionalContent>
    </Wrapper>
  );
}

export default memo(SectionDetail);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  details[open] + .content {
    margin-top: 0;
    opacity: 1;
    height: 100%;
  }

  .arrow {
    transition: transform 0.3s;
    width: 16px;
    height: 16px;
    transform: rotate(0deg);
  }

  details[open] .arrow {
    transform: rotate(180deg);
  }
`;

const DetailsSummary = styled.details`
  width: 100%;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  cursor: pointer;
  z-index: 1;

  summary {
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    color: #dcdcdc;
    margin-bottom: 1rem;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }
`;

const AdditionalContent = styled.div`
  display: flex;
  width: 100%;
  height: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  transition: 0.3s ease;
  opacity: 0;

  @media (max-width: 1280px) {
    flex-direction: column;
  } ;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;

  h4 {
    margin-bottom: 1rem;
  }
  ul {
    li {
      margin-bottom: 1rem;
      .head {
        font-weight: 700;
        margin-bottom: 1rem;
      }
      ul {
        li {
          line-height: 1.5;
        }
      }
    }
  }
`;
