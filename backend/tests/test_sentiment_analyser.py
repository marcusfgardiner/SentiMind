from .context import SentimentAnalyser
from .context import Tweet
import json
import pytest

with open('./helpers/tweet_dummy.json') as json_file:
    tweet_data = json.load(json_file)


def test_sentiment_analyser():
  sentiment_analyser = SentimentAnalyser()
  query = 'easter'
  populate = sentiment_analyser.populate(query)
  assert isinstance(populate[0], Tweet)

def test_average_sentiment():
    query = 'easter'
    sentiment_analyser = SentimentAnalyser()
    avg_sentiment = sentiment_analyser.average_sentiment(query)
    assert isinstance(avg_sentiment, (int, float, complex))


def test_general_polarity_result():
    query = 'easter'
    sentiment_analyser = SentimentAnalyser()
    assert sentiment_analyser.general_polarity_result(query) == 'positive' or 'negative' or 'neutral'
