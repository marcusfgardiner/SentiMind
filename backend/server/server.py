import random
from flask import Flask
from flask_cors import CORS, cross_origin

import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg.sentiment_analyser import SentimentAnalyser

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    sentiment_analyser = SentimentAnalyser()
    sentiment_analyser.general_polarity_result()

if __name__ == '__main__':
    app.run()
