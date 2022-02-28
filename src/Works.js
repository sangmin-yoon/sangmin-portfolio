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
  padding: 20px;
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

const DetailImg = styled.div`
  height: 50%;
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
`;

const DetailOverViewContainer = styled.div`
  height: 50%;
  width: 100%;
`;

const OverViewTitle = styled.h1`
  font-size: 25px;
  padding: 15px;
  font-weight: 500;
  text-align: center;
`;

const StackWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const Stack = styled.h1`
  background-color: ${(props) => props.theme.color.bgColorBorder};
  padding: 7px 20px;
  border-radius: 25px;
  margin-bottom: 5px;

  &&:not(:last-child) {
    margin-right: 8px;
  }
`;

const Description = styled.div``;

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
    MFLIX: {
      stack: ["React.js", "Type-Script", "Framer-motion", "Styled-Components"],
      description:
        "넷플릭스를 클론한 사이트입니다. TMDB의 영화 Api를 사용하여 영화,TV프로그램 리스트와 검색 기능을 구현 했습니다. 그외에 React.js의 Framer-Motion 라이브러리를 사용하여 애니메이션을 구현했습니다. React의 이해도를 더 높게 만들어주게 되는 프로젝트였습니다. ",
      imgUrl: "",
      modal: false,
    },
    Switter: {
      stack: ["React.js", "Firebase", "Styled-Components"],
      description:
        "트위터를 클론하여 만든 사이트입니다. Fire Base를 이용하여 작업했습니다. React.js에서의 CRUD구현 방식을 알게됐고 Fire Base를 이용해 프론트엔드 만으로 풀스택을 구현하는 새로운 경험을 할 수 있었습니다.",
      imgUrl: "",
      modal: false,
    },
    RealWorld: {
      stack: [
        "React.js",
        "Type-Script",
        "Redux",
        "Styled-Components",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      description:
        "React.js와 Node.js를 이용해 풀스택 사이트를 만들어보고자 시작하게 됐습니다. Mongodb를 이용해 데이터를 저장하였고 프론트는 Netlify, 백엔드는 Heroku를 이용하여 배포했습니다. Node.js로 Rest Api를 직접 구현하여 React.js와 통신했습니다. cookie/session 인증 방식에 대해 확실이 이해할수 있게 됐고 서로다른 도메인에서 데이터를 공유하는 과정에서 CORS, SameSite등 웹에대한 지식을 얻을 수 있었습니다. 또한 MongoDb의 다양한 query문을 사용해보면서 복잡해보였던 요청이 코드 몇줄만으로 해결됐던 통쾌한 경험과함께 MongoDb에 대한 이해도도 늘어났습니다.",
      imgUrl: "",
      modal: false,
    },
    Trello: {
      stack: ["React.js", "Styled-Components"],
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
            <ProjectCrover key={key}>
              <ProjectWrapper
                layoutId={i}
                variants={projectVariants}
                whileHover="hover"
                onClick={() => modalOn(i)}
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
            >
              <DetailImg />
              <DetailOverViewContainer>
                <OverViewTitle>{i}</OverViewTitle>
                <StackWrapper>
                  {projectsObj[i].stack.map((skill) => (
                    <Stack>{skill}</Stack>
                  ))}
                </StackWrapper>
                <Description>{projectsObj[i].description}</Description>
              </DetailOverViewContainer>
            </DetailContainer>
          ) : null}
        </>
      ))}
    </WorksWrapper>
  );
}

export default Works;
