import React, { Component } from 'react';
import Header from './Header';
import InputView from './InputView';
import OutputView from './OutputView';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = {
      query: undefined,
      buttonClicked: false,
      sentiment: undefined,
      positivity_percentage: 0
    };
  }

  handleQueryInput = event => {
    this.setState({ query: event.target.value });
  };

  fetchSentiment = async () => {
    let { query } = this.state;
    const request = await fetch('http://localhost:5000/', {
      method: 'POST',
      body: JSON.stringify(query),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
    const json = await request.json();
    this.setState({
      sentiment: json.polarity,
      positivity_percentage: json.positivity_percentage
    });
  };

  handleSubmit = () => {
    let { buttonClicked } = this.state;
    if (!buttonClicked) {
      this.fetchSentiment();
    }
    this.setState({
      buttonClicked: !buttonClicked,
      query: undefined,
      sentiment: undefined,
      positivity_percentage: 0
    });
  };

  conditionalRendering = () => {
    if (this.state.buttonClicked) {
      return 'output';
    } else {
      return 'input';
    }
  };

  render() {
    const VIEWS = {
      input: (
        <InputView
          handleQueryInput={this.handleQueryInput}
          handleSubmit={this.handleSubmit}
        />
      ),
      output: (
        <OutputView
          handleSubmit={this.handleSubmit}
          sentiment={this.state.sentiment}
          positivity_percentage={this.state.positivity_percentage}
        />
      )
    };
    return (
      <div>
        <Header />
        {VIEWS[this.conditionalRendering()]}
      </div>
    );
  }
}

export default Wrapper;
