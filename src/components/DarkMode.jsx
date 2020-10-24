import React from "react";

const DarkMode = (props) => (
  <div id="darkmode">
    <div className="container">
      <div className="row">
        <div className="col">
          <span
            className="fa-stack fa-1x text-orange"
            id="scrollUp"
            onClick={() => props.setdarkmode(!props.darkmode)}
          >
            <i className="fas fa-circle fa-stack-2x"></i>
            <i
              className={`fas fa-${
                props.darkmode ? "sun" : "moon"
              } fa-stack-1x fa-inverse`}
            ></i>
          </span>
        </div>
      </div>
    </div>{" "}
    {/* Hi */}
  </div>
);

export default DarkMode;
