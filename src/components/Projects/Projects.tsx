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
    projectIMG: null,
    title: "MyPortfolio",
    summary:
      "해당 프로젝트는 사용한 기술을 복습하고, 저만의 포트폴리오를 만들기 위해 웹 형태로 제작하였습니다",
    category: "solo",
    personnel: [1],
    role: "프론트엔드 담당 (기여도 100%)",
    github: "https://github.com/sunghyun-biblee/MyPortfolio",
    deploy: "https://github.com/",
    skills: ["React", "typescript", "tailwindCSS", "styled-component"],
    functions: [
      "tailwindCSS와 styled-component를 사용하여, 초기화면의 FlipCard를 제작 ",
      "useRef,useCallback,useEffect를 사용하여 스크롤 애니메이션을 custom Hook으로 구현",
      "lightHouse를 사용하여 초기화면 로딩속도 FCP(0.9s), LCP(1.8s)를 차세대 이미지형식(webp)으로 변경하여 FCP(0.7s),LCP(1.3s)로 절감",
    ],
    date: "2024.06.04 ~ 2024.07",
    troubleShooting: null,
    review:
      "* styled-components는 컴포넌트와 스타일을 함께 정의하고, props를 전달하여 조건부 스타일링이 가능한점을 활용하여, 초기화면 FlipCard를 구현해보았습니다",
    // [{ troubleTitle: "", trouble: "", solution: "" }]
  },
  {
    projectIMG: null,
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
      "유저관련 기능 - 발급받은 JWT 토큰을 쿠키로 관리, 유저정보는 ContextAPI를 통해 전역적 관리",
      "결제 기능 - PortOne(모든 결제를 지원하는 API)을 사용하여 테스트 결제 적용",
      "학습을 위한 영상 시청 페이지 - localStorage를 사용하여 이어듣기 기능을 제작",
    ],
    date: "2024.05.01 ~ 2024.06.07",
    troubleShooting: [
      {
        troubleTitle: "스프링 시큐리티를 적용 및 배포 후 CORS 에러 발생 ",
        trouble:
          "로컬에서는 CORS 오류 없었으나, 스프링 시큐리티 적용 및 배포 후 로컬에서도 CORS 오류 발생",
        solution:
          "회의결과 원인 찾는 데 시간이 많이 걸릴 것으로 예상하여, http-proxy-middleware로 CORS 오류 해결",
      },
      {
        troubleTitle: "커뮤니티의 댓글목록 사용자 경험 향상 ",
        trouble:
          "댓글 작성시 화면이 바로 갱신되지 않고, API 호출로 데이터를 가져오면서 화면이 깜빡이는 문제 발생",
        solution:
          "React-Query의 Mutation을 사용해 댓글 목록을 실시간으로 업데이트하여 사용자 경험을 개선합니다",
      },
    ],
    review: "",
  },
  {
    projectIMG: null,
    title: "Trip_Fixie",
    summary:
      "여행일정에 맞춰 관광지 정보, 축제정보, 숙소 정보를 제공하여 일정을 계획하기 쉽도록 도움을 제공하는 서비스",
    category: "team",
    personnel: [1, 1],
    role: "프론트엔드 담당 (기여도: 55%)",
    github: "https://github.com/sunghyun-biblee/Trip_Fixie_Project",
    deploy: null,
    skills: ["React", "javascript", "styled-component", "framer-motion"],
    functions: [
      "장소의 상세정보와 위치정보를 TourAPI(4.0), NAVER Maps API 을 통해 제공 ",
      "여행 일정 기간동안 OpenWeatherAPI를 통해 날씨정보 제공",
    ],
    date: "2023.12.05~2024.02.02",
    troubleShooting: [
      {
        troubleTitle:
          "여행지의 데이터를 제공하는 과정에서 일일 API 호출 트래픽 초과",
        trouble:
          "여행지 정보를 무한 스크롤로 보여줄 때, 뷰포트의 하단 감지 시 API 호출로 데이터를 가져오는데, 이로 인해 짧은 시간 내에 API 호출 트래픽 초과 문제가 발생",
        solution:
          "첫 데이터 호출 시 모든 정보를 한 번에 가져와 이중 배열로 저장한 후, 스크롤 이벤트가 발생할 때 인덱스를 참조하여 필요한 데이터를 출력합니다. 이 방법을 통해 API 호출 횟수를 최소화",
      },
    ],
    review: "",
  },
];

// 회원가입 및 로그인시 발급받는 JWT 토큰을 쿠키로 관리, 정보는 ContextAPI로 전역적 관리

// "사용자들의 질답 또는 스터디모집을 위해 소통을 할 수있는 커뮤니티 페이지 - React-query의 Mutation 사용하여 댓글목록 및 게시글 목록에 낙관적 업데이트 적용",
