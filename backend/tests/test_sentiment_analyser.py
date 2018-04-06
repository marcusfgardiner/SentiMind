from .context import SentimentAnalyser
from .context import Tweet
import json
import pytest

with open('./helpers/tweet_dummy.json') as json_file:
    tweet_data = json.load(json_file)


def test_sentiment_analyser():
  sentiment_analyser = SentimentAnalyser()
  populate = sentiment_analyser.populate()
  assert isinstance(populate[0], Tweet)

def test_average_sentiment():
    sentiment_analyser = SentimentAnalyser()
    avg_sentiment = sentiment_analyser.average_sentiment()
    assert avg_sentiment == pytest.approx(-1.000000, 1.0000000)
    
