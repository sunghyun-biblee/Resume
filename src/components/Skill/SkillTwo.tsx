import { Article, TitleTwo } from "App";
import React from "react";
import { styled } from "styled-components";

export const SkillTwo = () => {
  return (
    <Article>
      <TitleTwo>Skills</TitleTwo>
      <div>
        {/* <h1 className="  text-[1.5rem] font-semibold mt-[0.5rem] ">
          Front-end
        </h1> */}
        <SkillList>
          <li>
            <span className="middle">React</span>
          </li>
          <li>
            <span className="middle">React-Query</span>
          </li>
          <li>
            <span className="middle">styled-component</span>
          </li>
          <li>
            <span className="middle">TailwindCSS</span>
          </li>
          <li>
            <span className="hard">Typescript</span>
          </li>

          {/* <li className="border-[1px] text-orange-800 font-semibold bg-[#FFE6D6] index7">
            Git
          </li> */}
        </SkillList>
        <SkillList>
          <li>
            <span className="normal">JS(ES+6)</span>
          </li>
          <li>
            <span className="normal text-orange-300">HTML/CSS</span>
          </li>
          <li>Git</li>
          <li>Postman</li>
        </SkillList>
      </div>
    </Article>
  );
};

const SkillList = styled.ul`
  li {
    margin-right: 15px;
  }
  display: flex;
  padding: 14px 8px 0px 8px;
  font-weight: 700;
  .middle {
    color: rgb(37, 99, 235);
  }
  .hard {
    color: rgb(126, 34, 206);
  }
  .normal {
    color: rgb(253, 186, 116);
    /* rgb(244, 63, 94) */
    /* rgb(251, 146, 60) */
  }
`;
const skillArray = [
  "Javascript",
  "Typescript",
  "React",
  "React-query",
  "styled-component",
  "TailwindCSS",
  "Postman",
];
