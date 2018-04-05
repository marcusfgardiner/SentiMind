import React from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';

const OutputView = props => {
  return (
    <div>
      <SubHeader subHeaderText="So, the world thinks..." />
      <Sentiment />
      <Button buttonText="Choose another topic" handleSubmit={props.handleSubmit} />
    </div>
  );
};

export default OutputView;
