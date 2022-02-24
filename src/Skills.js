import styled from "styled-components";

const SkillsWrapper = styled.div``;

const SkillsContainer = styled.div`
  max-width: ${(props) => props.theme.size.defaultMaxWidth};
  margin: 0 auto;
  margin-top: 200px;
  height: 500px;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FrontBox = styled.div`
  background-color: ${(props) => props.theme.color.bgColorBorder};
  width: fit-content;
  border-radius: 10px;
  font-size: 30px;
  color: ${(props) => props.theme.color.mainColor};
  padding: 25px;

  img {
    width: 300px;
  }
`;

const BackBox = styled.div`
  background-color: ${(props) => props.theme.color.bgColorBorder};
  width: fit-content;
  font-size: 30px;
  color: ${(props) => props.theme.color.mainColor};
  padding: 25px;
  border-radius: 10px;
  img {
    width: 300px;
  }
`;

const DeployBox = styled.div`
  background-color: ${(props) => props.theme.color.bgColorBorder};
  width: fit-content;
  font-size: 30px;
  color: ${(props) => props.theme.color.mainColor};
  padding: 25px;
  border-radius: 10px;
  img {
    width: 300px;
  }
`;

function Skills() {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        <HeaderTitle>Skills</HeaderTitle>
        <Content>
          <FrontBox>
            <h1>Frontend</h1>
            <hr />
            <img alt="front" src="assets/front.png" />
          </FrontBox>
          <BackBox>
            <h1>Backend</h1>
            <hr />
            <img alt="back" src="assets/back.png" />
          </BackBox>
          <DeployBox>
            <h1>Deployment</h1>
            <hr />
            <img alt="deploy" src="assets/deployment.png" />
          </DeployBox>
        </Content>
      </SkillsContainer>
    </SkillsWrapper>
  );
}

export default Skills;
