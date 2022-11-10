/**
 * LCA 프로젝트 안내 페이지에서 '더 알아보기' 부분을 위한 컴포넌트
 */
import styled from "styled-components";
import Image from "next/image";
import {memo} from "react";

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

function SectionDetail({sectionContent}: {sectionContent: SectionContentType}) {
  return (
    <Wrapper>
      <DetailsSummary>
        <summary className="flex align-center">
          <span className="mr-2">더 알아보기</span>
          <div className="arrow">
            <Image src="/images/lca/icon_arrow.svg" alt="arrow" width={16} height={16} />
          </div>
        </summary>
      </DetailsSummary>
      <div className="content-wrapper">
        <AdditionalContent className="content">
          {sectionContent.additionalContents.map((content) => (
            <Detail key={content.title}>
              <h4>{content.title}</h4>
              <ul>
                {content.topic.map((topic) => (
                  <li key={topic.summary} className="sm:ml-12 lg:ml-20">
                    <div className="head flex align-center">
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
      </div>
    </Wrapper>
  );
}

export default memo(SectionDetail);

const Wrapper = styled.div`
  .content-wrapper {
    overflow: hidden;
  }

  details[open] + .content-wrapper > .content {
    margin-top: 0;
    opacity: 1;
  }

  .arrow {
    transition: transform 0.3s;
    width: 16px;
    height: 16px;
    transform: rotate(180deg);
  }

  details[open] .arrow {
    transform: rotate(0deg);
  }
`;

const DetailsSummary = styled.details`
  width: 100%;
  // height: 5rem;
  background-color: #fff;
  // border: 1px solid #000;
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
    // list-style: none;
  }
`;

const AdditionalContent = styled.div`
  width: 100%;
  height: 100%;
  // margin-top: 5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25rem;
  z-index: -1;

  transition: 0.3s ease;

  opacity: 0;
`;

const Detail = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;
  h4 {
    // font-size: 1.5rem;
    // font-weight: 700;
    margin-bottom: 1rem;
  }
  ul {
    li {
      margin-bottom: 1rem;
      .head {
        // font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        h5 {
          margin-left: 0.2rem;
        }
      }
      ul {
        li {
          // font-size: 1.5rem;
          // font-weight: 400;
          line-height: 1.5;
        }
      }
    }
  }
`;
