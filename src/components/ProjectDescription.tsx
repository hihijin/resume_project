import "../App.css";

import styled from "styled-components";

import feedback from "../assets/feedback.png";
import logo from "../assets/logo.png";

const Main = styled.div`
  width: 100%;
  margin: 50px 0;
  img {
    width: 200px;
    height: auto;
    margin: 10px 0;
    &:hover {
      cursor: pointer;
    }
  }
  .subTitle {
    font-weight: bold;
    line-height: 200%;
    margin: 10px 0;
    font-size: 17px;
    @media (max-width: 740px) {
      font-size: 15px;
    }
  }
  .text,
  ul {
    line-height: 200%;
    color: black;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 7px;
    @media (max-width: 740px) {
      font-size: 13px;
    }
  }
  li {
    margin: 5px 0;
    margin-left: 20px;
  }
  .link {
    color: rgba(0, 0, 0, 0.5);
    border: none;
    margin-right: 10px;
    font-size: 15px;
    &:hover {
      color: #0db4f3;
    }
  }
  .feedback {
    width: 600px;
    height: auto;
    margin-bottom: 100px;
    @media (max-width: 645px) {
      width: 500px;
    }
    @media (max-width: 535px) {
      width: 400px;
    }
    @media (max-width: 350px) {
      width: 300px;
    }
  }
  .noborder {
    border: none;
  }
`;

function ProjectDescription() {
  return (
    <Main>
      <img className="logo" src={logo} alt="logo" />
      <div className="subTitle">🔗프로젝트 관련 링크</div>
      <button
        className="text link"
        onClick={() =>
          window.open(
            "https://whatsyourmbti.click",
            "_blank",
            "noreferrer noopener"
          )
        }
      >
        https://whatsyourmbti.click
      </button>
      <button
        onClick={() =>
          window.open(
            "https://github.com/codestates-seb/seb43_main_023/tree/main",
            "_blank",
            "noreferrer noopener"
          )
        }
        className="text link"
      >
        프로젝트 Github 링크
      </button>
      <button
        onClick={() =>
          window.open(
            "https://youtu.be/VOqiHb-n1bI",
            "_blank",
            "noreferrer noopener"
          )
        }
        className="text link"
      >
        프로젝트 발표 링크
      </button>
      <button
        onClick={() =>
          window.open(
            "https://velog.io/@hihijin/%EB%A9%94%EC%9D%B8%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0",
            "_blank",
            "noreferrer noopener"
          )
        }
        className="text link"
      >
        프로젝트 회고 링크
      </button>
      <div className="subTitle">🪧프로젝트 설명</div>
      <div className="text">
        MBTI기반 여행지 추천&커뮤니티 서비스 입니다. <br />
        최근 한국인의 해외여행 관광 비율이 코로나 이후 부쩍 성장했지만,국내
        관광지는 제주, 부산, 강원을 제외하면 관광객들의 발이 끊긴 곳이
        허다합니다.
        <br />
        특히 소비의 주 세대인 MZ세대들이 국내 여행보다 해외여행을 주로 다니지만,
        실상은 국내에 멋진 유명명소들의 정보도 모르는 경우가 많습니다.
        <br />
        <br />
        너의 MBTI는 팀은 국내 관광시장이 다시 활기를 띄었으면 좋겠다는 취지로,
        <br />
        MZ세대에서 현재 대유행하고 있는 “MBTI”키워드를 접목하여 각 MBTI별 여행지
        추천 서비스와 함께 여행커뮤니티 서비스를 기획하게 되었습니다.
      </div>
      <div className="subTitle">⚒️기술 스택</div>
      <div className="text">
        AWS(EC2, S3, RDS), React, javascript, typescript, axios, Redux-toolkit,
        tour api, kakaomap api, styled-component
      </div>
      <div className="subTitle">🗣️협업 툴</div>
      <div className="text">Github, Git, Figma, Notion, Discord</div>
      <div className="subTitle">💻담당 구현 기능</div>
      <ul>
        <li>프로젝트 아이디어 제안 및 구성(공통)</li>
        <li>UX/UI 디자인 제작(공통)</li>
        <li>
          Figma로 프로젝트 전반적인 디자인 및 레이아웃을 구성한 화면정의서
          구현(공통)
        </li>
        <li>회원가입, 로그인, oauth, 마이페이지 구현</li>
        <li>관리자페이지 구현</li>
        <li>랜딩페이지, 로딩페이지, 에러페이지, 헤더, 푸터 구현</li>
        <li>반응형 레이아웃 구현</li>
        <li>공통 API함수, util함수, hook 생성</li>
        <li>redux-tookit으로 로그인유무와 유저정보를 전역상태로 구현</li>
        <li>Lazy.loading 구현</li>
        <li>github 칸반, 마일스톤, 이슈 관리(공통)</li>
        <li>AWS s3, cloudFront, Route53를 활용하여 https로 배포</li>
      </ul>
      <div className="subTitle">🔥성장 경험</div>
      <div className="text noborder">
        해당 프로젝트 종료 후 팀원분들이 작성해주신 피드백과 후기입니다.
      </div>
      <img className="feedback" src={feedback} alt="feedback" />
    </Main>
  );
}

export default ProjectDescription;
