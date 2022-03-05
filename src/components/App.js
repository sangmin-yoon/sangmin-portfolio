import { useEffect, useRef } from "react";
import styled from "styled-components";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "./Header";
import Main from "../pages/Main";
import Skills from "../pages/Skills";
import Works from "../pages/Works";

const PcOnly = styled.div`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.size.mobileMaxWidth}) {
    /* display: block;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100; */
  }
`;

function App() {
  const aboutRef = useRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 64, behavior: "smooth" });

  const scrollTo = {
    about: () => scrollToRef(aboutRef),
  };

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []); // 새로고침시 뷰포인트 맨위로 이동
  return (
    <>
      <PcOnly>
        죄송합니다 현재 모바일 버전은 준비중입니다. pc버전으로 이용해주시면
        감사하겠습니다. ㅠㅠ
      </PcOnly>
      <Header />
      <Main scrollTo={scrollTo} />
      <div ref={aboutRef}>
        <About />
      </div>
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

export default App;
