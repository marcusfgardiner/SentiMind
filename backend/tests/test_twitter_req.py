from .context import twitter_req

def test_get_tweets():
    assert isinstance(twitter_req.get_tweets(), list)

def test_get_tweets():
    assert isinstance(twitter_req.get_tweets()[0].text, str)
