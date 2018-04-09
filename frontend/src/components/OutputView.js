import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { BarChart, PieChart } from 'react-easy-chart';
import { TwitterTweetEmbed } from 'react-twitter-embed';

class OutputView extends Component {
  tweets = () => {
    if (this.props.top_tweets === undefined) {
      return <h4>loading tweets...</h4>;
    } else {
      return (
        <div>
          <TwitterTweetEmbed
            id="positiveTweet"
            tweetId={this.props.top_tweets.positive}
          />
          <TwitterTweetEmbed
            id="negativeTweet"
            tweetId={this.props.top_tweets.negative}
          />
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <SubHeader subHeaderText="So, the world thinks..." />
        <Sentiment average_sentiment={this.props.average_sentiment} />
        {this.tweets()}
        <BarChart
          axes
          height={350}
          width={650}
          data={[
            {
              x: 'Positive',
              y: this.props.sentiments.positive,
              color: 'green'
            },
            {
              x: 'Neutral',
              y: this.props.sentiments.neutral,
              color: 'yellow'
            },
            {
              x: 'Negative',
              y: this.props.sentiments.negative,
              color: 'red'
            }
          ]}
        />
        <PieChart
          labels
          data={[
            { key: 'Positive', value: this.props.positivity_percentage },
            { key: 'Negative', value: 100 - this.props.positivity_percentage }
          ]}
        />
        <Button
          buttonText="Choose another topic"
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

export default OutputView;
