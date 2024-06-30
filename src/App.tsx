import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AboutMe } from "components/AboutMe/AboutMe";
import { Introduce } from "./components/Introduce/Introduce";
import { Projects } from "components/Projects/Projects";
import { Skill } from "components/Skill/Skill";
import { Education } from "components/Education/Education";

function App() {
  return (
    <div className=" w-[100vw] flex flex-col justify-center items-center ">
      <div className="py-3 px-4">
        <section className="max-w-[760px] w-[100%] font-pretendard ">
          <Introduce />

          <Projects />
          <Skill />
          <Education />
        </section>
      </div>
    </div>
  );
}

export default App;
