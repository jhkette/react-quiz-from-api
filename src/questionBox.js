import React, { Component } from "react";

class questionBox extends Component {
  state = {
    score: 0,
    selected: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.index === nextProps.index) {
      return false;
    } else {
      return true;
    }
  }

  shuffleChoices = choices => {
    for (let index = choices.length - 1; index > 0; index--) {
      let index_2 = Math.floor(Math.random() * (index + 1));
      let temp = choices[index];
      choices[index] = choices[index_2];
      choices[index_2] = temp;
    }
    return choices;
  };

  checkselected = choice => {
    if (this.state.selected == this.props.questions.correct) {
      console.log("correct");
      this.setState({ score: this.state.score++ });
      console.log(this.state.score);
    } else {
      console.log("incorrect");
    }
  };

  addselected = choice => {
    console.log(choice);
    this.setState({ selected: choice });
    console.log(this.state.selected);
  };

  render() {
    const question = this.props.questions;
    return (
      <div className="questions">
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
          {this.shuffleChoices(question.choices).map((choice, index) => (
            <li
              className="choice"
              onClick={() => this.addselected(choice.text)}
            >
              {choice.text}
            </li>
          ))}
        </ul>
        <button onClick={this.props.next}>next</button>
        <button onClick={() => this.checkselected()}>Select</button>
      </div>
    );
  }
}
export default questionBox;
