import React from "react";

import "./App.css";
import { Introduce } from "./components/Introduce/Introduce";
import { Projects } from "components/Projects/Projects";
import { Skill } from "components/Skill/Skill";
import { Education } from "components/Education/Education";
import styled from "styled-components";
import { Contact } from "components/Contact/Contact";
import { IntroduceTwo } from "components/Introduce/IntroduceTwo";
import { AboutMeTwo } from "./components/AboutMe/AboutMeTwo";
import { SkillTwo } from "components/Skill/SkillTwo";
import { ProjectsTwo } from "components/Projects/ProjectsTwo";

function App() {
  return (
    <div className=" w-[100vw] flex flex-col justify-center items-center ">
      <div>
        {/* V1 */}
        {/* <section className="max-w-[760px] w-[100%] font-pretendard ">
          <Introduce />
          <Article className="flex justify-between">
            <Contact />
            <Skill />
          </Article>
          <Projects />
          <Education />
        </section> */}
        {/* V2 */}
        <section className="max-w-[900px] w-[100%] font-pretendard p-4 ">
          <IntroduceTwo />
          <AboutMeTwo />
          <SkillTwo />
          <ProjectsTwo />
          <Education />
        </section>
      </div>
    </div>
  );
}
export const Article = styled.article`
  /* padding-top: 3rem; */
  padding: 1.8rem 1.25rem 0rem 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  padding-bottom: 0.25rem;
  border-bottom: 2px solid rgb(96, 165, 250);

  &::after {
    content: ".";
    color: rgb(96, 165, 250);
    padding: 0px 4px;
  }
`;
export const TitleTwo = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  border-bottom: 1px solid rgb(96, 165, 250);
  &::after {
    content: ".";
    color: rgb(96, 165, 250);
    padding: 0px 4px;
  }
`;
export default App;

// "after:content-['.'] after:text-blue-400 after:px-1 pb-2 border-b-2 border-blue-400"
