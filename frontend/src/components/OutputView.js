import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { BarChart, PieChart } from 'react-easy-chart';
import { TwitterTweetEmbed } from 'react-twitter-embed';

class OutputView extends Component {
  firstTweet = () => {
    if (this.props.top_tweets === undefined) {
      return <h4>loading tweets...</h4>;
    } else {
      return (
        <div className="item item-1">
          <SubHeader
            id="positiveTweet-subheader"
            subHeaderText="Most Positive Tweet"
          />
          <TwitterTweetEmbed
            id="positiveTweet"
            tweetId={this.props.top_tweets.positive}
          />
        </div>
      );
    }
  };

  secondTweet = () => {
    if (this.props.top_tweets === undefined) {
      return <h4>loading tweets...</h4>;
    } else {
      return (
        <div className="item item-3">
          <SubHeader
            id="negativeTweet-subheader"
            subHeaderText="Most Negative Tweet"
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
      <div className="container">
        {this.firstTweet()}
        <div className="item item-2">
          <SubHeader
            id="main-subheader"
            subHeaderText="So, the world thinks..."
          />
          <Sentiment average_sentiment={this.props.average_sentiment} />
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
        {this.secondTweet()}
      </div>
    );
  }
}

export default OutputView;
