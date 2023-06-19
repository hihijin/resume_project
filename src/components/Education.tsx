import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  margin-bottom: 100px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
    width: 200px;
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

function Education() {
  return (
    <Main>
      <div className="title">Education</div>
      <ul>
        <li>부산가톨릭대학교 물리치료학과 졸업 (2021.02)</li>
      </ul>
    </Main>
  );
}

export default Education;
