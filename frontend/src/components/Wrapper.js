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
      average_sentiment: undefined,
      sentiments: { positive: 0, neutral: 0, negative: 0 },
      top_tweets: undefined,
      top_words: undefined
    };
  }

  handleQueryInput = event => {
    this.setState({ query: event.target.value });
  };

  createUrl = () => {
    if (window.location.href === 'http://localhost:3000/') {
      return 'http://localhost';
    }
    return window.location.href;
  };

  createState = json => {
    this.setState({
      average_sentiment: json.polarity,
      sentiments: json.sentiments,
      top_tweets: json.top_tweets,
      top_words: json.top_words
    });
  };

  fetchSentiment = async () => {
    let { query } = this.state;
    try {
      const request = await fetch(`${this.createUrl()}:5000/`, {
        method: 'POST',
        body: JSON.stringify(query),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      const json = await request.json();
      this.createState(json);
    } catch (err) {}
  };

  resetState = () => {
    let { buttonClicked } = this.state;
    this.setState({
      buttonClicked: !buttonClicked,
      query: undefined,
      average_sentiment: undefined,
      sentiments: { positive: 0, neutral: 0, negative: 0 },
      top_tweets: undefined,
      top_words: undefined
    });
  };

  handleSubmit = () => {
    let { buttonClicked } = this.state;
    if (!buttonClicked) {
      this.fetchSentiment();
      this.setState({ buttonClicked: !buttonClicked });
    } else {
      this.resetState();
    }
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
          id="body"
          handleQueryInput={this.handleQueryInput}
          handleSubmit={this.handleSubmit}
        />
      ),
      output: (
        <OutputView
          id="body"
          query={this.state.query}
          handleSubmit={this.handleSubmit}
          average_sentiment={this.state.average_sentiment}
          sentiments={this.state.sentiments}
          top_tweets={this.state.top_tweets}
          top_words={this.state.top_words}
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
