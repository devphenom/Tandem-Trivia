import React from "react";

const Contact = () => (
  <div id="contact" className="py-2">
    <div className="container">
      <div className="row py-5">
        <div className="col-md-6">
          <h1 className="display-4 font-weight-bold">Contact Me</h1>
          <div className="underline"></div>
        </div>{" "}
        {/* </div> */}
        {/* <div className="row"> */}
        <div className="col-md-5 links">
          <a
            href="mailto:aliabdulsamad15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.github.com/devphenom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/devphenom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          <a
            href="https://www.twitter.com/dev_phenom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
