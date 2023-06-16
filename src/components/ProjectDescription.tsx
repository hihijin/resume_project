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
      <div className="subTitle">🪧프로젝트 설명</div>
      <div className="text">
        약 2년간 물리치료사로 근무하면서 새로운 치료 기술을 배우고 적용하는
        경험에서,
        <br />
        개발을 배우고 코드로 작성한 내용이 화면에 바로 렌더링되는 것에 매력을
        느껴 프론트엔드 개발자로 전향하게 되었습니다. <br />
        <br />
        부트캠프에서 팀 프로젝트를 통해 효율적인 협업을 경험하고 개발 역량을
        향상시켰습니다. <br />
        팀장역할을 맡아 회의 주도, 문서 및 일정 관리 등의 역할을 수행했고,
        팀원들의 의견을 모아주는 역할도 맡았습니다. 프로젝트에서는 기여도를
        고려하여 주요 기능은 팀원들이 원하는 대로 분담하고, 부가적인 기능은 먼저
        완료된 팀원이 맡도록 조정했습니다. 코드 리뷰를 통해 개선점으로 컴포넌트
        분리를 더욱 신경쓰게 되었습니다.
        <br />
        <br />
        가독성이 좋은 코드를 중요시하며, 빨리 일을 마치는 성격으로 팀원들로부터
        개발 속도가 빠르다는 평가를 받은 적이 있습니다. 다만, 늦은 시간까지
        일하는 습관을 개선하기 위해 개발 시간을 새벽 2시까지로 제한하고
        있습니다.
        <br />
        <br />
        현재 SEO를 위한 SSR을 가능하게 하는 Next.js를 학습하여 개인 프로젝트를
        만들고 있습니다.
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
