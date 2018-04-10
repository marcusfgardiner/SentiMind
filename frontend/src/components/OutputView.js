import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { TwitterTweetEmbed } from 'react-twitter-embed';

class OutputView extends Component {
  // <PieChart
  //   labels
  //   data={[
  //     { key: 'Positive', value: this.props.positivity_percentage },
  //     { key: 'Negative', value: 100 - this.props.positivity_percentage }
  //   ]}
  // />

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  firstTweet = () => {
    if (this.props.top_tweets === undefined) {
      return <h4>loading tweets...</h4>;
    } else {
      return (
        <div>
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
        <div>
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
    const data = [
      {
        sentiment: 'Positive',
        percentage: this.props.sentiments.positive,
        fill: '#70D4B4'
      },
      {
        sentiment: 'Neutral',
        percentage: this.props.sentiments.neutral,
        fill: '#FFFCEF'
      },
      {
        sentiment: 'Negative',
        percentage: this.props.sentiments.negative,
        fill: '#FF7F5B'
      }
    ];
    if (this.props.top_tweets === undefined) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="container">
        {this.firstTweet()}
        <div>
          <SubHeader
            id="main-subheader"
            subHeaderText="So, the world thinks..."
          />
          <Sentiment average_sentiment={this.props.average_sentiment} />
          <div id="bar-chart">
            <VictoryChart
              domainPadding={20}
              width={350}
              height={250}
              animate={{ duration: 600, easing: 'bounce' }}
            >
              <VictoryAxis
                style={{
                  axis: { stroke: '#E0F2F1' },
                  axisLabel: { fontSize: 16, fill: '#E0F2F1' },
                  ticks: { stroke: '#ccc' },
                  tickLabels: {
                    fontSize: 14,
                    fill: '#E0F2F1',
                    fontWeight: 'bold'
                  },
                  grid: { stroke: '#B3E5FC', strokeWidth: 0.25 }
                }}
                dependentAxis
              />
              <VictoryAxis
                style={{
                  axis: { stroke: '#E0F2F1' },
                  axisLabel: { fontSize: 16 },
                  ticks: { stroke: '#ccc' },
                  tickLabels: {
                    fontSize: 10,
                    fill: '#E0F2F1',
                    fontWeight: 'bold'
                  }
                }}
              />
              <VictoryBar data={data} x="sentiment" y="percentage" />
            </VictoryChart>
          </div>

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
