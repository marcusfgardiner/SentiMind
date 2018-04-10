import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { VictoryBar, VictoryLabel, VictoryGroup } from 'victory';
import WordCloud from 'react-d3-cloud';
import { TwitterTweetEmbed } from 'react-twitter-embed';

class OutputView extends Component {
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
            className="twitter-tweet tw-align-center"
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
            className="twitter-tweet tw-align-center"
            id="negativeTweet"
            tweetId={this.props.top_tweets.negative}
          />
        </div>
      );
    }
  };
  render() {
    const fontSizeMapper = word => Math.log2(word.value) * 5;
    const rotate = word => word.value % 360;
    const data = [
      {
        sentiment: 'Positive',
        percentage: this.props.sentiments.positive,
        fill: '#70D4B4'
      },
      {
        sentiment: 'Neutral',
        percentage: this.props.sentiments.neutral,
        fill: '#bfb7b7'
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
      <div>
        <div className="container">
          <div className="top-card">
            <SubHeader
              id="main-subheader"
              subHeaderText="So, the world thinks..."
            />
            <Sentiment average_sentiment={this.props.average_sentiment} />
          </div>
          <div className="chart-container">
            <div id="bar-chart">
              <VictoryBar
                height={350}
                domainPadding={20}
                animate={{ duration: 600, easing: 'bounce' }}
                labels={d => d.y}
                labelComponent={<VictoryLabel dy={30} />}
                style={{ labels: { fill: 'black' } }}
                data={data}
                x="sentiment"
                y="percentage"
              />
            </div>
            <div id="word-cloud">
              <WordCloud
                data={[
                  { text: 'Hey', value: 1000 },
                  { text: 'lol', value: 200 },
                  { text: 'first impression', value: 800 },
                  { text: 'very cool', value: 1000000 },
                  { text: 'duck', value: 10 }
                ]}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
              />
            </div>
          </div>
          <div className="tweets-container">
            <div id="first-tweet ">{this.firstTweet()}</div>
            <div id="second-tweet ">{this.secondTweet()}</div>
          </div>

          <Button
            buttonText="Choose another topic"
            handleSubmit={this.props.handleSubmit}
          />
        </div>
        <br />
      </div>
    );
  }
}

export default OutputView;
