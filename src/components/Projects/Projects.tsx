import { Article, Title } from "App";
import React from "react";
import { ProejctItem } from "./ProejctItem";

export const Projects = () => {
  return (
    <Article>
      <Title className="pb-[0.5rem]">Projects</Title>
      {ProejectArray.map((item, index) => (
        <ProejctItem
          item={item}
          index={index}
          key={new Date().getDate() + index}
        ></ProejctItem>
      ))}
    </Article>
  );
};

const ProejectArray = [
  {
    title: "MyPortfolio",
    summary:
      "해당 프로젝트는 사용한 기술을 복습하고, 저만의 포트폴리오를 만들기 위해 웹 형태로 제작하였습니다",
    category: "solo",
    personnel: [1],
    role: "프론트엔드 담당 (기여도 100%)",
    github: "https://github.com/sunghyun-biblee/MyPortfolio",
    deploy: "https://github.com/sunghyun-biblee/MyPortfolio",
    skills: ["React", "typescript", "tailwindCSS", "styled-component"],
    functions: [
      "tailwindCSS와 styled-component를 사용하여, 초기화면의 FlipCard를 제작 ",
      "useRef와 useCallback,useEffect를 사용하여 스크롤 애니메이션을 적용하고 재사용을 하기위해 custom Hook으로 구현",
      "lightHouse를 사용하여 초기화면 로딩속도 FCP(0.9s), LCP(1.8s)를 차세대 이미지형식(webp)으로 변경하여 FCP(0.7s),LCP(1.3s)로 절감",
    ],
    date: "2024.06.04 ~ 2024.07",
  },
  {
    title: "ClassHub",
    summary:
      "온라인 학습시스템과 커뮤니티가 포함되어, 언제 어디서나 학습에 접근할 수 있는 플랫폼을 제공하기위한 서비스",
    category: "team",
    personnel: [1, 3],
    role: "프론트엔드 담당 (기여도: 30%)",
    github: "https://github.com/sunghyun-biblee/ClassHub",
    deploy: "https://devproject.store/",
    skills: [
      "React",
      "React-query",
      "typescript",
      "tailwindCSS",
      "styled-component",
    ],
    functions: [
      "유저관련 페이지 구현 - 소셜로그인(Google)으로 회원가입 및 로그인시 발급받는 JWT 토큰을 쿠키로 관리, 유저정보는 ContextAPI를 사용하여 전역적 관리",
      "사용자들의 질답 또는 스터디모집을 위해 소통을 할 수있는 커뮤니티 페이지 - React-query의 Mutation 사용하여 댓글목록 및 게시글 목록에 낙관적 업데이트 적용",
      "결제 기능 구현 - PortOne(모든 결제를 지원하는 API)을 사용하여 테스트 결제 적용",

      "학습을 위한 영상 시청 페이지 - localStorage를 사용하여, 영상을 멈추거나 종료할 시 영상의 정보를 저장하여 이어듣기 기능을 제작",
    ],
    date: "2024.05.01 ~ 2024.06.07",
  },
  {
    title: "Trip_Fixie",
    summary:
      "여행일정에 맞춰 관광지 정보, 축제정보, 숙소 정보를 제공하여 일정을 계획하고 비교하기 쉽도록 도움을 제공하는 서비스",
    category: "team",
    personnel: [1, 1],
    role: "프론트엔드 담당 (기여도: 55%)",
    github: "https://github.com/sunghyun-biblee/Trip_Fixie_Project",
    deploy: null,
    skills: ["React", "javascript", "styled-component", "framer-motion"],
    functions: [
      "여행 일정에 맞춰 관광지, 정보, 숙소 정보를 제공",
      "장소의 상세정보와 위치정보를 TourAPI(4.0), NAVER Maps API 을 통해 제공 ",
      "여행 일정 기간동안 OpenWeatherAPI를 통해 날씨정보 제공",
      "세워둔 여행계획을 마이리스트에 저장 후 비교 가능하도록 구현",
    ],
    date: "2023.12.05~2024.02.02",
  },
];
