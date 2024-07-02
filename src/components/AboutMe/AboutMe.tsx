import { Article, Title } from "App";
import React, { useRef } from "react";
import styled from "styled-components";

export const AboutMe = () => {
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
      <Title className=" after:content-['.'] after:text-blue-400 after:px-1">
        Contact
      </Title>
      <Contact className="flex flex-col justify-end gap-[20px] w-[50%]">
        <ContactItem>
          <span className="font-semibold  w-[70px] inline-block mr-[0.5rem]">
            Email.
          </span>
          <button onClick={() => handleCopy("sunghyun543@gmail.com")}>
            sunghyun543@gmail.com
          </button>
          <span className="text-sm text-gray-400"> (메일클릭시 복사)</span>
        </ContactItem>
        <ContactItem>
          <span className="font-semibold w-[70px] inline-block mr-[0.5rem]">
            Github.
          </span>
          <a href="https://github.com/sunghyun-biblee">
            https://github.com/sunghyun-biblee
          </a>
        </ContactItem>
        <ContactItem>
          <span className="font-semibold w-[70px] inline-block mr-[0.5rem]">
            Portfolio.
          </span>
          <a href="#">Portfolio</a>
        </ContactItem>
        <ContactItem>
          <span className="font-semibold w-[70px] inline-block mr-[0.5rem]">
            Phone.
          </span>
          <a href="#" className="tracking-wide">
            010-0000-0000
          </a>
        </ContactItem>
      </Contact>
    </Article>
  );
};
const Contact = styled.ul`
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
