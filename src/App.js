import { useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Main from "./Main";
import Skills from "./Skills";
import Works from "./Works";

function App() {
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
