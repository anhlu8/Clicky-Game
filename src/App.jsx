import React, { Component } from "react";
import "./App.css";
import cards from "./cards.json";
import Card from "./components/Card";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
const uuidv4 = require("uuid/v4");

const newCards = function everydayImShuffling (cards){
  for (let i = cards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  };
  return cards;
};

class App extends Component {
  state = {
    cards,
    currentScore: 0,
    topScore: 0,
    answerResults: "",
    clicked: []
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
    
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({ currentScore: newScore });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore, answerResults: "Correct" });
    } else if (newScore === 12) {
      this.setState({ answerResults: "You Win" });
    } 
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      answerResults: "",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
      newCards(cards);
      this.setState({cards});
  };

  render() {
    return (
      <Wrapper>
        <Title
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          answerResults={this.state.answerResults}
        />

        {this.state.cards.map(card => (
          <Card
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={card.id}
            key={uuidv4()}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
