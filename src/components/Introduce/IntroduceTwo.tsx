import { Article, Title } from "App";
import React from "react";
import resumeIMG from "assets/image/resumeIMG.jpg";
import styled from "styled-components";

export const IntroduceTwo = () => {
  return (
    <Article className="pt-[0px]">
      <h1 className="text-3xl font-bold  pb-[3rem]">
        <span className="text-gray-600 py-1 inline-block font-light">
          안녕하세요
        </span>
        <br />
        꾸준히 우상향할 개발자 조성현
        <span className="text-gray-600 pl-1 inline-block font-light">
          입니다
        </span>
      </h1>
      <h2 className="text-2xl font-semibold border-b-[1px] pb-1 border-blue-400">
        👨‍💻 Front-End Enginner
      </h2>
      <div className="flex p-3">
        <div className="mr-10 rounded-md border-[1px] overflow-hidden">
          <img
            src={resumeIMG}
            alt="resumeIMG"
            className="w-[150px] h-[190px] "
          />
        </div>
        <div className="box-border">
          <ContactChannels>Contact & Channels</ContactChannels>
          <ContactList>
            <ContactItem>
              <ContactSpan>Email</ContactSpan>
              <button>sunghyun543@gmail.com</button>
              {/* <span className="text-sm text-gray-400"> (메일클릭시 복사)</span> */}
            </ContactItem>
            <ContactItem>
              <ContactSpan>Github</ContactSpan>
              <a
                href="https://github.com/sunghyun-biblee"
                target="_blank"
                rel="noopender noreferrer"
              >
                github.com/sunghyun-biblee
              </a>
            </ContactItem>
            <ContactItem>
              <ContactSpan>Portfolio</ContactSpan>
              <a href="https://bibleeportfolio.vercel.app/">
                bibleeportfolio.vercel.app
              </a>
            </ContactItem>
            <ContactItem>
              <ContactSpan>Phone</ContactSpan>
              <span className="tracking-wide">010-0000-0000</span>
            </ContactItem>
          </ContactList>
        </div>
      </div>
    </Article>
  );
};
const ContactChannels = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;

  /* border-bottom: 1px solid rgb(96, 165, 250); */

  &::after {
    content: ".";
    color: rgb(96, 165, 250);
    padding: 0px 4px;
  }
`;
const ContactSpan = styled.span`
  font-weight: 600;
  width: 75px;
  display: inline-block;
  margin-right: 0.7rem;
  &::after {
    content: " ";
    width: 4px;
    height: 4px;
    background-color: rgb(59, 130, 246);
    border: none;
    border-radius: 100%;
    margin-left: 3px;
    display: inline-block;
  }
`;
const ContactList = styled.ul`
  height: calc(190px - 38px);
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContactItem = styled.li`
  transition: all 0.3s;
  padding: 5px 0px;

  button {
    margin-right: 5px;
  }
  a,
  button,
  span {
    color: rgb(49, 52, 58);
    &:hover {
      cursor: pointer;
      color: rgb(59, 130, 246);
    }
  }
`;
