import React, { Component } from "react";

class questionBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      selected: null,
      results: false,
      index: 0,
      
    };
   this.questions = props.questions
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state !== nextState) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  nextQuestion = () => {
    this.setState({ index: this.state.index + 1 });
  };

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
    if (this.state.selected === this.questions[this.state.index].correct) {
      console.log("correct");
      this.setState({ score: this.state.score++ });
      console.log(this.state.score);
    } else {
      console.log("incorrect");
    }
  };

  addselected = choice => {
   
    this.setState({ selected: choice });
    console.log(this.state.selected);
  };

  render() {
    
    const question = this.questions[this.state.index];
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
              key={index}
              className="choice"
              onClick={() => this.addselected(choice.text)}
            >
              {choice.text}
            </li>
          ))}
        </ul>
        <button onClick={() => this.nextQuestion()}>next</button>
        <button onClick={() => this.checkselected()}> Select </button>

        <h3> {question.correct} </h3>
      </div>
    );
  }
}
 
export default questionBox;