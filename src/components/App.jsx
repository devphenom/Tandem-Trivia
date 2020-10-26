import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
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

const App = () => {
  const [darkmode, setdarkmode] = useState(false);
  const [mobileNav, setmobileNav] = useState(false);

  const toggleMobileNav = () => setmobileNav(!mobileNav);

  return (
    <div className={darkmode ? "bg-darK" : "bg-light"}>
      <React.Fragment>
        <DarkMode darkmode={darkmode} setdarkmode={setdarkmode} />
        <Navbar toggleMobileNav={toggleMobileNav} mobileNav={mobileNav} />
        <MobileNav
          toggleMobileNav={toggleMobileNav}
          mobileNav={mobileNav}
          darkmode={darkmode}
        />
        <Main />
        <About />
        <Portfolio />
        <Contact />
      </React.Fragment>
    </div>
  );
};
export default App;
