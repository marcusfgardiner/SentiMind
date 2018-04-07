import tweepy
import json
from .credentials import *

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

def get_tweets():
    tweets = []
    query = 'north korea'
    max_tweets = 10
    for tweet in tweepy.Cursor(api.search,q=query, lang='en').items(max_tweets):
        tweets.append(tweet._json)
    return tweets
