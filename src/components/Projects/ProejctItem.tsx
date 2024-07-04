import React from "react";
import styled from "styled-components";

interface projectItemType {
  title: string;
  summary: string;
  category: string;
  personnel: number[];
  role: string;
  github: string | null;
  deploy: string | null;
  skills: string[];
  functions: string[];
  date: string;
}
type IProejctItem = {
  item: projectItemType;
  index: number;
};
export const ProejctItem = ({ item, index }: IProejctItem) => {
  return (
    <div
      className={`mb-[3.5rem]
     ${index === 0 && "mt-[1rem]"}
     ${index !== 0 && "border-t-2 border-blue-100 pt-5"}
      p-2`}
    >
      <div className="flex justify-between items-end">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <span className="font-medium text-gray-500">{item.date}</span>
      </div>
      <span className="pt-4 inline-block">{item.summary}</span>

      <ul className=" border-t-[1px] mt-[1.7rem] ">
        <li className="flex border-b-[1px] py-2">
          <SectionChapter className="w-[30%]">
            {item.category === "solo" ? "개인 프로젝트" : "팀 프로젝트"}
          </SectionChapter>
          <div className="w-[70%] flex flex-col">
            <span>프론트엔드 담당</span>
            {item.personnel.length === 1 ? (
              <span className="pt-2">프론트엔드 1명</span>
            ) : (
              <span className="pt-2">{`프론트엔드 ${item.personnel[0]}명 / 백엔드 ${item.personnel[1]}명`}</span>
            )}
          </div>
        </li>
        <li className="flex border-b-[1px] py-2 items-center">
          <SectionChapter className="w-[30%]">활용한 기술 스택</SectionChapter>
          <div className="gap-2 flex w-[70%]">
            {item.skills.map((item, index) => (
              <Skillbox key={item + index}>{item}</Skillbox>
            ))}
          </div>
        </li>
        <li className="flex border-b-[1px] py-2">
          <SectionChapter>프로젝트 기여</SectionChapter>
          <ul className="w-[70%] px-1">
            {item.functions.map((item, index) => (
              <FunctionsLi key={item + index} className="py-1">
                {item}
              </FunctionsLi>
            ))}
          </ul>
        </li>
        <li className="flex py-2">
          <SectionChapter>링크</SectionChapter>
          <ul className="w-[70%] px-1">
            {item.github && (
              <li className="pb-1">
                <ProjectLink
                  href={item.github}
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  {item.github}
                </ProjectLink>
              </li>
            )}
            {item.deploy && (
              <li className="pt-1">
                <ProjectLink
                  href={item.deploy}
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  {item.deploy}
                </ProjectLink>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

const ProjectLink = styled.a`
  padding-bottom: 1px;
  border-bottom: 1px solid rgba(107, 114, 128, 0.7);
  &:hover {
    border-bottom: 1px solid rgb(59, 130, 246);
    cursor: pointer;
    color: rgb(59, 130, 246);
  }
`;
const SectionChapter = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 500;
  width: 30%;
`;
const FunctionsLi = styled.li`
  list-style: disc;
  font-weight: 500;
  &::marker {
    color: #5ea3ec;
  }
`;

export const Skillbox = styled.span`
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 8px;
  font-weight: 500;
  background-color: #dbf2ff;
  color: rgb(29, 78, 216);
`;
