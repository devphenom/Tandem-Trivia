import React from "react";

import anime from "animejs/lib/anime.es.js";

anime({
  targets: ".name",
  translateX: 250,
  duration: 2000,
  loop: 3,
});

const Main = () => (
  <div id="main" className="py-3 py-md-5">
    <div className="container">
      <div className="row py-md-3 min-100 align-items-center">
        <div className="col-md-10 mx-auto py-3">
          <h4
            className=""
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            // data-aos-easing="linear"
          >
            Hello{" "}
            <span role="img" aria-label="emoji">
              {" "}
              ✋,
            </span>
            I'm <br />
          </h4>
          <h1
            className="display-3 font-weight-bold"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            <strong> Ali Abdulsamad Tolulope</strong>
          </h1>
          <h5
            className="py-3 text-justify"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-easing="linear"
          >
            <em>
              I'm a frontend developer based in Nigeria. I develop client-side
              web applications to meet customer's requirement.
            </em>
          </h5>
          <a href="mailto:aliabdulsamad15@gmail.com">
            <button
              className="btn btn-lg btn-primary px-3 px-md-5 py-2 py-md-3 font-weight-bold my-2 mr-2 hvr-hollow"
              data-aos="fade-up"
              data-aos-duration="800"
              // data-aos-delay="250"
              data-aos-easing="linear"
            >
              Hire Me
            </button>
          </a>
          <a href="#contact">
            <button
              className="btn btn-lg btn-outline-primary px-3 px-md-5 py-2 py-md-3  font-weight-bold my-2 mr-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
              data-aos-easing="linear"
            >
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
