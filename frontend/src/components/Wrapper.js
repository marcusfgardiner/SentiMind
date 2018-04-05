import React, { Component } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import InputBox from './InputBox';
import Button from './Button';

class Wrapper extends Component {
  constructor() {
    super();

    this.state = { query: undefined, buttonClicked: false };
  }

  handleQueryInput = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmitClick() {
    this.setState({ buttonClicked: true });
  }

  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <InputBox handleQueryInput={this.handleQueryInput} />
        <Button />
      </div>
    );
  }
}

export default Wrapper;
