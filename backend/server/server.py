import random
import json
from flask import Flask
from flask import jsonify
from flask import Response
from flask import request
from flask_cors import CORS, cross_origin

import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg.sentiment_analyser import SentimentAnalyser

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def index():
    sentiment_analyser = SentimentAnalyser()
    params = 'ronaldo'
    result = sentiment_analyser.general_polarity_result(params)
    json_string = {"sentiment": "%(result)s" % locals()}
    return Response(json.dumps(json_string), mimetype='application/json')

@app.route('/sendjson', methods=['GET', 'POST'])
def postJsonHandler():
    content = request.get_json()
    print(content)
    return 'done'

if __name__ == '__main__':
    app.run()
