import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div id="top-container">
        <Wrapper />
        <Footer />
      </div>
    );
  }
}

export default App;
