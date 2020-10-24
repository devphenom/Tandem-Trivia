import React from "react";

const Portfolio = () => (
  <section id="portfolio" className="p-2">
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h1
            className="display-4 font-weight-bold headline"
            data-aos="fade-right"
            data-aos-duration="1000"
            // data-aos-delay="200"
            data-aos-easing="linear"
          >
            Portfolio
          </h1>
          <div
            className="underline"
            data-aos="fade-left"
            data-aos-duration="1000"
            // data-aos-delay="200"
            data-aos-easing="linear"
          ></div>
        </div>{" "}
      </div>
      <div className="row py-3 align-items-center">
        <div
          className="col-md-7 portimg mx-3 mx-md-0 text-center d-flex align-items-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-easing="linear"
        >
          <img
            src={require("../imgs/easybanks.png")}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-5 col-lg-4 mx-auto rounded">
          <h1
            className="font-weight-bold portfolio-name py-2 headline"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-easing="linear"
          >
            Easybank Landing Page{" "}
            <span>
              <a
                href="https://easybank-landing-page-sooty.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt ml-3"></i>
              </a>
            </span>
          </h1>
          <p
            className="my-3 p"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-easing="linear"
          >
            I converted the design from{" "}
            <a
              href="https://frontendmentor.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              frontendmentor.io
            </a>{" "}
            challenge into a functional client side landing page, which is made
            reponsive on both desktop and mobile devices.
          </p>
          <div className="row justify-content-end">
            <span
              className="px-3 py-1 rounded m-2 bg-card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="600"
              data-aos-easing="linear"
            >
              HTML
            </span>
            <span
              className="px-3 py-1 rounded m-2 bg-card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-easing="linear"
            >
              CSS
            </span>
            <span
              className="px-3 py-1 rounded m-2 bg-card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-easing="linear"
            >
              Bootstrap
            </span>
            <span
              className="px-3 py-1 rounded m-2 bg-card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              JavaScript
            </span>
            <span
              className="px-3 py-1 rounded m-2 bg-card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              data-aos-easing="linear"
            >
              AOS
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
