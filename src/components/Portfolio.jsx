import React from "react";

const Portfolio = () => (
  <section id="portfolio" className="py-2">
    <div className="container">
      <div className="row py-5">
        <div className="col">
          <h1 className="display-4 font-weight-bold">Portfolio</h1>
          <div className="underline"></div>
        </div>{" "}
      </div>
      <div className="row py-3 align-items-center">
        <div className="col-md-6 border rounded">
          <img
            src={require("../imgs/easybanks.png")}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-md-4 mx-auto">
          <h1 className="font-weight-bold">
            Easybank Landing Page{" "}
            <span>
              <a href="https://easybank-landing-page-sooty.vercel.app/">
                <i className="fas fa-external-link-alt ml-3"></i>
              </a>
            </span>
          </h1>
          <p className="my-3">
            I converted the design from frontendmentors.io challenge into a
            functional client side landing page, which is made reponsive on both
            desktop and mobile devices.
          </p>
          <div className="row justify-content-end">
            <i class="fab fa-html5 fa-2x   px-2"></i>
            <i class="fab fa-css3 fa-2x   px-2"></i>
            <i class="fab fa-bootstrap fa-2x   px-2"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
