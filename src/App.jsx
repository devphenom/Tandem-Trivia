import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./components/Homepage";
import Main from "./components/Main";
import {
  getRandom,
  questions,
  setTimer,
  clearTimer,
} from "./components/Functions";
import "./App.css";

const App = () => {
  const [trivia, setTrivia] = useState([]);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [correct, setCorrect] = useState("");
  const [right, setRight] = useState("");
  const [wrong, setWrong] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // generates trivia questions and update trivia state
  const generateQuestions = () => {
    const generate10 = getRandom(questions, 10);
    setTrivia(generate10);
  };

  // calls generateQuestions on first render
  useEffect(() => {
    generateQuestions();
  }, []);

  // handles score on ontion click
  const handleScore = (e) => {
    clearTimer();
    let optionClicked = e.target.innerText;
    let correctOption;

    const options = document.getElementsByTagName("LI");
    for (let i = 0; i < options.length; i++) {
      if (options[i].innerText === trivia[count].correct) {
        correctOption = options[i].innerText;
      }
    }

    // works on styling by updating each state
    if (optionClicked === correctOption) {
      setScore(score + 1);
      setRight(optionClicked);
      setDisabled(true);
    } else {
      setCorrect(correctOption);
      setWrong(optionClicked);
      setDisabled(true);
    }
    setTimer(handleNextBtn);
  };

  // handleNext which gets called by setTimeOut
  const handleNextBtn = () => {
    if (count <= 8) {
      setCount(count + 1);
    } else {
      setGameOver(true);
    }
    setDisabled(false);
  };

  // resets Trivia Questions
  const resetTrivia = () => {
    setGameOver(false);
    setCount(0);
    setScore(0);
    setDisabled(false);
    generateQuestions();
  };

  return (
    <Router>
      <div className="app">
        {console.log(trivia)}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/trivia"
            render={(props) => (
              <Main
                handleScore={handleScore}
                trivia={trivia}
                resetTrivia={resetTrivia}
                gameOver={gameOver}
                disabled={disabled}
                correct={correct}
                wrong={wrong}
                count={count}
                score={score}
                right={right}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
