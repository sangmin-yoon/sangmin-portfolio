import { useEffect, useRef, useState } from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Header from "./Header";
import Main from "../pages/Main";
import Skills from "../pages/Skills";
import Works from "../pages/Works";
import smoothscroll from "smoothscroll-polyfill";

function App() {
  const [onlyPC, setOnlyPC] = useState(window.innerWidth > 599 ? true : false);
  const aboutRef = useRef();
  const skillsRef = useRef();
  const worksRef = useRef();

  smoothscroll.polyfill();

  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  const scrollTo = {
    about: () => scrollToRef(aboutRef),
    skills: () => scrollToRef(skillsRef),
    works: () => scrollToRef(worksRef),
  };

  const screenChange = (event) => {
    const matches = event.matches;
    setOnlyPC(matches);
  };

  useEffect(() => {
    let mql = window.matchMedia("screen and (min-width:599px)");
    mql.addEventListener("change", screenChange);
    return () => mql.removeEventListener("change", screenChange);
  }, []);

  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []); // 새로고침시 뷰포인트 맨위로 이동
  return (
    <>
      <Header onlyPC={onlyPC} scrollTo={scrollTo} />
      <Main scrollTo={scrollTo} />
      <div ref={aboutRef}>
        <About onlyPC={onlyPC} />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={worksRef}>
        <Works onlyPC={onlyPC} />
      </div>
      <Contact />
    </>
  );
}

export default App;
