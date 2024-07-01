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
    <Article>
      <Title className=" after:content-['.'] after:text-blue-400 after:px-1 pb-2 border-b-2 border-blue-400">
        Contact
      </Title>
      <ContactList className="flex flex-col justify-end gap-[20px] w-[60%]">
        <ContactItem>
          <ContactSpan>Email</ContactSpan>
          <button onClick={() => handleCopy("sunghyun543@gmail.com")}>
            sunghyun543@gmail.com
          </button>
          <span className="text-sm text-gray-400"> (메일클릭시 복사)</span>
        </ContactItem>
        <ContactItem>
          <ContactSpan>Github</ContactSpan>
          <a href="https://github.com/sunghyun-biblee">
            https://github.com/sunghyun-biblee
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
    </Article>
  );
};
const ContactSpan = styled.span`
  font-weight: 600;
  width: 80px;
  display: inline-block;
  margin-right: 0.7rem;
  &::after {
    content: ".";
    font-size: 1.9rem;
    height: 10px;
    color: rgb(59, 130, 246);
    display: inline-block;
    padding: 0px 1px;
  }
`;
const ContactList = styled.ul`
  display: flex;
  justify-content: end;
  gap: 20px;
`;
const ContactItem = styled.li`
  transition: all 0.3s;

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
