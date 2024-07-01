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
      <div className="py-3 px-4">
        <section className="max-w-[760px] w-[100%] font-pretendard ">
          <Introduce />
          <Contact></Contact>

          <Projects />
          <Skill />
          <Education />
        </section>
      </div>
    </div>
  );
}
export const Article = styled.article`
  margin-top: 8rem;
`;
export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-weight: 700;
`;
export default App;
