import { Article, Title } from "App";

import React from "react";
import styled from "styled-components";

export const Skill = () => {
  return (
    <div>
      <Title>Skills</Title>
      <div className=" mt-[1rem] ">
        {/* <h1 className="  text-[1.5rem] font-semibold mt-[0.5rem] ">
          Front-end
        </h1> */}
        <SkilGrid>
          {skillArray.map((item, index) => (
            <Skillbox
              key={item + index + "1"}
              className={`index${index} border-[1px]`}
            >
              <span>{item}</span>
            </Skillbox>
          ))}

          <ETCBox className="border-[1px] text-orange-800 font-semibold bg-[#FFE6D6] index7">
            Git
          </ETCBox>
        </SkilGrid>
      </div>
      {/* <div className="px-1">
        <h1 className="mb-3  text-[1.5rem] font-semibold ">ETC</h1>
        <ul className="w-[50%] flex justify-between mt-1  text-[1rem]">
          {ETCArray.map((item, index) => (
            <li key={item + index}>
              <ETCBox>{item}</ETCBox>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
const SkilGrid = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(9, 35px);
  justify-content: center;
  align-items: center;
  gap: 8px;
  .index0 {
    grid-column: 1/3;
  }
  .index1 {
    grid-column: 3/5;
  }
  .index2 {
    grid-column: 5/7;
  }
  .index3 {
    grid-column: 7/-1;
  }
  .index4 {
    grid-column: 1/5;
  }
  .index5 {
    grid-column: 5/8;
  }
  .index6 {
    grid-column: 8/-1;
  }
  .index7 {
    grid-column: 1/3;
    grid-row: 4/5;
  }
`;
export const Skillbox = styled.li`
  text-align: center;
  display: inline-block;
  padding: 5px 4px;
  font-size: 0.9rem;
  border-radius: 8px;
  font-weight: 500;
  background-color: #dbf2ff;
  color: rgb(29, 78, 216);
`;
const ETCBox = styled.li`
  font-weight: 500;
  text-align: center;
  min-width: 50px;
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 8px;
  background-color: #dbf2ff;
  color: orange;
`;
const skillArray = [
  "Javascript",
  "Typescript",
  "React",
  "React-query",
  "Styled-component",
  "TailwindCSS",
  "Postman",
];
const ETCArray = ["git"];
