import random
from flask import Flask, render_template

import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg import twitter_req

app = Flask(__name__, static_folder='../static/dist', template_folder='../static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/hello')

def hello():
    return twitter_req.get_tweets()

# def get_hello():
#     greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Ni Hao']
#     return random.choice(greeting_list)

# @app.route('/twitter-req')
#
# def hello():
#     return get_tweets()

if __name__ == '__main__':
    app.run()
