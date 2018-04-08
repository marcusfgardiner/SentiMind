import random
import json
from flask import Flask
from flask import jsonify
from flask import Response
from flask import request
from flask import session

from flask_cors import CORS, cross_origin

import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg.sentiment_analyser import SentimentAnalyser

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    content = request.get_json()
    query = json.dumps(content)
    sentiment_analyser = SentimentAnalyser()
    result = sentiment_analyser.general_polarity_result("sad")
    return Response(json.dumps(result), mimetype='application/json')

if __name__ == '__main__':
    app.run()
