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
        적용할때 바로 효과가 났던 경험에서,
        <br />
        개발을 배우고 코드로 작성한 내용이 화면에 바로 렌더링되는 것에 매력을
        느껴 프론트엔드 개발자로 전향하게 되었습니다. <br />
        <br />
        부트캠프에서 팀 프로젝트를 통해 효율적인 협업을 경험하고 개발 역량을
        향상시켰습니다. <br />
        팀장역할을 맡아 회의 주도, 문서 및 일정 관리 등의 역할을 수행했고,
        팀원들의 의견을 모아주는 역할도 맡았습니다. 프로젝트에서는 기여도를
        고려하여 주요 기능은 팀원들이 원하는 대로 분담하고, 부가적인 기능은 먼저
        완료된 팀원이 맡도록 조정했습니다. 코드 리뷰를 통해 개선점으로 컴포넌트
        분리를 더욱 신경쓰게 되었습니다.
        <br />
        <br />
        가독성이 좋은 코드를 중요시하며, <br />
        프로젝트를 할때 최대한 꼼꼼하고 빠르게 맡은 일을 완료하는 것에 편안함을
        느끼는 편입니다. 미루는 것을 싫어하며, 스스로 정한 일정을 마치는 것은 제
        가치관 중 하나입니다. 이로 인해 팀원들로부터 개발 속도가 빠르다는 평가를
        받은 적이 있습니다. <br />
        회의 시 개발일정공유를 할 때 팀원들이 자극을 받아 개발 속도가 빨라져
        일정이 여유로웠던 경험이 있습니다. 다만, 늦은 시간까지 일하는 습관을
        개선하기 위해 새벽 2시까지 일을 마치려고 노력하고 있습니다.
        <br />
        <br />
        현재 SEO를 위한 SSR을 가능하게 하는 Next.js를 학습하여 개인 프로젝트를
        만들고 있습니다.
      </div>
    </Main>
  );
}

export default Introduction;
