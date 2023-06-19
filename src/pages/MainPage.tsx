import "../App.css";

import styled from "styled-components";

import Blog from "../components/Blog";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Introduction from "../components/Introduction";
import Profile from "../components/Profile";
import Skill from "../components/Skill";
import Study from "../components/Study";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Content = styled.div`
  width: 850px;
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
        <Skill />
        <Experience />
        <Blog />
        <Study />
        <Education />
      </Content>
    </Main>
  );
}

export default MainPage;
