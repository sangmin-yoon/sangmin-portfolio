import styled from "styled-components";
import Typewriter from "typewriter-effect";

const MainWrapper = styled.div`
  height: calc(100vh + 45px);
  position: relative;
  top: 45px;
  display: flex;
  justify-content: space-around;
`;

const Overview = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  line-height: 90px;
  line-height: 400%;

  h1 {
    font-size: 70px;
    display: inline;
  }

  hr {
    width: 100%;
    opacity: 0.4;
  }

  h3 {
    font-size: 50px;
    display: inline;
  }

  span {
    font-size: 40px;
    display: inline;
  }
`;

function Main() {
  return (
    <MainWrapper>
      <Overview>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<h1>안녕하세요, <br />프론트엔드 개발자<br />윤상민입니다.</h1><hr /><h3>방문해 주셔서 감사합니다. :)</h3>"
              )
              .start();
          }}
          options={{
            delay: 75,
          }}
        />
        {/* <h1>
          안녕하세요,
          <br />
          프론트엔드 개발자
          <br /> 윤상민입니다.
        </h1>
        <hr />
        <h3>방문해 주셔서 감사합니다. :)</h3> */}
      </Overview>
    </MainWrapper>
  );
}

export default Main;
