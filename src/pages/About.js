import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import profile from "../assets/pro.png";

const AboutWrapper = styled.div`
  background-color: ${(props) => props.theme.color.bgColorBorder};
`;

const AboutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: auto;
  max-width: ${(props) => props.theme.size.defaultMaxWidth};
`;

const HeaderTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  position: absolute;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileImg = styled(motion.img)`
  height: 600px;
  width: fit-content;
  margin-top: 50px;
  border-radius: 10px;

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    height: auto;
    width: 100%;
  }
`;

const Overview = styled(motion.div)`
  padding-right: 150px;
  align-self: center;
  height: 400px;
  width: 500px;
  color: ${(props) => props.theme.color.subColor};
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    padding: 40px 30px;
    width: auto;
    height: auto;
  }
`;

const OverViewTitle = styled(motion.h1)`
  color: ${(props) => props.theme.color.mainColor};
  font-weight: 400;
  font-size: 25px;
  margin-bottom: 20px;
`;

const ParagraphFirst = styled(motion.p)``;

const ParagraphTwo = styled(motion.p)``;

function About() {
  const [fromTopToTargetHeigt, setFromTopToTargetHeigt] = useState(0);
  const { scrollY } = useViewportScroll();
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = scrollRef.current.getBoundingClientRect().y;
    setFromTopToTargetHeigt(scroll);
  }, []);

  const titleSlide = useTransform(
    scrollY,
    [0, fromTopToTargetHeigt - 300],
    [800, 0]
  );

  const paragraphSlideOne = useTransform(
    scrollY,
    [0, fromTopToTargetHeigt - 200],
    [800, 0]
  );

  const paragraphSlideTwo = useTransform(
    scrollY,
    [0, fromTopToTargetHeigt - 100],
    [800, 0]
  );

  return (
    <AboutWrapper>
      <AboutContainer>
        <HeaderTitle ref={scrollRef}>ABOUT ME</HeaderTitle>
        <Content>
          <ProfileImg src={profile} />
          <Overview>
            <OverViewTitle>
              항상 배우고 발전하고 싶은 개발자
              <br /> 윤상민 입니다.
            </OverViewTitle>
            <ParagraphFirst>
              실제로 구현하여 성과가 보이는 것, 내가 만든 무언가를 다른 사람이
              사용한다는 것에 재미와 보람을 느낍니다. IT 기술을 좋아하고 내가
              노력한 만큼 성장할 수 있다고 생각하여 개발을 시작하게 됐습니다.
            </ParagraphFirst>
            <br />
            <ParagraphTwo>
              프론트뿐만 아니라 백엔드, 앱개발등 다양한 기술에 관심이 많습니다.
              최근에는 앱개발에 관심이 많아 React Native를 공부하고 있습니다.
              그리고 Vanilla JS의 깊은 이해도를 위해 그와 관련된 공부도 꾸준히
              하고있습니다. 개발에 공부는 끝이 없다고 생각합니다. 평생 공부할
              각오를 하고 개발자의 길에 발을 들이게 됐습니다. 빨리 성장하여
              회사에 도움 되는 인재가 되도록 하겠습니다.
            </ParagraphTwo>
          </Overview>
        </Content>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default About;
