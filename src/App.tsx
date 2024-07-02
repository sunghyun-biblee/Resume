import React from "react";

import "./App.css";
import { Introduce } from "./components/Introduce/Introduce";
import { Projects } from "components/Projects/Projects";
import { Skill } from "components/Skill/Skill";
import { Education } from "components/Education/Education";
import styled from "styled-components";
import { Contact } from "components/Contact/Contact";

function App() {
  return (
    <div className=" w-[100vw] flex flex-col justify-center items-center ">
      <div>
        <section className="max-w-[760px] w-[100%] font-pretendard ">
          <Introduce />
          <Contact></Contact>
          <Skill />

          <Projects />
          <Education />
        </section>
      </div>
    </div>
  );
}
export const Article = styled.article`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
export const Title = styled.h1`
  margin-bottom: 1.3rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
`;
export default App;
