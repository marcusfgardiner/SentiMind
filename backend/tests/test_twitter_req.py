from .context import twitter_req

def test_get_tweets_returns_an_object():
    assert isinstance(twitter_req.get_tweets(), object)

def test_get_tweets_has_a_text_method():
    assert isinstance(twitter_req.get_tweets().text, str)
