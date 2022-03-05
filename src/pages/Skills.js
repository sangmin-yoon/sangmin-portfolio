import styled from "styled-components";
import front from "../assets/skills/front.png";
import deployment from "../assets/skills/deployment.png";
import back from "../assets/skills/back.png";

const SkillsWrapper = styled.div``;

const SkillsContainer = styled.div`
  max-width: ${(props) => props.theme.size.defaultMaxWidth};
  margin: 0 auto;
  margin-top: 200px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SkillBox = styled.div`
  background-color: ${(props) => props.theme.color.bgColor};
  width: fit-content;
  font-size: 30px;
  color: ${(props) => props.theme.color.mainColor};
  padding: 25px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  img {
    width: 300px;
  }

  hr {
    opacity: 0.1;
  }
`;

function Skills() {
  return (
    <SkillsWrapper>
      <SkillsContainer>
        <Content>
          <SkillBox>
            <h1>Frontend</h1>
            <hr />
            <img alt="front" src={front} />
          </SkillBox>
          <SkillBox>
            <h1>Backend</h1>
            <hr />
            <img alt="back" src={deployment} />
          </SkillBox>
          <SkillBox>
            <h1>Deployment</h1>
            <hr />
            <img alt="deploy" src={back} />
          </SkillBox>
        </Content>
      </SkillsContainer>
    </SkillsWrapper>
  );
}

export default Skills;
