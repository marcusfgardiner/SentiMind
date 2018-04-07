from .context import twitter_req

def test_get_tweets_returns_array():
    query = 'easter'
    assert isinstance(twitter_req.get_tweets(query), list)

def test_get_tweets_elements_have_text():
    query = 'easter'
    assert isinstance(twitter_req.get_tweets(query)[0]['text'], str)
