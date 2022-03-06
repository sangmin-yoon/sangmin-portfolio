import { useEffect, useRef } from "react";
import styled from "styled-components";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "./Header";
import Main from "../pages/Main";
import Skills from "../pages/Skills";
import Works from "../pages/Works";

function App() {
  const aboutRef = useRef();
  const skillsRef = useRef();
  const worksRef = useRef();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop - 64, behavior: "smooth" });

  const scrollTo = {
    about: () => scrollToRef(aboutRef),
    skills: () => scrollToRef(skillsRef),
    worksRef: () => scrollToRef(worksRef),
  };

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []); // 새로고침시 뷰포인트 맨위로 이동
  return (
    <>
      <Header />
      <Main scrollTo={scrollTo} />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <Contact />
    </>
  );
}

export default App;
