import React, { Component} from 'react';
import Header from './Header';
import SubHeader from './SubHeader';

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        <SubHeader />
      </div>
    );
  }
}

export default Wrapper;
