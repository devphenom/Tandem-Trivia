import React from "react";

const AboutMe = () => (
  <section id="about" className="py-3">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1
            className="display-4 font-weight-bold"
            data-aos="fade-left"
            data-aos-duration="1000"
            // data-aos-delay="250"
            data-aos-easing="linear"
          >
            About Me
          </h1>
          <div
            className="underline"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="150"
            data-aos-easing="linear"
          ></div>
        </div>{" "}
      </div>
      <div className="row py-3">
        <div className="col-md-7 text-justify p-3">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="linear"
          >
            I am a Nigerian, a front end web developer, a graphics designer and
            a cyber security student.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-easing="linear"
          >
            I have about 2 years experience working on front end web
            technologies. I have completed a series of projects as a freelancer.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-easing="linear"
          >
            In addition to my skills is about 5 years experience in graphics
            designing with CorelDraw versions and Photoshop CS.
          </p>
        </div>
        <div className="col-md-4 p-3 ml-auto">
          <h3
            className="text-center font-weight-bold"
            data-aos="slide-left"
            data-aos-duration="1500"
            // data-aos-delay="250"
            data-aos-easing="linear"
          >
            My Stacks
          </h3>
          <div className="row">
            <div
              className="text-center p-2 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-easing="linear"
            >
              <i class="fab fa-html5 fa-3x text-primary" aria-hidden="true"></i>
              <p className="font-weight-bold">HTML</p>
            </div>
            <div
              className="text-center p-2 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              <i class="fab fa-css3 fa-3x text-primary" aria-hidden="true"></i>
              <p className="font-weight-bold">CSS</p>
            </div>
            <div
              className="text-center p-2 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              <i
                class="fab fa-js-square fa-3x text-primary"
                aria-hidden="true"
              ></i>
              <p className="font-weight-bold">JavaScript</p>
            </div>
            <div
              className="text-center p-2 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-easing="linear"
            >
              <i
                class="fab fa-bootstrap fa-3x text-primary"
                aria-hidden="true"
              ></i>
              <p className="font-weight-bold">Bootstrap4</p>
            </div>
            <div
              className="text-center p-2 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="linear"
            >
              <i class="fab fa-react fa-3x text-primary" aria-hidden="true"></i>
              <p className="font-weight-bold">ReactJS</p>
            </div>
          </div>
          <h3
            className="text-center font-weight-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
          >
            Additional Skills
          </h3>
          <div className="row">
            <div
              className="text-center p-2 mx-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
              data-aos-easing="linear"
            >
              <i
                class="fab fa-git-alt fa-3x text-primary"
                aria-hidden="true"
              ></i>
              <p className="font-weight-bold">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
