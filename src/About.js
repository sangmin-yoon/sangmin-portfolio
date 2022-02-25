import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AboutWrapper = styled.div`
  background-color: ${(props) => props.theme.color.bgColorBorder};
`;

const AboutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
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
`;

const ProfileImg = styled(motion.img)`
  height: 600px;
  width: fit-content;
  margin-top: 50px;
  border-radius: 10px;
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

  h1 {
    color: ${(props) => props.theme.color.mainColor};
    font-weight: 400;
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

function About() {
  const [fromTopToTargetHeigt, setFromTopToTargetHeigt] = useState(0);
  const { scrollY } = useViewportScroll();
  const scrollRef = useRef();

  useEffect(() => {
    const scroll = scrollRef.current.getBoundingClientRect().y;
    setFromTopToTargetHeigt(scroll);
  }, []);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  const xRight = useTransform(
    scrollY,
    [0, fromTopToTargetHeigt - 300],
    [2000, 0]
  );
  const xLeft = useTransform(
    scrollY,
    [0, fromTopToTargetHeigt - 200],
    [-2000, 0]
  );

  return (
    <AboutWrapper>
      <AboutContainer>
        <HeaderTitle ref={scrollRef}>ABOUT ME</HeaderTitle>
        <Content>
          <ProfileImg src="assets/pro.png" style={{ x: xLeft }} />
          <Overview style={{ x: xRight }}>
            <h1>
              항상 배우고 발전하고 싶은 개발자
              <br /> 윤상민 입니다.
            </h1>
            <p>
              실제로 구현하여 성과가 보이는 것, 내가 만든 무언가를 다른
              사람이 사용한다는 것에 재미와 보람을 느낍니다.
              ㅊㅇㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴ마오ㅓㅁ나ㅗㅇㄴ머ㅏ오나ㅓㅇㅁ나ㅓ온머'ㅇ놤너옴ㅇ나ㅓㅁ
            </p>
          </Overview>
        </Content>
      </AboutContainer>
    </AboutWrapper>
  );
}

export default About;
