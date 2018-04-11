import React, { Component } from 'react';
import SubHeader from './SubHeader';
import Sentiment from './Sentiment';
import Button from './Button';
import { VictoryBar, VictoryLabel, VictoryChart } from 'victory';
import WordCloud from 'react-d3-cloud';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { RingLoader } from 'react-spinners';

class OutputView extends Component {
  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  firstTweet = () => {
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
  };

  secondTweet = () => {
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
  };

  formatTopWords = (words = this.props.top_words) => {
    let words_arr = [];
    for (var key in words) {
      if (words.hasOwnProperty(key)) {
        if (words[key] > 1 && key.length > 2) {
          words_arr.push({ text: `${key}`, value: words[key] * 100 });
        }
      }
    }
    return words_arr;
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
      return (
        <div id="loader">
          <RingLoader color={'#123abc'} />
        </div>
      );
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
              <VictoryChart
                height={350}
                domainPadding={30}
                animate={{ duration: 600, easing: 'bounce' }}
                style={{ labels: { fill: 'black' } }}
              >
                <VictoryBar
                  data={data}
                  x="sentiment"
                  y="percentage"
                  labels={d => d.y}
                  labelComponent={<VictoryLabel dy={30} />}
                />
              </VictoryChart>
            </div>
            <div id="word-cloud">
              <WordCloud
                data={this.formatTopWords()}
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
