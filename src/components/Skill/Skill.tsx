import { Article, Title } from "App";
import { Skillbox } from "components/Projects/ProejctItem";
import React from "react";
import styled from "styled-components";

export const Skill = () => {
  return (
    <article className="mt-[3rem] mb-[6rem]">
      <Title className="after:content-['.'] after:text-blue-400 after:px-1 pb-2 border-b-2 border-blue-400">
        Skills
      </Title>
      <div className="p-1 mb-3 ">
        <h1 className="mb-1  text-lg font-medium up">Front-end</h1>
        <ul className="flex justify-between text-[1rem]">
          {skillArray.map((item, index) => (
            <li key={item + index + "1"}>
              <Skillbox>{item}</Skillbox>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-1">
        <h1 className="mb-1  text-lg font-medium">ETC</h1>
        <ul className="w-[50%] flex justify-between mt-1  text-[1rem]">
          {ETCArray.map((item) => (
            <ETCBox key={item}>{item}</ETCBox>
          ))}
        </ul>
      </div>
    </article>
  );
};

const ETCBox = styled.span`
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  min-width: 50px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  border-radius: 8px;
  background-color: #dbf2ff;
  color: black;
`;
const skillArray = [
  "HTML/CSS",
  "Javascript",
  "Typescript",
  "React",
  "React-query",
  "tailwindCSS",
  "styled-component",
];
const ETCArray = ["git", "github", "vscode", "postman"];
