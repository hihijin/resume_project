import '../App.css';

import styled from 'styled-components';

import feedback from '../assets/feedback.png';
import logo from '../assets/logo.png';
import mbti1 from '../assets/mbti1.png';
import mbti2 from '../assets/mbti2.png';
import mbti3 from '../assets/mbti3.png';
import mbti4 from '../assets/mbti4.png';

const Main = styled.div`
  width: 100%;
  margin-bottom: 100px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
    width: 170px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
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
    margin-top: 20px;
  }
  .blue {
    background: #dff6ff;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 20px 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 1012px) {
    flex-flow: wrap;
  }
  img {
    width: 250px;
    height: 200px;
    margin-right: 10px;
    @media (max-width: 547px) {
      width: 180px;
      height: 130px;
      margin-right: 5px;
    }
    @media (max-width: 389px) {
      width: 130px;
      height: 80px;
    }
  }
`;

function Experience() {
  return (
    <Main>
      <div className="title">Project</div>
      <div className="subTitle">🪧프로젝트 설명</div>
      <img className="logo" src={logo} alt="로고" />
      <div className="text">
        <span className="blue">
          [너의 MBTI는] : MBTI기반 여행지 추천&커뮤니티 서비스
        </span>{" "}
        <br />
        최근 한국인의 해외여행 관광비율에 비해 적은 국내여행 관광 비율의 문제를
        인식하고,
        <br />
        국내 유명명소들을 소개하여 국내 관광시장의 활기를 되찾기 위해 MZ세대에서
        현재 대유행하고 있는 <span className="blue">MBTI</span>키워드를 접목하여
        각 MBTI별 여행지 추천 서비스와 함께 여행커뮤니티 서비스 기획
        <br />
        <br />
        팀원 -{" "}
        <span className="blue">
          프론트엔드 개발자 3명, 백엔드 개발자 3명
        </span>{" "}
        <br />
        프로젝트 기간 -{" "}
        <span className="blue">2023.04.28 ~ 2023.05.25 (약 1개월)</span>
      </div>
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
      <ImgBox>
        <img src={mbti1} alt="구현화면" />
        <img src={mbti2} alt="구현화면" />
        <img src={mbti3} alt="구현화면" />
        <img src={mbti4} alt="구현화면" />
      </ImgBox>
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
      <div className="text">
        프로젝트에서 <span className="blue">팀장</span> 역할을 맡아 회의 주도,
        문서 및 일정 관리를 담당했고, 팀 내{" "}
        <span className="blue">의사소통을 적극적</span>으로 이끌어가며 소외되는
        팀원이 없도록 했습니다. <br />
        회의 및 토의 시에는 모든 팀원들의 의견을 듣고 공정한 의사결정을 내리기
        위해 노력했습니다. 열린 마음으로 피드백을 주고받으며 팀원들의 의견을
        수렴하며 <span className="blue">효율적인 협업환경</span>을 조성했습니다.
        <br />
        <br />
        <span className="blue">코드 리뷰</span>를 통해{" "}
        <span className="blue">컴포넌트 분리</span>를 중점으로 개선점을 찾고
        코드의 재사용성과 유지보수성을 고려하여{" "}
        <span className="blue">모듈화</span>된 컴포넌트를 설계하고 구현하는 데
        신경을 썼습니다. 이를 통해{" "}
        <span className="blue">코드의 가독성과 유연성</span>을 향상시키며,
        전체적인 프로젝트의 <span className="blue">효율성</span>을 높이는 데
        기여했습니다.
      </div>
      <div className="text noborder">
        *해당 프로젝트 종료 후 팀원분들이 작성해주신 피드백과 후기입니다.*
      </div>
      <img className="feedback" src={feedback} alt="feedback" />
    </Main>
  );
}

export default Experience;
