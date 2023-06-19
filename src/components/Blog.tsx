import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  margin-bottom: 50px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
    width: 240px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
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

function Blog() {
  return (
    <Main>
      <div className="title">Github, Blog</div>
      <ul>
        <li>
          Github과 Blog를 통해 제 자신의 학습과 성장을 보다 명확하게 확인하고
          다른 사람들과 지식을 공유하고자 합니다.
        </li>
        <li>기술학습 후 기록과 프로젝트 기록을 Github 잔디로 심고 있습니다.</li>
        <li>
          새롭게 배운 지식, 트러블 슈팅 기록과 회고를 블로그에 작성하고
          있습니다.
        </li>
      </ul>
    </Main>
  );
}

export default Blog;
