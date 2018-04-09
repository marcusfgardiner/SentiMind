import React from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { BarChart } from 'react-easy-chart';
const OutputView = props => {
  return (
    <div>
      <SubHeader subHeaderText="So, the world thinks..." />
      <Sentiment average_sentiment={props.average_sentiment} />
      <BarChart
        axes
        height={350}
        width={650}
        data={[
          {
            x: 'Positive',
            y: props.sentiments.positive,
            color: 'green'
          },
          {
            x: 'Neutral',
            y: props.sentiments.neutral,
            color: 'yellow'
          },
          {
            x: 'Negative',
            y: props.sentiments.negative,
            color: 'red'
          }
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
