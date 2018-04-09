import React from 'react';

const Sentiment = props => {
  return <h2 id="sentiment">{props.average_sentiment}</h2>;
};

export default Sentiment;
