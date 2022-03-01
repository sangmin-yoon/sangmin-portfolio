import { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Works from "./Works";

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
