import React from "react";
import { Link, withRouter } from "react-router-dom";

const Main = ({
  handleScore,
  trivia,
  resetTrivia,
  gameOver,
  disabled,
  correct,
  wrong,
  right,
  count,
  score,
}) => {
  const className = `${
    disabled ? "disabled" : ""
  } list-group-item m-2 pointer options rounded`;

  return (
    <div id="main" className="py-md-3 px-3 py-md-5">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6">
            <h2 className="text-tandem">Tandem Trivia</h2>
            <div className="underline"></div>
          </div>
          <div className="col-6 text-right d-none d-md-block">
            <h6 className="text-tandem">
              Question{" "}
              <span className="question-bg p-1 rounded">{count + 1}</span> of 10
            </h6>
          </div>
        </div>
        <div className={`row py-3 ${gameOver ? "d-none" : null}`}>
          <div className="col-md-8 mx-auto">
            <h3 className="text-tandem">
              {trivia.length && trivia[count].question}
            </h3>
            <ul className="list-group">
              {trivia.length &&
                trivia[count].incorrect.map((each) => (
                  <li
                    className={` ${className} ${
                      correct === each
                        ? "outline"
                        : wrong === each
                        ? "bg-danger  text-white"
                        : right === each
                        ? "bg-success  text-white"
                        : null
                    }`}
                    key={each}
                    onClick={handleScore}
                  >
                    {each}
                  </li>
                ))}
            </ul>
            <div className="col d-md-none pt-3">
              <h6>
                Question{" "}
                <span className="question-bg px-2 py-1 rounded">
                  {count + 1}
                </span>{" "}
                of 10
              </h6>
            </div>
          </div>
        </div>
        <div className={`row text-trivia ${gameOver ? "d-block" : "d-none"}`}>
          <div className="col-md-8 mx-auto text-center font-weight-bold">
            <h2>{`${score === 10 ? "HUrray!!!" : "Welldone!!!"} `}</h2>
            <h4>
              You've come to the end of this Trivia section.{" "}
              {`You score ${score} out of 10`}
            </h4>
            <h4>{`${
              score < 10
                ? "You did well, but you can do better. Give it another try?"
                : "You have an outstanding performance. KuDoS!"
            }`}</h4>
            <button className="btn btn-trivia m-2" onClick={resetTrivia}>
              Retake Trivia
            </button>
            <Link to="/">
              <button className="btn btn-outline-trivia m-2">
                Back to Homepage
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Main);
