def polarity_result(score):
    if score >= -0.10 and score <= 0.10:
        return "neutral"
    elif score <= 0:
        return "negative"
    elif score >= 0:
        return "positive"
