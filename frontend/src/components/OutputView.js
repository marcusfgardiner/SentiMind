import React from 'react';
import SubHeader from './SubHeader'
import Sentiment from './Sentiment'

const OutputView = () => {
  return (
    <div>
      <SubHeader subHeaderText='So, the world thinks...'/>
      <Sentiment />
    </div>
  )
};

export default OutputView
