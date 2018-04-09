import tweepy
import json
from .credentials import *

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

def get_tweets(query):
    tweets = []
    max_tweets = 15
    for tweet in tweepy.Cursor(api.search,q=query + ' -RT', lang='en').items(max_tweets):
        tweets.append(tweet._json)
    return tweets
