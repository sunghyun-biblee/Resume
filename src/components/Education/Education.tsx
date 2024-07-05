import { Article, Title } from "App";
import React from "react";
import { EducationItem } from "./EducationItem";

const eductaionArray = [
  {
    title: "멀티캠퍼스 웹 서비스 개발자 취업캠프",
    date: "2023.09.11 ~ 2024.02.02",
    summary: "개인 최우수상 수상",
  },
  {
    title: "정보처리산업기사 취득",
    date: "2022.03.23 ~ 2022.06.17",
    summary: null,
  },
  {
    title: "계명문화대학교",
    date: "2018.03.02 ~ 2020.08.14",
    summary: "컴퓨터학부 / 네트워크·정보보안 전공",
  },
];
export const Education = () => {
  return (
    <Article className="pt-[2.8rem]">
      <Title className="pb-2 border-b-2 border-blue-400">Education</Title>
      <ul className="mt-[0.5rem]">
        {eductaionArray.map((item, index) => (
          <EducationItem item={item} key={item.title + index}></EducationItem>
        ))}
      </ul>
    </Article>
  );
};
