from textblob import TextBlob

trump_text = "I'm Trump and I'm a terrible"


def polarity_score(text):
  string = TextBlob(text)
  return string.sentiment.polarity

score = float(polarity_score(trump_text))

def polarity_result()
  if polarity_score == 0:
    return "neutral"
  elif polarity_score < 0:
    return "negative"  
  elif polarity_score > 0:
    return "positive"  


print(polarity_score(eggplant))