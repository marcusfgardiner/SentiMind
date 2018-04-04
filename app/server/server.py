# import sys
# import os
# sys.path.insert(0, os.path.abspath('..'))

import random
from flask import Flask, render_template
from textblob import TextBlob

# from mypkg import sentiment


app = Flask(__name__, static_folder='../static/dist', template_folder='../static')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')
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

# sentiment.polarity('Donald trump sucks')


# def hello():
#     return get_hello()
#
#
# def get_hello():
#     greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Ni Hao']
#     return random.choice(greeting_list)


if __name__ == '__main__':
    app.run()
