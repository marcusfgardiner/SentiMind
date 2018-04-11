from .tweet_parser import TweetParser
from .twitter_req import *
from .polarity import *
import nltk
from nltk.corpus import stopwords
from collections import Counter
import json

class SentimentAnalyser:
    'Requests tweets, cleans them, assigns polarity and averages them'

    def populate(self, query):
      cleaned_tweets = []
      tweet_parser = TweetParser()
      tweets = get_tweets(query)
      for tweet in tweets:
          cleaned_tweets.append(tweet_parser.parse_tweet(tweet))
      return cleaned_tweets

    def average_polarity(self, tweets):
      avg_polarity = 0
      for tweet in tweets:
          avg_polarity += round(tweet.polarity, 2)
      return round(avg_polarity/len(tweets), 2)

    def general_polarity_result(self, query):
        tweets = self.populate(query)
        average = self.average_polarity(tweets)
        top_tweets = self.top_tweets(tweets)
        top_words = self.top_words(tweets)
        sentiments = self.sentiment_counter(tweets)
        result = polarity_result(average)
        positivity_percentage = self.polarity_converter(average)
        json_string = {"sentiments": sentiments,
                       "top_tweets": top_tweets,
                       "top_words": top_words,
                       "polarity": "%(result)s" % locals(),
                       "positivity_percentage": "%(positivity_percentage)s" % locals()
                       }
        return json_string

    def top_tweets(self, tweets):
      positive_tweet = None
      negative_tweet = None
      for tweet in tweets:
        if positive_tweet == None or tweet.polarity > positive_tweet.polarity:
          positive_tweet = tweet
        elif negative_tweet == None or tweet.polarity < negative_tweet.polarity:
          negative_tweet = tweet
      top_tweets = {"positive": str(positive_tweet.id), "negative": str(negative_tweet.id)}
      return top_tweets

    def top_words(self, tweets):
      combined_words = ""
      for tweet in tweets:
        combined_words = combined_words + ' ' + tweet.text
      filtered_array = self.filter_stop_words(combined_words)
      return Counter(filtered_array)

    def filter_stop_words(self, combined_words):
      stop_words = set(stopwords.words('english'))
      unfiltered_words_array = combined_words.lower().split(' ')
      filtered_sentence = [word for word in unfiltered_words_array if not word in stop_words]
      return filtered_sentence

    def sentiment_counter(self, tweets):
      result = { "positive": 0, "neutral": 0, "negative": 0}
      for tweet in tweets:
        if tweet.sentiment == "positive":
          result["positive"] += 1
        elif tweet.sentiment == "neutral":
          result["neutral"] += 1
        else:
          result["negative"] += 1
      return result

    def polarity_converter(self, polarity):
      return (polarity + 1) * 50
