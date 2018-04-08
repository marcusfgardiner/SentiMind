import React from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { BarChart } from 'react-easy-chart';
const OutputView = props => {
  return (
    <div>
      <SubHeader subHeaderText="So, the world thinks..." />
      <Sentiment sentiment={props.sentiment} />
      <BarChart
        axes
        height={350}
        width={650}
        data={[
          { x: 'Positive', y: 60, color: 'green' },
          { x: 'Negative', y: 30, color: 'red' },
          { x: 'Neutral', y: 10, color: 'yellow' }
        ]}
      />
      <Button
        buttonText="Choose another topic"
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};

export default OutputView;
