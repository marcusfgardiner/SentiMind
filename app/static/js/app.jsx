import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import React from 'react';

export default class App extends React.Component {
  render () {
    return (
      <PageHeader>
        <div className='header-contents'>
          <Hello name='Jimmy' />
        </div>
      </PageHeader>
    );
  }
}
