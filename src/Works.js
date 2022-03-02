import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faHomeLg,
  faHouseDamage,
  faLink,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
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
  overflow: scroll;
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

const DetailImgWrapper = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

const DetailImg = styled.img`
  width: 100%;
  height: 100%;
`;

const DetailOverViewContainer = styled.div`
  width: 100%;
`;

const OverViewTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const OverViewTitle = styled.h1`
  font-size: 25px;
  padding: 15px;
  font-weight: 500;
  text-align: center;
  font-size: 2vw;
`;

const StackWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const Stack = styled.h1`
  background-color: rgba(238, 238, 239, 0.7);
  padding: 7px 20px;
  border-radius: 25px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.color.bgColorBorder};

  &&:not(:last-child) {
    margin-right: 8px;
  }
`;

const Description = styled.div`
  line-height: 130%;
  font-size: 1.1vw;
  opacity: 0.8;
  margin-bottom: 10px;
  height: 100%;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  cursor: pointer;
`;

const RefWrapper = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  width: 45px;
  display: flex;
  justify-content: space-between;
`;

const RefIconWrapper = styled.div`
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
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
    momentum: {
      stack: ["Vanilla JS", "HTML", "CSS"],
      description:
        "Vanilla JS를 이용해 만든 위젯 사이트 입니다. JS를 이용한 DOM조작과 Fetch API를 사용한 날씨정보 불러오기 등 JS의 기본기를 배울 수 있게된 프로젝트 였습니다. ",
      imgUrl: "assets/prjedit/momentum.jpeg",
      homePageUrl: "https://sangmin-yoon.github.io/momentum-clone/",
      gitUrl: "https://github.com/sangmin-yoon/momentum-clone",
      modal: false,
    },
    Switter: {
      stack: ["React.js", "Firebase", "Styled-Components"],
      description:
        "트위터를 클론하여 만든 사이트입니다. Firebase를 이용하여 작업했습니다. React.js에서의 CRUD구현 방식을 알게됐고 Firebase를 이용해 프론트엔드 만으로 풀스택을 구현하는 새로운 경험을 할 수 있었습니다.",
      imgUrl: "assets/prjedit/switter.jpeg",
      homePageUrl: "https://sangmin-yoon.github.io/switter/#/",
      gitUrl: "https://github.com/sangmin-yoon/switter",
      modal: false,
    },
    MFLIX: {
      stack: ["React.js", "Type-Script", "Framer-motion", "Styled-Components"],
      description:
        "넷플릭스를 클론한 사이트입니다. TMDB의 영화 API를 사용하여 영화,TV프로그램 리스트와 검색 기능을 구현 했습니다. 그외에 React.js의 Framer-Motion 라이브러리를 사용하여 애니메이션을 구현했습니다. React의 이해도를 더 높게 만들어주게 되는 프로젝트였습니다. ",
      imgUrl: "assets/prjedit/mflix.jpeg",
      homePageUrl: "https://sangmin-yoon.github.io/2021-Mflix/",
      gitUrl: "https://github.com/sangmin-yoon/2021-Mflix",
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
        "Heroku",
      ],
      description:
        "React.js와 Node.js를 이용해 풀스택 사이트를 만들어보고자 시작하게 됐습니다. MongoDB를 이용해 데이터를 저장하였고 프론트는 Netlify, 백엔드는 Heroku를 이용하여 배포했습니다. Node.js로 REST API를 직접 구현하여 React.js와 통신했습니다. cookie/session 인증 방식에 대해 확실이 이해할수 있게 됐고 서로다른 origin에서 데이터를 공유하는 과정에서 CORS, SameSite등 웹에대한 지식을 얻을 수 있었습니다. 또한 MongoDB의 다양한 query문을 사용해보면서 복잡해보였던 요청이 코드 몇줄만으로 해결됐던 통쾌한 경험과함께 MongoDB에 대한 이해도도 높여주는 프로젝트 였습니다.",
      imgUrl: "assets/prjedit/swit.jpeg",
      homePageUrl: "https://swits.netlify.app/globalfeed",
      gitUrl: "https://github.com/sangmin-yoon/realworld-example",
      modal: false,
    },
  });
  const { scrollY } = useViewportScroll();

  const modalOn = (i) => {
    document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "auto";
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
              style={{ top: scrollY.get() + 100 }}
              layoutId={i}
              key={key}
            >
              <CloseBtn onClick={() => modalOff(i)}>
                <FontAwesomeIcon icon={faXmarkCircle} />
              </CloseBtn>
              <DetailImgWrapper>
                <DetailImg src={projectsObj[i].imgUrl} />
              </DetailImgWrapper>
              <DetailOverViewContainer>
                <OverViewTitleWrapper>
                  <OverViewTitle>{i}</OverViewTitle>
                  <RefWrapper>
                    <RefIconWrapper
                      onClick={() => window.open(`${projectsObj[i].gitUrl}`)}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </RefIconWrapper>
                    <RefIconWrapper
                      onClick={() =>
                        window.open(`${projectsObj[i].homePageUrl}`)
                      }
                    >
                      <FontAwesomeIcon icon={faHomeLg} />
                    </RefIconWrapper>
                  </RefWrapper>
                </OverViewTitleWrapper>

                <StackWrapper>
                  {projectsObj[i].stack.map((skill, key) => (
                    <Stack key={key}>{skill}</Stack>
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
