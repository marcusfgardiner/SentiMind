from .tweet import Tweet
from .polarity import *
import re

class TweetParser:
    'Parses and cleans the JSON data response from the Twitter API'

    def parse_tweet(self, tweet_data):
        new_tweet = Tweet(tweet_data['user']['screen_name'], tweet_data['text'], tweet_data['id'])
        new_tweet.text = self.clean_tweet(new_tweet)
        new_tweet.polarity = polarity_score(new_tweet.text)
        new_tweet.sentiment = polarity_result(new_tweet.polarity)
        return new_tweet

    def clean_tweet(self, tweet):
        tweet.text = self.regex_cleaner(tweet.text)
        return tweet.text

    def regex_cleaner(self, tweet_text):
      tweet_text = re.sub("(f\*ck)", "fuck", tweet_text)
      tweet_text = re.sub("(sh\*t)", "shit", tweet_text)
      tweet_text = ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet_text).split())
      return tweet_text
