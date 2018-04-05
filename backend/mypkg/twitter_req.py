import tweepy
from .credentials import *

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

def get_tweets():
    tweets = []
    for tweet in tweepy.Cursor(api.search,q='north korea').items(1):
        tweets.append(tweet)
    return tweets
