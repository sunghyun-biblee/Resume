import React from "react";
import styled from "styled-components";

export const Introduce = () => {
  return (
    <article>
      <h1 className="mt-[5rem] mb-[2.3rem]   text-4xl font-bold">
        <Span className="text-gray-600 py-1">안녕하세요</Span>
        <br />
        꾸준히 우상향할 개발자 조성현
        <Span className="text-gray-600 px-1"> 입니다.</Span>
      </h1>
      <p className="leading-7 tracking-tight text-base py-2 border-t-2 border-blue-400/70">
        개발자로 성장하는 과정에서 처음 마주하는 기술들에 시간이 걸리더라도
        외우려 하지 않고 최대한 이해하여 사용하는 것을 선호 합니다.
        <span className="py-1 inline-block">
          프로젝트 진행 중 발생하는 문제에 대해 회피하지 않고 팀원들과 소통하여
          해결하며, 일정과 리소스를 고려하여 우선순위를 유연하게 조정하여,
          팀원들의 공감을 바탕으로 프로젝트를 끝까지 마무리합니다.
        </span>
        이런 경험을 바탕으로 배움에 대한 열정을 잃지 않고 꾸준한 노력을 기반으로
        멀티캠퍼스 웹 개발자 수료과정에서 개인 최우수상 을 수상했습니다
      </p>
      <Contact className="flex justify-end gap-[20px]">
        <ContactItem>
          <a href="#">sunghyun543@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <a href="#"> Github</a>
        </ContactItem>
        <ContactItem>
          <a href="#">Portfolio</a>
        </ContactItem>
      </Contact>
    </article>
  );
};

const Contact = styled.ul`
  display: flex;
  justify-content: end;
  gap: 20px;
`;
const ContactItem = styled.li`
  transition: all 0.3s;
  color: rgb(107, 114, 128);
  &:hover {
    cursor: pointer;
    color: rgb(59, 130, 246);
  }
  a {
    border-bottom: 1px solid rgb(107, 114, 128);
    &:hover {
      border-bottom: 1px solid rgb(59, 130, 246);
    }
  }
`;
const Span = styled.span`
  font-weight: 300;
  display: inline-block;
`;
