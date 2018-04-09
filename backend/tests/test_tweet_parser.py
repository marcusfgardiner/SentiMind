from .context import TweetParser
import json

with open('./helpers/tweet_dummy.json') as json_file:
    tweet_data = json.load(json_file)

tweet_parser = TweetParser()

def test_parse_tweet_text():
      dummy_tweet_text = "From pilot to astronaut Robert H Lawrence was the first African American to be selected as an astronaut by any na"
      assert tweet_parser.parse_tweet(tweet_data).text == dummy_tweet_text


def test_parse_tweet_user():
      dummy_tweet_user = "NASA"
      assert tweet_parser.parse_tweet(tweet_data).user == dummy_tweet_user

def test_clean_tweet():
    dummy_tweet_text = tweet_parser.parse_tweet(tweet_data)
    dummy_clean_tweet = "From pilot to astronaut Robert H Lawrence was the first African American to be selected as an astronaut by any na"
    assert tweet_parser.clean_tweet(dummy_tweet_text) == dummy_clean_tweet

def test_polarity_of_tweet():
    dummy_tweet = tweet_parser.parse_tweet(tweet_data)
    dummy_tweet_polarity = dummy_tweet.polarity
    assert dummy_tweet_polarity == 0.08333333333333333

def test_sentiment_of_tweet():
    dummy_tweet = tweet_parser.parse_tweet(tweet_data)
    dummy_tweet_sentiment = dummy_tweet.sentiment
    assert dummy_tweet_sentiment == "neutral"

def test_id_of_tweet():
    dummy_tweet = tweet_parser.parse_tweet(tweet_data)
    dummy_tweet_id = dummy_tweet.id
    assert dummy_tweet_id == 967824267948773377
