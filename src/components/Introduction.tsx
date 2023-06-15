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
        프론트엔드 개발자 박희진입니다. <br />
        약 2년 간 재활 병원 물리치료사로 근무하였지만, 정년까지 오래 할 수 있는
        직업을 가지고 싶어서 지난 10개월간 개발을 공부하기 시작했습니다. <br />
        <br />
        물리치료사로 근무할때는 새로운 치료기술을 배우고 환자에게 적용해서
        효과가 나면 굉장히 기분이 좋았는데 개발도 그와 비슷하다고 생각했습니다.
        <br />
        <br />
        개발을 전혀 모르던 제가 하나의 기술을 배우고 적용했을때 브라우저에 제가
        쓴 코드가 실현되는 것에 무척 매력을 느꼈습니다. <br />
        평생 내가 배운 내 기술을 써먹고 계속 업그레이드할 수 있다는 점과도
        비슷합니다.
        <br />
        <br />
        무궁무진한 개발지식을 깊이, 다음 넓이로 기술을 하나씩 배워가며 평생 제
        하드웨어를 업그레이드시키고 싶습니다.
        <br />
        <br />
        지난 6개월간 부트캠프에서 공부하며 팀프로젝트 하나를 완성하였습니다.
        <br />
        팀장을 맡아 주로 회의를 주도하고 제출할 문서 관리, 일정 관리, 팀원들과의
        소통과 프로젝트 기여도 부분에서 신경을 많이 쓰며 효율적인 협업을
        경험하며 개발 역량을 쌓았습니다.
        <br />
        <br />
        저는 조직과 사람의 성장을 최우선적으로 생각하며 새로운 기술의 습득을
        두려워하지 않습니다.
        <br />
        부트캠프동안 자바스크립트, 타입스크립트 스터디를 참여했으며, 미니
        프로젝트를 만들면서 꾸준히 공부하고 있습니다.
        <br />
        현재는 성능과 SEO를 위한 next.js와 SSR을 공부하고 있습니다.
      </div>
    </Main>
  );
}

export default Introduction;
