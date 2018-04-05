from .tweet import Tweet

class TweetParser:
    'Parses and cleans the JSON data response from the Twitter API'

    def parse_tweet(self, tweet_data):
        new_tweet = Tweet(tweet_data['user']['screen_name'], tweet_data['text'])
        return new_tweet
