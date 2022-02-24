import styled from "styled-components";

const MainWrapper = styled.div`
  height: 100vh;
  position: relative;
  top: 45px;
  display: flex;
  justify-content: space-around;
`;

const Overview = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  line-height: 90px;

  h1 {
    font-size: 70px;
  }

  hr {
    width: 100%;
  }

  h3 {
    font-size: 50px;
  }
`;

function Main() {
  return (
    <MainWrapper>
      <Overview>
        <h1>
          안녕하세요,
          <br />
          프론트엔드 개발자
          <br /> 윤상민입니다.
        </h1>
        <hr />
        <h3>방문해 주셔서 감사합니다.</h3>
      </Overview>
    </MainWrapper>
  );
}

export default Main;
