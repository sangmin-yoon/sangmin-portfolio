import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";
import { variantsTheme } from "./theme";

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
  margin-bottom: 30px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;
`;

const ProjectWrapper = styled(motion.div)`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.subColor};
  cursor: pointer;
  opacity: 0.7;
`;

const ProjectTitle = styled.div`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 400;
`;

const projectVariants = {
  hover: {
    opacity: 1,
    color: variantsTheme.color.mainColor,
    scale: 1.2,
    y: -20,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
};

function Works() {
  return (
    <WorksWrapper>
      <WorksContainer>
        <HeaderTitle>WORKS</HeaderTitle>
        <Content>
          <ProjectWrapper variants={projectVariants} whileHover="hover">
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>Mfilx</ProjectTitle>
          </ProjectWrapper>
          <ProjectWrapper variants={projectVariants} whileHover="hover">
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>Switter</ProjectTitle>
          </ProjectWrapper>
          <ProjectWrapper variants={projectVariants} whileHover="hover">
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>RealWorld</ProjectTitle>
          </ProjectWrapper>
          <ProjectWrapper variants={projectVariants} whileHover="hover">
            <FontAwesomeIcon icon={faFileLines} size="10x" />
            <ProjectTitle>Trello</ProjectTitle>
          </ProjectWrapper>
        </Content>
      </WorksContainer>
    </WorksWrapper>
  );
}

export default Works;
