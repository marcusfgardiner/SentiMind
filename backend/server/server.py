import random
from flask import Flask
from flask_cors import CORS, cross_origin

import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg import twitter_req

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello')

def hello():
    return twitter_req.get_tweets()

if __name__ == '__main__':
    app.run()
