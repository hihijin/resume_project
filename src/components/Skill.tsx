import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  padding: 30px 0;
  margin-bottom: 100px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
    width: 100px;
    padding-bottom: 10px;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  }
  .subTitle {
    font-weight: bold;
    margin: 10px 0;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 30px;
  }

  li::before {
    content: "• ";
    color: #0db4f3;
    font-size: 20px;
  }
  li {
    padding-left: 1em;
    text-indent: -0.7em;
    color: rgba(0, 0, 0, 0.8);
    font-size: 13px;
    line-height: 180%;
  }
  .blue {
    background: #dff6ff;
  }
`;

function Skill() {
  return (
    <Main>
      <div className="title">Skill</div>
      <div className="subTitle">React</div>
      <ul>
        <li>
          상태관리를 위해 <span className="blue">Redux</span>를 사용할 수
          있습니다.
        </li>
        <li>
          <span className="blue">React</span>를 사용한 SPA 프로젝트 경험이
          있습니다.
        </li>
        <li>
          usecallback, usememo로 <span className="blue">최적화</span>를 시킬 수
          있고, react-router-dom 등{" "}
          <span className="blue">개발 과정에 필요한 다양한 라이브러리</span>를
          사용할 수 있습니다.
        </li>
      </ul>
      <div className="subTitle">JavaScript & TypeScript</div>
      <ul>
        <li>
          <span className="blue">ES6+ 문법</span>에 익숙하며 axios를 사용한{" "}
          <span className="blue">비동기 처리</span>와 API 통신을 통한{" "}
          <span className="blue">CRUD 구현</span>이 가능합니다.
        </li>
        <li>
          JS, TS를 이용한 <span className="blue">연산과 DOM 객체의 조작</span>이
          가능합니다.
        </li>
        <li>
          <span className="blue">선언형 프로그래밍</span>을 지향합니다.
        </li>
      </ul>
      <div className="subTitle">HTML/CSS</div>
      <ul>
        <li>
          <span className="blue">웹 표준과 웹 접근성</span>을 준수하려
          노력합니다.
        </li>
        <li>
          적재적소에 어울리는 HTML 태그를 활용한{" "}
          <span className="blue">시맨틱한 코드</span>를 지향합니다.
        </li>
        <li>
          <span className="blue">반응형 웹</span>을 구현한 경험이 있습니다.
        </li>
        <li>
          <span className="blue">styled-components</span>로 css-in-js를 구현할
          수 있습니다.
        </li>
      </ul>
      <div className="subTitle">VersionControl & Communication</div>
      <ul>
        <li>
          Git, Github을 통한 <span className="blue">형상관리</span>가
          가능합니다.
        </li>
        <li>
          <span className="blue">Git flow전략</span>을 적용하며 칸반보드,
          마일스톤, 이슈 관리 경험이 있습니다.
        </li>
        <li>
          <span className="blue">Notion, Discord</span>을 사용한{" "}
          <span className="blue">팀원 간의 업무 공유 및 보고 경험</span>이
          있습니다.
        </li>
      </ul>
    </Main>
  );
}

export default Skill;
