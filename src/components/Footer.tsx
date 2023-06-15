import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  div {
    color: #0db4f3;
    font-size: 11px;
    font-style: italic;
    @media (max-width: 569px) {
      font-size: 10px;
    }
  }
`;

function Footer() {
  return (
    <Main>
      <div>
        본 페이지는 상업적 목적이 아닌 비영리적 개인 포트폴리오용으로 만들어진
        사이트입니다. heejin Park ⓒ 2023
      </div>
    </Main>
  );
}

export default Footer;
