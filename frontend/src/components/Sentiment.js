import React from 'react';
import StyledSentiment from './styled_components/Sentiment';

const Sentiment = props => {
  return (
    <StyledSentiment>
      <p id="sentiment">{props.average_sentiment}</p>
    </StyledSentiment>
  );
};

export default Sentiment;
