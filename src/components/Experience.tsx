import "../App.css";

import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.png";

const Main = styled.div`
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: 100px;
  .title {
    color: #0db4f3;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
  }
  img {
    width: 150px;
    margin: 10px 0;
  }
  .subTitle {
    font-weight: bold;
    line-height: 250%;
    margin: 10px 0;
    font-size: 17px;
    @media (max-width: 740px) {
      font-size: 15px;
    }
  }
  .text,
  ul {
    line-height: 250%;
    margin: 10px 0;
    color: black;
    @media (max-width: 740px) {
      font-size: 13px;
    }
  }
  .text {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 10px;
  }
  .blue {
    &:hover {
      color: #0db4f3;
    }
  }
  li {
    margin: 7px 0;
    margin-left: 20px;
  }
  .gray {
    color: rgba(0, 0, 0, 0.5);
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
      <Link to="https://whatsyourmbti">
        <img className="logo" src={logo} alt="" />
      </Link>
      <Link to="https://whatsyourmbti" style={{ textDecoration: "none" }}>
        <div className="text blue">
          ✈️MBTI기반 여행지 추천&커뮤니티 어플리케이션
        </div>
      </Link>
      <div className="subTitle">팀 프로젝트</div>
      <div className="text">프론트엔드 개발자 3명, 백엔드 개발자 3명</div>
      <div className="subTitle">프로젝트 기간</div>
      <div className="text">2023.04.28 ~ 2023.05.25</div>
      <div className="subTitle">사용한 기술 스택</div>
      <div className="text">
        AWS(EC2, S3, RDS), React, javascript, typescript, Redux-toolkit, tour
        api, kakaomap api, styled-component
      </div>
      <div className="subTitle">구현 기능</div>
      <ul>
        <li>프로젝트 아이디어 제안 및 구성(공통)</li>
        <li>UX/UI 디자인 제작(공통)</li>
        <li>
          Figma로 프로젝트 전반적인 디자인 및 레이아웃을 구성한 화면정의서
          구현(공통)
        </li>
        <li>반응형 레이아웃 구현</li>
        <li>redux-tookit으로 로그인유무와 유저정보를 전역상태로 구현</li>
        <li>회원가입, 로그인, oauth, 마이페이지 구현</li>
        <li>관리자페이지 구현</li>
        <li>랜딩페이지 구현</li>
        <li>github 칸반, 마일스톤, 이슈 관리(공통)</li>
        <li>AWS s3, cloudFront를 활용하여 https로 배포</li>
      </ul>
    </Main>
  );
}

export default Experience;
