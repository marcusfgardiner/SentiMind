from mypkg import sentiment


def test_answer():
    assert polarity_score('I am terrible') == -1
