import React from "react";

export const PortRow = (props) => (
  <div className="row py-5 align-items-center">{props.children}</div>
);
export const PortCard = (props) => (
  <div className="col-md-5 col-lg-4 mx-auto rounded">{props.children}</div>
);
export const PortName = (props) => (
  <h1
    className="font-weight-bold portfolio-name py-2 headline"
    data-aos={props.aos.name}
    data-aos-duration={props.aos.duration}
    data-aos-delay={props.aos.delay}
    data-aos-easing={props.aos.easing}
  >
    {props.name}{" "}
    <span>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <i className="fas fa-external-link-alt ml-3"></i>
      </a>
    </span>
  </h1>
);

export const PortText = (props) => (
  <p
    className="my-3 p"
    data-aos={props.aos.name}
    data-aos-duration={props.aos.duration}
    data-aos-delay={props.aos.delay}
    data-aos-easing={props.aos.easing}
  >
    {props.children}
  </p>
);
export const PortTag = (props) => (
  <span
    className="px-3 py-1 rounded m-2 bg-card"
    data-aos={props.aos.name}
    data-aos-duration={props.aos.duration}
    data-aos-delay={props.aos.delay}
    data-aos-easing={props.aos.easing}
  >
    {props.name}
  </span>
);
export const PortTagContainer = (props) => (
  <div className="row justify-content-end">{props.children}</div>
);
export const PortImageContainer = (props) => (
  <a
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`col-md-7 ${props.display}`}
    data-aos={props.aos.name}
    data-aos-duration={props.aos.duration}
    data-aos-delay={props.aos.delay}
    data-aos-easing={props.aos.easing}
  >
    <div
      className={`row portimg ${props.className} mx-3 mx-md-0 text-center align-items-center`}
    >
      {props.children}
    </div>
  </a>
);
export const PortImage = (props) => (
  <img src={props.img} alt="" className="img-fluid" />
);
