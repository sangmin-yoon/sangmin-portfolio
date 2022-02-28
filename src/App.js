import { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Works from "./Works";

function App() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []); // 새로고침시 뷰포인트 맨위로 이동
  return (
    <>
      <Header />
      <Main />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
}

export default App;
