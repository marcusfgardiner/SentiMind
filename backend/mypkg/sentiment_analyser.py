from .tweet_parser import TweetParser
from .twitter_req import *

class SentimentAnalyser:
    'Requests tweets, cleans them, assigns sentiment and averages them'

    # def __init__(self):
    #   self.cleaned_tweets = []

    def populate(self):
      cleaned_tweets = []
      tweet_parser = TweetParser()
      tweets = get_tweets()
      for tweet in tweets:
          cleaned_tweets.append(tweet_parser.parse_tweet(tweet))
      return cleaned_tweets    
