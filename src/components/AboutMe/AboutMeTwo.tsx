import { Article, TitleTwo } from "App";
import React from "react";
import styled from "styled-components";

export const AboutMeTwo = () => {
  return (
    <Article>
      <TitleTwo>About Me</TitleTwo>
      <AboutMeList>
        <AboutListItem>
          개발자로 성장하는 과정에서 React 와 같은 프론트엔드 프레임워크를
          학습할 때, 단순한 암기보다는 컴포넌트 라이프사이클, 상태 관리와 같은
          핵심 개념을 이해하고 응용하는 것을 중요시합니다
        </AboutListItem>
        <AboutListItem>
          프로젝트 진행 중 발생하는 버그 및 이슈를 식별하고, 디버깅 과정을 통해
          백엔드 이슈로 확인된 경우, 원인 분석과 결과 보고를 명확히 전달한 후,
          팀원들과 적극적으로 소통하여 문제해결에 도움이 될 수 있도록
          기여합니다.
        </AboutListItem>
        <AboutListItem>
          인터렉티브한 웹 디자인과 제이콥의 법칙을 활용하여 UI/UX 디자인을
          구현하는 것을 좋아합니다
        </AboutListItem>
      </AboutMeList>
    </Article>
  );
};

const AboutListItem = styled.li`
  padding: 2px 0px;
  list-style: disc;
  &::marker {
    display: inline-block;
    color: #5ea3ec;
  }
`;
const AboutMeList = styled.ul`
  line-height: 1.7rem;
  letter-spacing: -0.025rem;
  font-size: 1rem;
  padding: 0.5rem 1.1rem;
  word-break: keep-all;
`;
// rgb(96, 165, 250)
