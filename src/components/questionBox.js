import React, { Component } from "react";
import Header from "./header";

class questionBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      selected: null,
      results: false,
      index: 0,
      submitted: false,
      correct: null
    };
    this.questions = props.questions;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.index !== nextState.index) {
      return true;
    } else if (this.state.submitted !== nextState.index) {
      return true;
    } else {
      return false;
    }
  }

  nextQuestion = () => {
    if((this.state.index < 9) &&(this.state.submitted == true)){
    this.setState({ index: this.state.index + 1, submitted: false });
    }
  };

  checkselected = choice => {
    this.setState({ submitted: true });
    if (this.state.selected === this.questions[this.state.index].correct) {
      console.log("correct");
      const scoreToAdd = this.state.score;
      this.setState({ score: scoreToAdd + 1, correct: "correct" });
      console.log(this.state.score);
    } else {
      this.setState({ correct: "incorrect" });
      console.log("incorrect");
    }
  };

  addselected = choice => {
    this.setState({ selected: choice });
    console.log(this.state.selected);
  };

  render() {
    const question = this.questions[this.state.index];
    
      if (this.state.index !== 9){
        return (
      <div className="questions">
        <Header index={this.state.index} score={this.state.score} />
        <h3>
          <center>{question.text}</center>
        </h3>
        <h3>
          <center>{question.category}</center>
        </h3>
        <h3>
          <center>{question.difficulty}</center>
        </h3>
        <ul>
          {question.choices.map((choice, index) => (
            <li
              key={index}
              className="choice"
              onClick={() => this.addselected(choice.text)}
            >
              {choice.text}
            </li>
          ))}
        </ul>
        <button onClick={this.nextQuestion}>next</button>
        <button onClick={this.checkselected}> Select </button>
        {this.state.submitted && (
          <h3>
            {" "}
            {question.correct} {this.state.correct}{" "}
          </h3>
        )}
      </div>
    );
        }
        else{
          return (
            <h1>Quiz completed</h1>
          )
        }
  }
}

export default questionBox;
