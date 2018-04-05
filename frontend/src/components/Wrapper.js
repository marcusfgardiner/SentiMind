import React, { Component} from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import Hello from './Hello'
import InputBox from './InputBox'

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
        <InputBox />
      </div>
    );
  }
}

export default Wrapper;
