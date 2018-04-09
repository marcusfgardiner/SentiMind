from .context import Tweet

def test_tweet_initialize_user():
    tweet = Tweet("@user", "Life is caffeine", 967824267948773377)
    assert tweet.user == "@user"

def test_tweet_initialize_text():
    tweet = Tweet("@user", "Life is caffeine", 967824267948773377)
    assert tweet.text == "Life is caffeine"

def test_tweet_initialize_id():
  tweet = Tweet("@user", "Life is caffeine", 967824267948773377)
  assert tweet.id == 967824267948773377

def test_tweet_initialize_polarity():
    tweet = Tweet("@user", "Life is caffeine", 967824267948773377)
    assert tweet.polarity == None

def test_tweet_initialize_sentiment():
    tweet = Tweet("@user", "Life is caffeine", 967824267948773377)
    assert tweet.sentiment == None
