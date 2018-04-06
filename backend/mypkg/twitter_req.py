import tweepy
import json
from .credentials import *

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

def get_tweets():
    tweets = []
    for tweet in tweepy.Cursor(api.search,q='north korea').items(10):
        tweets.append(tweet._json)
    return tweets
