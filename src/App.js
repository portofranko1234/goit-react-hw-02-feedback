import { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleIncrement = (event) => {
    this.setState((prevState) => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };
  totalFeedbackCounter() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total ? total : 0;
  }

  positiveFeedbackPercentageCounter() {
    const { good } = this.state;
    const percentage = Math.round((good / this.totalFeedbackCounter()) * 100);
    return percentage;
  }

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedbacks = this.totalFeedbackCounter();
    const positivePercentage = this.positiveFeedbackPercentageCounter();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        </Section>
        <Section title="Statistics">
          {
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              percentage={positivePercentage}
            />
          }
        </Section>
      </div>
    );
  }
}

export default App;
