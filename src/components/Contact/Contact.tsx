import { Article, Title } from "App";
import React from "react";
import styled from "styled-components";

export const Contact = () => {
  const handleCopy = (text: string) => {
    try {
      navigator.clipboard.writeText(text);
      alert("클릭보드에 복사되었습니다");
    } catch (error) {
      alert("복사에 실패하였습니다");
    }
  };
  return (
    <div className="w-[43%]">
      <Title>Contact</Title>
      <ContactList>
        <ContactItem>
          <ContactSpan>Email</ContactSpan>
          <button onClick={() => handleCopy("sunghyun543@gmail.com")}>
            sunghyun543@gmail.com
          </button>
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
          <a href="#">Portfolio</a>
        </ContactItem>
        <ContactItem>
          <ContactSpan>Phone</ContactSpan>
          <a href="#" className="tracking-wide">
            010-0000-0000
          </a>
        </ContactItem>
      </ContactList>
    </div>
  );
};
const ContactSpan = styled.span`
  font-weight: 600;
  width: 75px;
  display: inline-block;
  margin-right: 0.7rem;
  &::after {
    content: " ";
    width: 5px;
    height: 5px;
    background-color: rgb(59, 130, 246);
    border: none;
    border-radius: 100%;
    margin-left: 3px;
    display: inline-block;
  }
`;
const ContactList = styled.ul`
  margin-top: 0.5rem;
`;
const ContactItem = styled.li`
  transition: all 0.3s;
  padding: 6px 0px;

  button {
    margin-right: 5px;
  }
  a,
  button {
    color: rgb(107, 114, 128);

    padding-bottom: 1px;
    border-bottom: 1px solid rgba(107, 114, 128, 0.7);
    &:hover {
      border-bottom: 1px solid rgb(59, 130, 246);
      cursor: pointer;
      color: rgb(59, 130, 246);
    }
  }
`;
