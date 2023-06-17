import "../App.css";

import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
  margin-bottom: 30px;
  .title {
    color: #0db4f3;
    font-weight: bold;
    font-size: 35px;
    margin-bottom: 30px;
  }
  .text {
    line-height: 200%;
    @media (max-width: 740px) {
      font-size: 13px;
    }
  }
`;

function Introduction() {
  return (
    <Main>
      <div className="title">Introduction</div>
      <div className="text">
        약 2년간 물리치료사로 근무하면서 새로운 치료 기술을 배우고 환자에게
        적용할때 바로 효과가 났던 경험에서, 개발을 배우고 코드로 작성한 내용이
        화면에 바로 렌더링되는 프론트엔드 개발에 매력을 느껴 전향하게
        되었습니다.
        <br />
        <br />
        부트캠프에서는 프로젝트에서 팀장 역할을 맡아 문서 작업, 일정 관리, 규칙
        준수 등을 담당하였습니다. 효율적인 협업 환경을 조성하기 위해 팀원들과
        적극적으로 소통하며 협업 경험을 쌓았습니다.
        <br />
        <br />
        저는 조직과 개인의 성장을 최우선으로 생각하며, 새로운 기술 습득에 대한
        두려움이 없습니다. 부트캠프 동안 자바스크립트와 타입스크립트 스터디에
        참여하였으며, 현재는 Next.js를 공부하며 개인 프로젝트를 진행하고
        있습니다. 회사에서도 적극적으로 사내 활동과 스터디에 참여하여 전문적인
        프론트엔드 개발자로 성장하고자 합니다.
      </div>
    </Main>
  );
}

export default Introduction;
