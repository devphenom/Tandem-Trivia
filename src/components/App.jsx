import React from "react";
import Navbar from "./Navbar";
import DarkMode from "./DarkMode";
import Main from "./Main";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

// anime({
//   targets: "h1",
//   translateX: 250,
//   rotate: "1turn",
//   backgroundColor: "#FFF",
//   duration: 800,
// });

const App = () => (
  <div className="bg-p">
    <React.Fragment>
      <DarkMode />
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
    </React.Fragment>
  </div>
);

export default App;
