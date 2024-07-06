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
    deploy: "https://github.com/",
    skills: ["React", "typescript", "tailwindCSS", "styled-component"],
    functions: [
      "tailwindCSS와 styled-component를 사용하여, 초기화면의 FlipCard를 제작 ",
      "useRef와 useCallback,useEffect를 사용하여 스크롤 애니메이션을 적용하고 재사용을 하기위해 custom Hook으로 구현",
      "lightHouse를 사용하여 초기화면 로딩속도 FCP(0.9s), LCP(1.8s)를 차세대 이미지형식(webp)으로 변경하여 FCP(0.7s),LCP(1.3s)로 절감",
    ],
    date: "2024.06.04 ~ 2024.07",
    troubleShooting: null,
    // [{ troubleTitle: "", trouble: "", solution: "" }]
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
      "유저관련 기능 - 발급받은 JWT 토큰을 쿠키로 관리, 정보는 ContextAPI로 전역적 관리",
      "결제 기능 - PortOne(모든 결제를 지원하는 API)을 사용하여 테스트 결제 적용",
      "학습을 위한 영상 시청 페이지 - localStorage를 사용하여 이어듣기 기능을 제작",
    ],
    date: "2024.05.01 ~ 2024.06.07",
    troubleShooting: [
      {
        troubleTitle: "스프링 시큐리티를 적용 및 배포 후 CORS 에러 발생 ",
        trouble:
          "로컬에서 작업할 때는 CORS에러가 발생하지 않았으나, 스프링 시큐리티를 적용하고, 배포 작업을 마치니 로컬 환경에서도 CORS에러가 발생",
        solution:
          " 백엔드팀에서 원인을 찾는데 상당한 시간을 소요할 것이라 예상되어 http-proxy-middleware 라이브러리를 사용하여 proxy를 통해 CORS에러를 해결",
      },
      {
        troubleTitle: "커뮤니티의 댓글목록 사용자 경험 향상 ",
        trouble:
          "커뮤니티 게시글에 댓글을 작성시 화면에 즉시 렌더링되지않고, 댓글데이터를 가져오는 API호출시 화면이 리렌더링되며 화면이 깜빡거림",
        solution:
          "React-Query의 Mutation을 사용하여 댓글 목록이 실시간으로 업데이트되도록 낙관적 업데이트를 적용하여 사용자 경험을 향상",
      },
    ],
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
      "장소의 상세정보와 위치정보를 TourAPI(4.0), NAVER Maps API 을 통해 제공 ",
      "여행 일정 기간동안 OpenWeatherAPI를 통해 날씨정보 제공",
      "세워둔 여행계획을 마이리스트에 저장 후 비교 가능하도록 구현",
    ],
    date: "2023.12.05~2024.02.02",
    troubleShooting: [
      {
        troubleTitle:
          "여행지의 데이터를 제공하는 과정에서 일일 API 호출 트래픽 초과",
        trouble:
          "여행지의 정보를 무한스크롤을 적용하여 리스트로 보여주게되는데 뷰포트 바닥을 감지하였을때 API를 호출하여 데이터 출력을 하다보니 일일 API 호출 트래픽이 짧은시간에 초과하는 상황",
        solution:
          "첫 데이터 호출때 모든 데이터를 가져와 이중배열로 나누어 저장하고, 무한스크롤 이벤트가 발생하였을때 index를 참조하여 데이터가있다면 출력하도록 하여 API호출수를 최소화함",
      },
    ],
  },
];

// 회원가입 및 로그인시 발급받는 JWT 토큰을 쿠키로 관리, 정보는 ContextAPI로 전역적 관리

// "사용자들의 질답 또는 스터디모집을 위해 소통을 할 수있는 커뮤니티 페이지 - React-query의 Mutation 사용하여 댓글목록 및 게시글 목록에 낙관적 업데이트 적용",
