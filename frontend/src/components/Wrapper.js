import React, { Component } from 'react';
import Header from './Header';
import InputView from './InputView'

class Wrapper extends Component {
  constructor() {
    super();

    this.state = { query: undefined, buttonClicked: false };
  }

  handleQueryInput = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ buttonClicked: true });
  };

  render() {
    return (
      <div>
        <Header />
        <InputView handleQueryInput={this.handleQueryInput} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Wrapper;
