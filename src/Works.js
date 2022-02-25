import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WorksWrapper = styled.div`
  background-color: ${(props) => props.theme.color.bgColorBorder};
  margin-top: 200px;
  width: 100%;
`;

const WorksContainer = styled.div`
  max-width: ${(props) => props.theme.size.defaultMaxWidth};
  margin: 0 auto;
  height: 500px;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ProjectWrapper = styled.div`
  width: 200px;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.subColor};
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    color: ${(props) => props.theme.color.mainColor};
  }
`;

const ProjectTitle = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 400;
`;

function Works() {
  return (
    <WorksWrapper>
      <WorksContainer>
        <HeaderTitle>WORKS</HeaderTitle>
        <Content>
          <ProjectWrapper>
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>Mfilx</ProjectTitle>
          </ProjectWrapper>
          <ProjectWrapper>
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>Switter</ProjectTitle>
          </ProjectWrapper>
          <ProjectWrapper>
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>RealWorld</ProjectTitle>
          </ProjectWrapper>
          <ProjectWrapper>
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>Trello</ProjectTitle>
          </ProjectWrapper>
        </Content>
      </WorksContainer>
    </WorksWrapper>
  );
}

export default Works;
