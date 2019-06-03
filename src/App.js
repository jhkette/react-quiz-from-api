import React, { Component } from "react";
import "./App.css";

import Header from "./header";
import QuestionBox from "./questionBox";
import { createQuizData as quizData } from "./api/api";

class App extends Component {
  state = {
    isLoading: true,
    questions: [],
    error: null,
    index: 0,
    score: 0
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      this.setState({ questions: await quizData(), isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }

  setScore() {
    this.setState({
      score: this.state.score++
    });
  }

  nextQuestion = () => {
    this.setState({ index: this.state.index + 1 });
  };

  render() {
    if (this.state.isLoading === false) {
      return (
        <div>
          <Header />
          <QuestionBox
            questions={this.state.questions[this.state.index]}
            loading={this.state.loading}
            score={this.state.score}
            next={this.nextQuestion}
            index={this.state.index}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;
