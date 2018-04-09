from .context import Tweet

def test_tweet_initialize_user():
    tweet = Tweet("@user", "Life is caffeine")
    assert tweet.user == "@user"

def test_tweet_initialize_text():
    tweet = Tweet("@user", "Life is caffeine")
    assert tweet.text == "Life is caffeine"

def test_tweet_initialize_sentiment():
    tweet = Tweet("@user", "Life is caffeine")
    assert tweet.sentiment == None
