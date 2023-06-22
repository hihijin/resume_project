import '../App.css';

import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  margin-bottom: 100px;
  .title {
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
    width: 240px;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }
  .section {
    border-left: 5px solid #0db4f3;
  }
  .text {
    line-height: 180%;
    padding: 0 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.9);
    margin: 3px 0;
    &:first-child,
    &:last-child {
      margin: 0px;
    }
  }
  .bold {
    font-weight: bold;
  }
`;

function Introduction() {
  return (
    <Main>
      <div className="title">Introduction</div>
      <div className="section">
        <div className="text">
          <span className="bold">UX/UI 디자인과 웹 성능 최적화</span>에 관심이
          많으며, 사용자가 편리하게 웹 사이트를 이용할 수 있는 환경을 만들기
          위해 노력합니다.{" "}
        </div>
        <div className="text">
          프로젝트에 필요한 기술이 있다면{" "}
          <span className="bold">적극적으로 학습</span>하고,{" "}
          <span className="bold">새로운 챌린지에 끊임없이 도전하고 해결</span>
          합니다.{" "}
        </div>
        <div className="text">
          이전에 물리치료사로 일하며{" "}
          <span className="bold">팀워크와 환자 중심의 접근 방식</span>을
          중요시했던 경험을 바탕으로,
        </div>
        <div className="text">
          웹 개발에서도{" "}
          <span className="bold">사용자 중심의 인터페이스와 효율적인 기능</span>
          을 구현하여 사람들에게 더 나은 웹 경험과 정보를 제공하고자 합니다.
        </div>
        <div className="text">
          현재 <span className="bold">next.js와 SSR</span>에 대해 공부하며 기존
          프로젝트를 next.js로 리팩토링하고,
        </div>
        <div className="text">
          <span className="bold">효율적인 폴더 구조와 컴포넌트 분리</span>에
          대해 고민하고 있습니다.
        </div>
      </div>
    </Main>
  );
}

export default Introduction;
