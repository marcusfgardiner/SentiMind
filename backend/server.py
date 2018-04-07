import random
from flask import Flask
from flask_cors import CORS, cross_origin

import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg import twitter_req

app = Flask(__name__)
CORS(app)

@app.route('/backend')
def hello():
    return 'Hello World'

@app.route('/hello')
def hello2():
    return twitter_req.get_tweets()

if __name__ == '__main__':
    app.run(host="0.0.0.0")
