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
          display="d-none d-md-block"
          link="https://covidstrain.vercel.app"
        >
          <PortImage img={require("../imgs/Covid.png")} />
        </PortImageContainer>
      </PortRow>
      {/* end of covid portfolio */}
      {/* easybank portfolio */}
      <PortRow className="d-none">
        <PortImageContainer
          aos={{
            name: "fade-right",
            duration: "1000",
            // delay: "200",
            easing: "ease-in-out",
          }}
          className="countryimg"
          link="https://easybank-landing-page-sooty.vercel.app/"
        >
          <PortImage img={require("../imgs/easybank.png")} />
        </PortImageContainer>
        <PortCard>
          <PortName
            name="Easybank Landing Page"
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
            link="https://easybank-landing-page-sooty.vercel.app/"
          />
          <PortText
            aos={{
              name: "fade-left",
              duration: "1000",
              delay: "200",
              easing: "linear",
            }}
          >
            Built with HTML, CSS and Bootstrap4. I converted the design from
            frontendmentors.io challenge into a functional client side landing
            page.
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
    </div>
  </section>
);

export default Portfolio;
