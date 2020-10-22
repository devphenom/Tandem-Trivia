import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-navbar shadow-sm px-lg-3 scrolling-navbar">
        {/* <div className="ml-auto">
          <span className="btn" onClick={this.props.handleModeChange}>
            {this.props.darkMode ? (
              <span>
                <i className="far fa-sun"></i>
                <span className="d-none d-md-inline-block pl-2">
                  Light Mode
                </span>
              </span>
            ) : (
              <span>
                <i className="far fa-moon"></i>
                <span className="d-none d-md-inline-block pl-2">Dark Mode</span>
              </span>
            )}
          </span>
        </div> */}
      </nav>
    );
  }
}
export default Navbar;
