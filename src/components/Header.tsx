import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  z-index: 1;
  background: #fafafa;
  width: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-shadow: 5px 0px 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 310px) {
    padding: 15px 10px;
  }
  div {
    font-weight: bold;
  }
`;

function Header() {
  return (
    <Main>
      <div>👩‍💻 Dev Heejin</div>
      <div>햄버거</div>
    </Main>
  );
}

export default Header;
