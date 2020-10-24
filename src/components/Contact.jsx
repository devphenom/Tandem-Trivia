import React from "react";

const Contact = () => (
  <div id="contact" className="p-2">
    <div className="container">
      <div className="row py-5 align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 font-weight-bold headline">Contact Me</h1>
          <div className="underline mb-4 mb-md-0"></div>
        </div>{" "}
        <div className="col-md-5 links">
          <a
            href="mailto:aliabdulsamad15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 p-2"
          >
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.github.com/devphenom"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 p-2"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/devphenom"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 p-2"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.twitter.com/dev_phenom"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 p-2"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
