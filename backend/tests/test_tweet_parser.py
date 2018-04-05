from .context import TweetParser
import json

with open('./helpers/tweet_dummy.json') as json_file:
    tweet_data = json.load(json_file)

tweet_parser = TweetParser()

def test_parse_tweet_text():
      dummy_tweet_text = "From pilot to astronaut, Robert H. Lawrence was the first African-American to be selected as an astronaut by any na… https://t.co/FjPEWnh804"
      assert tweet_parser.parse_tweet(tweet_data).text == dummy_tweet_text
       

def test_parse_tweet_user():
      dummy_tweet_user = "NASA"
      assert tweet_parser.parse_tweet(tweet_data).user == dummy_tweet_user
