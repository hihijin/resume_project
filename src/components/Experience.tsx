import "../App.css";

import styled from "styled-components";

import feedback from "../assets/feedback.png";
import logo from "../assets/logo.png";

const Main = styled.div`
  width: 100%;
  padding: 30px 0;
  margin-bottom: 100px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
    width: 360px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  img {
    width: 150px;
    height: auto;
    margin: 5px 0;
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
    color: rgba(0, 0, 0, 0.9);
    font-size: 13px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  }
  .text {
    padding-bottom: 7px;
  }
  li {
    margin: 5px 0;
    margin-left: 20px;
    font-size: 13px;
  }
  .gray {
    color: rgba(0, 0, 0, 0.5);
    border: none;
  }
  .link {
    color: rgba(0, 0, 0, 0.5);
    border: none;
    margin-right: 10px;
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

function Experience() {
  return (
    <Main>
      <div className="title">Project Experience</div>
      <div className="text gray">
        코드스테이츠 부트캠프 진행 중 저의 성장에 영향을 주었던 프로젝트를
        소개해드리겠습니다.
      </div>
      <img className="logo" src={logo} alt="로고" />
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
        프로젝트 배포 링크
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
        MBTI기반 여행지 추천&커뮤니티 서비스 <br />
        최근 한국인의 해외여행 관광비율에 비해 적은 국내여행 관광 비율의 문제를
        인식하고,
        <br />
        국내 유명명소들을 소개하여 국내 관광시장의 활기를 되찾기 위해 MZ세대에서
        현재 대유행하고 있는 “MBTI”키워드를 접목하여 각 MBTI별 여행지 추천
        서비스와 함께 여행커뮤니티 서비스 기획
        <br />
        <br />
        팀원 - 프론트엔드 개발자 3명, 백엔드 개발자 3명 <br />
        프로젝트 기간 - 2023.04.28 ~ 2023.05.25 (약 1개월)
      </div>
      <div className="subTitle">⚒️기술 스택</div>
      <div className="text">
        AWS, React, javascript, typescript, axios, Redux-toolkit,
        styled-component
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
        <li>공통 axios요청 함수 모듈화로 코드 중복 개선</li>
        <li>usememo hook 사용으로 성능 최적화 구현</li>
        <li>
          redux-tookit으로 로그인유무와 유저정보를 전역상태로 구현하여 props
          복잡도 개선
        </li>
        <li>React.lazy를 적용하여 코드 분할로 성능 향상</li>
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

export default Experience;
