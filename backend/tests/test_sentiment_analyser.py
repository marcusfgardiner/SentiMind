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
    tweet = Tweet("@dumb", "heyo", 967824267948773377)
    tweet.polarity = 1
    tweets = [tweet]
    sentiment_analyser = SentimentAnalyser()
    avg_polarity = sentiment_analyser.average_polarity(tweets)
    assert isinstance(avg_polarity, (int, float, complex))

def test_sentiment_counter():
  tweet = Tweet("@dumb", "heyo", 967824267948773377)
  tweet.sentiment = "positive"
  tweets = [tweet]
  sentiment_analyser = SentimentAnalyser()
  result = sentiment_analyser.sentiment_counter(tweets)
  assert result["positive"] == 1

def test_polarity_converter():
    sentiment_analyser = SentimentAnalyser()
    assert sentiment_analyser.polarity_converter(-0.5) == 25

def test_general_polarity_result():
    query = 'easter'
    sentiment_analyser = SentimentAnalyser()
    return_json = sentiment_analyser.general_polarity_result(query)
    assert return_json['polarity'] == 'positive' or 'negative' or 'neutral'
