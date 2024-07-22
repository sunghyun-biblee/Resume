import React from "react";
import styled from "styled-components";

type Trouble = {
  troubleTitle: string;
  trouble: string;
  solution: string;
};
interface projectItemType {
  projectIMG: string;
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
  projectText: string[];
  projectTrouble: string[] | null;
  review?: string;
}
type IProejctItem = {
  item: projectItemType;
  index: number;
};
export const ProjectItemThree = ({ item, index }: IProejctItem) => {
  return (
    <li
      className={`px-1 py-2 flex flex-col  ${
        index === 0 ? "mt-[0.5rem]" : "pt-[3rem]"
      } gap-2`}
    >
      <div className="flex ">
        <div className="min-w-[40%] max-w-[190px] ">
          <img
            src={item.projectIMG}
            alt="projectIMG"
            className="w-[100%] h-[100%] border-[1px]"
          />
        </div>
        <div className="flex flex-col w-[59%] pl-[1.5%] ">
          <div className="flex justify-between items-end border-b-[1px] border-zinc-200 pb-[1px]">
            <h1 className="text-[1.4rem] leading-[1.75rem] font-bold">
              {item.title}
            </h1>
            <span className="font-medium text-gray-500 ">{item.date}</span>
          </div>
          <p className=" inline-block text-[13px] leading-[1rem] pt-2 tracking-tight ">
            {item.summary}
          </p>
          <ul className="flex text-sm text-blue-600 font-semibold pt-2 px-1 gap-2 flex-wrap">
            {item.skills.map((data, index) => (
              <li key={data + index} className="tracking-wide mr-[2px]">
                {data} {index === item.skills.length - 1 ? "" : ""}
              </li>
            ))}
          </ul>

          <ul className="pt-1">
            {item.projectText.map((text, index) => (
              <ProjectTextLi key={text + index}>
                <span className="block">✔</span>
                <p className="text-sm ">{text}</p>
              </ProjectTextLi>
            ))}
            {item.projectTrouble &&
              item.projectTrouble.map((text, index) => (
                <ProjectTextLi key={index + text} className={`font-medium `}>
                  <span className="inline-block">✔</span>
                  <p className="text-sm">{text}</p>
                </ProjectTextLi>
              ))}
          </ul>
        </div>
      </div>
      {item.review && (
        <p
          className={`px-1 ${
            index === 0 ? "mt-[0.5rem]" : "mt-[0.5rem]"
          } tracking-tight`}
        >
          ✍ {item.review}
        </p>
      )}
    </li>
  );
};

const ProjectTextLi = styled.li`
  display: flex;
  letter-spacing: -0.025rem;
  word-break: keep-all;

  padding: 5px 0;
  span {
    margin-right: 5px;
    color: rgb(96, 165, 250);
  }
  /* span {
    &::before {
      content: "✔";
      color: rgb(96, 165, 250);
      margin-right: 5px;
    }
  } */
  /* &::marker {
    content: "✔";
    color: rgb(96, 165, 250);
  } */
`;
