import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  margin-bottom: 50px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    width: 120px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  .subTitle {
    font-weight: bold;
    margin: 20px 0;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 150%;
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
`;

function Study() {
  return (
    <Main>
      <div className="title">Study</div>
      <div className="subTitle">
        코드스테이츠 웹 프론트엔드 과정 (2022.12~2023.06)
      </div>
      <ul>
        <li>
          사용자 친화적 웹 서비스 개발 능력을 갖춘 프론트엔드 개발자 양성 과정
        </li>
        <li>Javascript 기반으로 풀스택 과정과 React 학습</li>
        <li>20주 동안 매일 알고리즘 문제 풀이</li>
        <li>
          20주 동안 매일 강도 높은 과제 수행 및 페어 프로그래밍과 코드 리뷰 경험
        </li>
        <li>협업 프로젝트 2회 진행</li>
      </ul>
    </Main>
  );
}

export default Study;
