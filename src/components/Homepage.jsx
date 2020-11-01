import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
  <div id="homepage" className="py-5 px-2">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h1 className="display-3 font-weight-bold text-tandem">
            Tandem Trivia
          </h1>
          <p>
            A quiz based application from Tandem Apprenticeship Code Challenge
          </p>
        </div>
      </div>
      <div className="row py-3">
        <div className="col-md-8 mx-auto">
          <h5 className="font-weight-bold">Instructions</h5>
          <ul>
            <li className="my-3">This game contains ten(10) questions</li>
            <li className="my-3">
              Each question has about three(3) to four(4) options to choose
              from, of which only one of these options is correct
            </li>
            <li className="my-3">
              You can choose only one of the options provided for each question
            </li>
            <li className="my-3">
              You get scored for each question immediately you chose your
              answer, and see correction where needed
            </li>
            <li className="my-3">
              After which you are moved to the next question automatically
            </li>
            <li className="my-3">
              You receive your total score at the end of the trivia
            </li>
            <li className="my-3">Goodluck and HaVe FuN!</li>
          </ul>
          <Link to="/trivia">
            <button className="btn btn-trivia px-3 py-2">Start Trivia</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
