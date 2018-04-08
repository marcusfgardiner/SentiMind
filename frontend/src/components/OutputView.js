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
      <BarChart positivity_percentage={props.positivity_percentage}
        axes
        height={350}
        width={650}
        data={[
          { x: 'Positive', y: props.positivity_percentage, color: 'green' },
          { x: 'Negative', y: 100 - props.positivity_percentage, color: 'red' },
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
