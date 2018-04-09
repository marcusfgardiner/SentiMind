import React from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { BarChart, PieChart } from 'react-easy-chart';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const OutputView = props => {
  return (
    <div>
      <SubHeader subHeaderText="So, the world thinks..." />
      <Sentiment average_sentiment={props.average_sentiment} />
      <TwitterTweetEmbed tweetId={'983343562736717825'} />
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
      <PieChart
        labels
        data={[
          { key: 'Positive', value: props.positivity_percentage },
          { key: 'Negative', value: 100 - props.positivity_percentage }
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
