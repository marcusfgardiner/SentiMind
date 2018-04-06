from .context import SentimentAnalyser
from .context import Tweet

def test_sentiment_analyser():
  sentiment_analyser = SentimentAnalyser()
  populate = sentiment_analyser.populate()
  assert isinstance(populate[0], Tweet)
