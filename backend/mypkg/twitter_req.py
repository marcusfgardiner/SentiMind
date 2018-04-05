import tweepy
from .credentials import *

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

def get_tweets():
    for tweet in tweepy.Cursor(api.search,q='north korea').items(2):
        return tweet.text

# def get_tweets():
#     return tweepy.Cursor(api.search, q='north korea').items(2)

# def parse_tweets():
#     array = []
#     for tweet in get_tweets():
#         array.append(tweet.text)
#     return array
