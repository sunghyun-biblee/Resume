import { Skillbox } from "components/Skill/Skill";
import React from "react";
import styled from "styled-components";

type Trouble = {
  troubleTitle: string;
  trouble: string;
  solution: string;
};
interface projectItemType {
  projectIMG: string | null;
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
  troubleShooting: Trouble[] | null;
}
type IProejctItem = {
  item: projectItemType;
  index: number;
};
export const ProejctItem = ({ item, index }: IProejctItem) => {
  const path = item.github?.split("https://")[1];
  console.log(path);
  const renderText = (item: projectItemType) => {
    switch (item.personnel.length) {
      case 1:
        return <li>프론트엔드 1명</li>;

      default:
        return (
          <>
            <li className={` border-r-2 box-border pr-[1rem] mr-[1rem] `}>{`${
              item.personnel[0] + item.personnel[1]
            }인 (프론트엔드 ${item.personnel[0]}명, 백엔드 ${
              item.personnel[1]
            }명)`}</li>
            <li>{item.role}</li>
          </>
        );
    }
  };
  return (
    <div
      className={`mb-[4rem]
     ${index === 0 && "mt-[1.5rem]"}
     ${index !== 0 && "border-t-2 border-blue-100 pt-3"}
      px-2`}
    >
      <div className="flex justify-between items-end">
        <h1 className="text-[1.4rem] leading-[1.75rem] font-bold">
          {item.title}
        </h1>
        <span className="font-medium text-gray-500">{item.date}</span>
      </div>
      <span className="pt-2 inline-block">{item.summary}</span>

      <ul className=" pt-[0.75rem] text-base ">
        <li className="flex border-t-[1px] py-[6px]">
          <ProjectChapter>
            {item.category === "solo" ? "개인 프로젝트" : "팀 프로젝트"}
          </ProjectChapter>
          <ProjectContent className="text-sm items-center ">
            {renderText(item)}
          </ProjectContent>
        </li>
        {/* <li className="flex border-t-[1px] py-2 items-center">
          <ProjectChapter>활용한 기술 스택</ProjectChapter>
          <ProjectContent className="gap-2  ">
            {item.skills.map((item, index) => (
              <Skillbox key={item + index}>{item}</Skillbox>
            ))}
          </ProjectContent>
        </li> */}
        <li className="flex border-t-[1px] py-2 ">
          <ProjectChapter className="py-1 tracking-tighter">
            핵심기능 구현
          </ProjectChapter>
          <ProjectContent className="flex-col px-1  ">
            {item.functions.map((item, index) => (
              <FunctionsLi
                key={item + index}
                className="py-1 tracking-tight break-keep text-[14px]"
              >
                <span>{item}</span>
              </FunctionsLi>
            ))}
          </ProjectContent>
        </li>

        {item.troubleShooting && (
          <li className="flex border-t-[1px] py-2">
            <ProjectChapter>트러블 슈팅</ProjectChapter>
            <ProjectContent className="flex-col px-1 ">
              {item.troubleShooting.length >= 1 &&
                item.troubleShooting.map((item, index) => (
                  <FunctionsLi
                    key={item.troubleTitle + index}
                    className="py-1 tracking-tight th"
                  >
                    <span>{item.troubleTitle}</span>
                    <p className="text-sm font-normal mb-[0.25rem] py-1">
                      <span className="font-medium mr-[0.25rem]">[문제점]</span>
                      {item.trouble}
                    </p>
                    <p className="text-sm font-normal">
                      <span className="font-medium mr-[0.25rem]">[해결]</span>
                      {item.solution}
                    </p>
                  </FunctionsLi>
                ))}
            </ProjectContent>
          </li>
        )}

        <li className="flex border-t-[1px] pt-2">
          <ProjectChapter>링크</ProjectChapter>
          <ProjectContent className="justify-between px-1 items-center">
            {item.github && (
              <li>
                <ProjectLink
                  href={item.github}
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  {item.github?.split("https://")[1]}
                </ProjectLink>
              </li>
            )}
            {item.deploy && (
              <li>
                <ProjectLink
                  href={item.deploy}
                  target="_blank"
                  rel="noopender noreferrer"
                >
                  {item.deploy?.split("https://")[1]}
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
  letter-spacing: -0.03rem;
  font-size: 1rem;
  font-weight: 600;
  min-width: 115px;
`;
const ProjectContent = styled.ul`
  display: flex;
`;
const FunctionsLi = styled.li`
  font-weight: 500;
  &.th {
    list-style: disc;
    &::marker {
      display: block;
      color: #5ea3ec;
    }
  }
`;
