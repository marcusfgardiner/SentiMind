import sys
import os
sys.path.insert(0, os.path.abspath('..'))

from mypkg import sentiment


def test_answer():
    assert sentiment.polarity_score('I am terrible') == -1
