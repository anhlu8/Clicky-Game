import React from "react";
import "./Title.css";

const Title = ({ currentScore, topScore, answerResults }) => (
  <div className="jumbotron">
    <h1>Clicky Game!</h1>
    <h6>
      Click on an image to earn points, but don't click on any more than once!
    </h6>
    <hr />

    <ul>
      <li>
        Current score:
        <span>{currentScore}</span>
      </li>
      <li>
        <span>|</span> Top score:
        <span>{topScore}</span>
      </li>
    </ul>
    <p>
      Your answer is:
      <span>{answerResults}</span>
    </p>
  </div>
);

export default Title;
