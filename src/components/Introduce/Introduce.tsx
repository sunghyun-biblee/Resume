import { Article, Title } from "App";
import React from "react";
import styled from "styled-components";

export const Introduce = () => {
  return (
    <article className="mt-[4rem]">
      <Title>
        <Span className="text-gray-600 py-1 inline-block">안녕하세요</Span>
        <br />
        꾸준히 우상향할 개발자 조성현
        <Span className="text-gray-600 pl-1 inline-block">입니다</Span>
      </Title>
      <p className="leading-7 tracking-tight text-base py-2 border-t-2 border-blue-400/70">
        개발자로 성장하는 과정에서 처음 마주하는 기술들에 시간이 걸리더라도
        외우려 하지 않고 최대한 이해하여 사용하는 것을 선호 합니다.
        <span className="py-1 inline-block">
          프로젝트 진행 중 발생하는 문제에 대해 회피하지 않고 팀원들과 소통하여
          해결하며, 일정과 리소스를 고려하여 우선순위를 유연하게 조정하고,
          팀원들의 공감을 바탕으로 프로젝트를 끝까지 마무리합니다.
        </span>
        이런 경험을 바탕으로 배움에 대한 열정을 잃지 않고 꾸준한 노력을 기반으로
        멀티캠퍼스 웹 개발자 수료과정에서 개인 최우수상 을 수상했습니다
      </p>
    </article>
  );
};

const Span = styled.span`
  font-weight: 300;
  display: inline-block;
`;
