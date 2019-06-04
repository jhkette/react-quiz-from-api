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

<<<<<<< HEAD
=======
    score: 0,
    submitted: false
>>>>>>> 23eb5fe64ba1cc9236ffb20cb9a4bc7c81fc031b
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

  render() {
    if (this.state.isLoading === false) {
      return (
        <div>
          <Header />
          <QuestionBox
            questions={this.state.questions}
<<<<<<< HEAD
=======
            loading={this.state.loading}
            score={this.state.score}
            next={this.nextQuestion}
            index={this.state.index}
            submitted={this.state.submitted}
>>>>>>> 23eb5fe64ba1cc9236ffb20cb9a4bc7c81fc031b
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default App;