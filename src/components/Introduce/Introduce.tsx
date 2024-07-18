import { Article, Title } from "App";
import React from "react";
import styled from "styled-components";

export const Introduce = () => {
  return (
    <article className="px-5 pt-5">
      <h1 className="text-4xl font-bold  pb-3">
        <Span className="text-gray-600 py-1 inline-block">안녕하세요</Span>
        <br />
        꾸준히 우상향할 개발자 조성현
        <Span className="text-gray-600 pl-1 inline-block">입니다</Span>
      </h1>
      <div className="leading-7 tracking-tight text-base py-2 border-t-2 border-blue-400/70 break-keep">
        <span>
          개발자로 성장하는 과정에서 React 와 같은 프론트엔드 프레임워크를
          학습할 때, 단순한 암기보다는 컴포넌트 라이프사이클, 상태 관리와 같은
          핵심 개념을 이해하고 응용하는 것을 중요시합니다
        </span>
        <span className="py-1 inline-block">
          프로젝트 진행 중 발생하는 버그 및 이슈를 식별하고, 디버깅 과정을 통해
          백엔드 이슈로 확인된 경우, 원인 분석과 결과 보고를 명확히 전달한 후,
          팀원들과 적극적으로 소통하여 문제해결에 도움이 될 수 있도록
          기여합니다.
        </span>
        <span>
          인터렉티브한 웹 디자인과 제이콥의 법칙을 활용하여 UI/UX 디자인을
          구현하는 것을 좋아합니다
        </span>
      </div>
    </article>
  );
};

const Span = styled.span`
  font-weight: 300;
  display: inline-block;
`;
