import React from "react";
import {
  PortRow,
  PortCard,
  PortName,
  PortText,
  PortTagContainer,
  PortTag,
  PortImageContainer,
  PortImage,
} from "./PortfolioCard";
// import PortCard from "./PortfolioCard";
// import preload from "./portfoliodata.json";

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
      {/* country portfolio */}
      <PortRow className="d-none">
        <PortImageContainer
          aos={{
            name: "fade-right",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="countryimg"
          link="https://my-country.vercel.app"
        >
          <PortImage img={require("../imgs/Country.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Country Rest API Data"
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://my-country.vercel.app"
          />
          <PortText
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            A challenge from{" "}
            <a
              href="https://frontendmentor.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              frontendmentor
            </a>{" "}
            which displays countries data (flag, population, region, capital,
            borders etc.).
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="React JS"
            />
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="Rest API"
            />
            <PortTag
              aos={{
                name: "fade-left",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="Dark Mode"
            />
          </PortTagContainer>
        </PortCard>
      </PortRow>
      {/* end of country portfolio */}
      {/* covid portfolio */}
      <PortRow>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="covidimg"
          display="d-md-none"
          link="https://covidstrain.vercel.app"
        >
          <PortImage img={require("../imgs/Covid.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Covid-19 Tracker"
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://covidstrain.netlify.app"
          />
          <PortText
            aos={{
              name: "fade-right",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            A web application that keeps track of Corona Virus data around the
            world. Top 5 affected countries, death, affected and recovered
            cases.
          </PortText>
          <PortTagContainer>
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "400",
                easing: "linear",
              }}
              name="HTML/CSS"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "300",
                easing: "linear",
              }}
              name="Bootstrap4"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "200",
                easing: "linear",
              }}
              name="JavaScript/ES6"
            />
            <PortTag
              aos={{
                name: "fade-right",
                duration: "1000",
                delay: "100",
                easing: "linear",
              }}
              name="Rest API"
            />
          </PortTagContainer>
        </PortCard>
        <PortImageContainer
          aos={{
            name: "fade-left",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="covidimg"
          display="d-none d-md-block"
          link="https://covidstrain.vercel.app"
        >
          <PortImage img={require("../imgs/Covid.png")} />
        </PortImageContainer>
      </PortRow>
      {/* {preload.portfolio.map((portfolio) => (
        <PortCard port={portfolio} key={portfolio.name} />
      ))} */}
      {/* <div className="row py-3 align-items-center">
        <div
          className="col-md-7 portimg easybankimg mx-3 mx-md-0 text-center d-flex align-items-center"
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
            A design from{" "}
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
      </div> */}
    </div>
  </section>
);

export default Portfolio;
