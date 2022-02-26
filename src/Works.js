import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
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

const DetailContainer = styled(motion.div)`
  height: 200px;
  width: 400px;
  background-color: ${(props) => props.theme.color.bgColor};
  border-radius: 10px;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  width: 35vw;
  height: 70vh;
  z-index: 1;
  border: 2px solid ${(props) => props.theme.color.bgColorBorder};
  opacity: 0.99;
`;

const ProjectCrover = styled(motion.div)`
  width: 200px;
  height: 300px;
`;

const Screen = styled(motion.div)`
  width: 100vw;
  position: absolute;
  margin: 0 auto;

  background-color: black;
  z-index: 2;
`;

const projectVariants = {
  hover: {
    color: variantsTheme.color.mainColor,
    scale: 1.2,
    y: -20,
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
};

function Works() {
  const [projectsObj, setProjectObj] = useState({
    Mflix: {
      stack: [],
      description: "어쩌구 저쩌구",
      imgUrl: "",
      modal: false,
    },
    Switter: {
      stack: [],
      description: "어쩌구 저쩌구",
      imgUrl: "",
      modal: false,
    },
    RealWorld: {
      stack: [],
      description: "어쩌구 저쩌구d",
      imgUrl: "",
      modal: false,
    },
    Trello: {
      stack: [],
      description: "어쩌구 저쩌구",
      imgUrl: "",
      modal: false,
    },
  });
  const { scrollY } = useViewportScroll();

  const modalOn = (i) => {
    setProjectObj((prev) => {
      return {
        ...prev,
        [i]: {
          ...prev[i],
          modal: true,
        },
      };
    });
  };

  const modalOff = (i) => {
    setProjectObj((prev) => {
      return {
        ...prev,
        [i]: {
          ...prev[i],
          modal: false,
        },
      };
    });
  };

  return (
    <WorksWrapper>
      <Screen />
      <WorksContainer>
        <HeaderTitle>WORKS</HeaderTitle>
        <Content>
          {Object.keys(projectsObj).map((i, key) => (
            <ProjectCrover key={key} onClick={() => modalOn(i)}>
              <ProjectWrapper
                layoutId={i}
                variants={projectVariants}
                whileHover="hover"
              >
                <FontAwesomeIcon icon={faFileLines} size="10x" />
                <ProjectTitle>{i}</ProjectTitle>
              </ProjectWrapper>
            </ProjectCrover>
          ))}
        </Content>
      </WorksContainer>
      {Object.keys(projectsObj).map((i, key) => (
        <>
          {projectsObj[i].modal ? (
            <DetailContainer
              onClick={() => modalOff(i)}
              key={key}
              style={{ top: scrollY.get() + 100 }}
              layoutId={i}
            ></DetailContainer>
          ) : null}
        </>
      ))}
    </WorksWrapper>
  );
}

export default Works;
