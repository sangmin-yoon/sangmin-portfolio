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

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    width: 350px;
    margin-top: 150px;
    justify-content: start;
    h1 {
      font-size: 40px;
    }
    h3 {
      font-size: 27px;
    }
  }
`;

function Main({ scrollTo }) {
  return (
    <MainWrapper>
      <Overview>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "<h1>안녕하세요, <br />프론트엔드 개발자<br />윤상민입니다.</h1><hr /><h3>방문해 주셔서 감사합니다. :)</h3>"
              )
              .callFunction(() => {
                scrollTo.about();
                document.body.style.overflow = "auto";
              })
              .start();
          }}
          options={{
            delay: 95,
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
