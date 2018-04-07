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
      sentiment: undefined
    };
  }

  handleQueryInput = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = () => {
    let { buttonClicked } = this.state;
    fetch('http://54.83.153.126/')
      .then(response => {
        console.log(response.body);
        return response.body;
      })
      .then(body => {
        console.log(body.read());
      });
    this.setState({ buttonClicked: !buttonClicked, query: undefined });
    //get function twitter api needs to be called before clearing query this.state
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
      output: <OutputView handleSubmit={this.handleSubmit} />
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
