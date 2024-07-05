import { Skillbox } from "components/Skill/Skill";
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
  const renderText = (item: projectItemType) => {
    switch (item.personnel.length) {
      case 1:
        return <li>프론트엔드 1명</li>;

      default:
        return (
          <>
            <li className={` border-r-2 box-border pr-[1rem] mr-[1rem]`}>{`${
              item.personnel[0] + item.personnel[1]
            }인 (프론트엔드 ${item.personnel[0]}명, 백엔드 ${
              item.personnel[1]
            }명)`}</li>
            <li className="">{item.role}</li>
          </>
        );
    }
  };
  return (
    <div
      className={`mb-[1.5rem]
     ${index === 0 && "mt-[1rem]"}
     ${index !== 0 && "border-t-2 border-blue-100 pt-3"}
      px-2`}
    >
      <div className="flex justify-between items-end">
        <h1 className="text-[1.75rem] leading-[2rem] font-bold">
          {item.title}
        </h1>
        <span className="font-medium text-gray-500">{item.date}</span>
      </div>
      <span className="pt-2 inline-block">{item.summary}</span>

      <ul className=" pt-[0.75rem] ">
        <li className="flex border-t-[1px] py-[6px]">
          <ProjectChapter>
            {item.category === "solo" ? "개인 프로젝트" : "팀 프로젝트"}
          </ProjectChapter>
          <ProjectContent className=" items-center ">
            {renderText(item)}
          </ProjectContent>
        </li>
        <li className="flex border-t-[1px] py-2 items-center">
          <ProjectChapter>활용한 기술 스택</ProjectChapter>
          <ProjectContent className="gap-2  ">
            {item.skills.map((item, index) => (
              <Skillbox key={item + index}>{item}</Skillbox>
            ))}
          </ProjectContent>
        </li>
        <li className="flex border-t-[1px] py-1">
          <ProjectChapter>프로젝트 핵심기능</ProjectChapter>
          <ProjectContent className="flex-col px-1 ">
            {item.functions.map((item, index) => (
              <FunctionsLi
                key={item + index}
                className="py-1 tracking-tight break-keep"
              >
                {item}
              </FunctionsLi>
            ))}
          </ProjectContent>
        </li>
        <li className="flex border-t-[1px] pt-1">
          <ProjectChapter>링크</ProjectChapter>
          <ProjectContent className="flex-col px-1">
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
          </ProjectContent>
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
const ProjectChapter = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 500;
  width: 25%;
`;
const ProjectContent = styled.ul`
  display: flex;
  width: 75%;
`;
const FunctionsLi = styled.li`
  list-style: disc;
  font-weight: 500;
  &::marker {
    color: #5ea3ec;
  }
`;
