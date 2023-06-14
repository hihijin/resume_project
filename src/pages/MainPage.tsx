import "../App.css";

import styled from "styled-components";

import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Profile from "../components/Profile";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1180px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 95%;
  }
`;

function MainPage() {
  return (
    <Main>
      <Content>
        <Profile />
        <Introduction />
        <Experience />
      </Content>
    </Main>
  );
}

export default MainPage;
