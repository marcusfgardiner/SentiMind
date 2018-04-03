from textblob import TextBlob

trump_text = "I'm Trump and I'm a terrible"


def polarity_score(text):
    string = TextBlob(text)
    return string.sentiment.polarity


score = float(polarity_score(trump_text))


def polarity_result(score):
    if score == 0:
        return "neutral"
    elif score <= 0:
        return "negative"
    elif score >= 0:
        return "positive"


print(polarity_score(trump_text))

print(polarity_result(score))
