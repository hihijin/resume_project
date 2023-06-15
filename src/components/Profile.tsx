import '../App.css';

import { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import picture from '../assets/picture.png';
import Mail from './Mail';

const Main = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 30px 0;
  margin: 30px 0;
`;

const Section1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
  @media (max-width: 430px) {
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .name {
    font-size: 37px;
    font-weight: bold;
    border-left: 10px solid #0db4f3;
    padding-left: 10px;
    @media (max-width: 550px) {
      font-size: 30px;
      border-left: 7px solid #0db4f3;
    }
    @media (max-width: 310px) {
      font-size: 25px;
      border-left: 5px solid #0db4f3;
    }
  }
  .time {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    @media (max-width: 550px) {
      font-size: 10px;
    }
    @media (max-width: 430px) {
      width: 100%;
      text-align: right;
      margin-top: 10px;
    }
  }
`;

const Section2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 565px) {
    flex-direction: column;
  }
  .picture {
    border-radius: 50%;
    width: 230px;
    height: auto;
    margin-right: 100px;
    @media (max-width: 740px) {
      width: 200px;
      height: auto;
      margin-right: 60px;
    }
    @media (max-width: 651px) {
      width: 180px;
      height: auto;
      margin-right: 30px;
    }
  }
`;

const Section3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  .subject {
    font-weight: bold;
    color: #0db4f3;
    font-size: 20px;
    margin: 10px 0;
  }
`;

const Section4 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  span {
    font-weight: bold;
    font-size: 14px;
    width: 100px;
    margin-bottom: 10px;
    @media (max-width: 651px) {
      width: 70px;
    }
  }
  .Language {
    @media (max-width: 346px) {
      height: 38px;
    }
  }
`;
const Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  span,
  button {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    margin-bottom: 10px;
  }
  button {
    &:hover {
      color: #0db4f3;
    }
  }
`;

function Profile() {
  const [mailShow, setMailShow] = useState(false);
  const mailShowHander = () => {
    setMailShow(true);
  };
  return (
    <Main>
      <Section1>
        <span>
          <span className="name">박희진(Heejin Park)</span>
        </span>
        <span className="time">Last updated 2023.06.13</span>
      </Section1>
      <Section2>
        <div>
          <img className="picture" src={picture} alt="profile" />
        </div>
        <Section3>
          <div className="subject">Contact</div>
          <Section4>
            <Info>
              <span>Phone</span>
              <span>Email</span>
              <span>Github</span>
            </Info>
            <Answer>
              <Link to="tel:010-2470-7057" style={{ textDecoration: "none" }}>
                <button>010-2470-7057</button>
              </Link>
              <button onClick={mailShowHander}>bda624444@gmail.com</button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/hihijin",
                    "_blank",
                    "noreferrer noopener"
                  )
                }
              >
                https://github.com/hihijin
              </button>
            </Answer>
          </Section4>
          <div className="subject">Skill</div>

          <Section4>
            <Info>
              <span>Deploy</span>
              <span className="Language">Language</span>
              <span>Library</span>
              <span>Tool</span>
            </Info>
            <Answer>
              <span>AWS(S3, Route53, cloundfront), Netlify</span>
              <span>Typescript, Javascript, Styled-Component</span>
              <span>React, Redux</span>
              <span>Git, Github, Figma, Slack</span>
            </Answer>
          </Section4>
        </Section3>
      </Section2>
      {mailShow && <Mail setMailShow={setMailShow} />}
    </Main>
  );
}

export default Profile;
