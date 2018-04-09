from .tweet_parser import TweetParser
from .twitter_req import *
from .polarity import *
import json

class SentimentAnalyser:
    'Requests tweets, cleans them, assigns sentiment and averages them'

    def populate(self, query):
      cleaned_tweets = []
      tweet_parser = TweetParser()
      tweets = get_tweets(query)
      for tweet in tweets:
          cleaned_tweets.append(tweet_parser.parse_tweet(tweet))
      print(cleaned_tweets[0].text)
      print(cleaned_tweets[0].sentiment)
      return cleaned_tweets

    def average_sentiment(self, query):
      avg_sentiment = 0
      tweets = self.populate(query)
      for tweet in tweets:
          avg_sentiment += round(tweet.sentiment, 2)
      return round(avg_sentiment/len(tweets), 2)

    def general_polarity_result(self, query):
        average = self.average_sentiment(query)
        result = polarity_result(average)
        positivity_percentage = self.polarity_converter(average)
        json_string = {"sentiment": "%(result)s" % locals(), "positivity_percentage": "%(positivity_percentage)s" % locals()}
        return json_string

    def polarity_converter(self, polarity):
      return (polarity + 1) * 50
