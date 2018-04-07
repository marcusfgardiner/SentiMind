import random
import json
from flask import Flask
from flask import jsonify
from flask import Response
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
    result = sentiment_analyser.general_polarity_result()
    json_string = {"sentiment": "%(result)s" % locals()}
    return Response(json.dumps(json_string), mimetype='application/json')

if __name__ == '__main__':
    app.run()
