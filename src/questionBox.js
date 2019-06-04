import React, { Component } from "react";

class questionBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      selected: null,
      results: false,
      index: 0,
<<<<<<< HEAD
      submitted: false
      
    };
   this.questions = props.questions
  }


  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.index !== nextState.index) {
      return true;
    } else {
      return false;
    }
  }

=======
      questions: props.questions
    };
   
  }

  // the app method for next question needs to be here - use a constructor to
  // organise data

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.index !== nextProps.index) {
  //     return true;
  //   } else if (this.state.results !== nextState.results) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

>>>>>>> 23eb5fe64ba1cc9236ffb20cb9a4bc7c81fc031b
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
<<<<<<< HEAD
          {this.shuffleChoices(question.choices).map((choice, index) => (
=======
          {question.choices.map((choice, index) => (
>>>>>>> 23eb5fe64ba1cc9236ffb20cb9a4bc7c81fc031b
            <li
              key={index}
              className="choice"
              onClick={() => this.addselected(choice.text)}
            >
              {choice.text}
            </li>
          ))}
        </ul>
<<<<<<< HEAD
        <button onClick={this.nextQuestion}>next</button>
        <button onClick={this.checkselected}> Select </button>
=======
        <button onClick={() => this.nextQuestion()}>next</button>
        <button onClick={() => this.checkselected()}> Select </button>
>>>>>>> 23eb5fe64ba1cc9236ffb20cb9a4bc7c81fc031b

        <h3> {question.correct} </h3>
      </div>
    );
  }
}
 
export default questionBox;