from textblob import TextBlob


def polarity(text):
    score = polarity_score(text)
    return polarity_result(score)


def polarity_score(text):
    string = TextBlob(text)
    return string.sentiment.polarity


def polarity_result(score):
    if score == 0:
        return "neutral"
    elif score <= 0:
        return "negative"
    elif score >= 0:
        return "positive"
