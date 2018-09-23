import React from "react";
import "./Title.css";

const Title = ({currentScore, topScore, answerResults}) => (
<div className="jumbotron">
    <ul>
        <li id="currentScore">Current score:{currentScore}</li>
        <li id="topScore">| Top score:{topScore}</li>
        <li id="answerResults">| Your answer is:{answerResults}</li>
    </ul>
</div>
);

export default Title;
