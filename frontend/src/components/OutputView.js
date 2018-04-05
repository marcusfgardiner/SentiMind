import React from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';

const OutputView = () => {
  return (
    <div>
      <SubHeader subHeaderText="So, the world thinks..." />
      <Sentiment />
      <Button />
    </div>
  );
};

export default OutputView;
