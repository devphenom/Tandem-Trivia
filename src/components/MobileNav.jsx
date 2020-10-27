import React from "react";

const MobileNav = ({ toggleMobileNav, mobileNav, darkmode }) => {
  return (
    <div
      className={`container-fluid d-md-none ${mobileNav ? "active" : ""} ${
        darkmode ? "bg-darK" : "bg-light"
      }`}
      id="mobilenav"
    >
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-11 col-md-8">
          <ul className="navbar-nav mt-5 pt-5 text-center">
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={toggleMobileNav}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className="nav-link"
                onClick={toggleMobileNav}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={toggleMobileNav}>
                Contact
              </a>
            </li>
            <li className="nav-item btn-outline-orange rounded">
              <a
                href="https://docs.google.com/document/d/1RbTUo6HLuRtAl-BcbucS3L5E1soykJau_Cigg9BIFds/edit?usp=sharing"
                className="nav-link"
                onClick={toggleMobileNav}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// export default MobileNav;

//   <div id="mobilenav">
//     <div className="container">
//       <div className="row">
//         <div className="col-12">
//           <div className="mobilenav text-center">

//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
export default MobileNav;
