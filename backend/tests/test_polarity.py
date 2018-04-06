from .context import polarity

def test_pos_polarity_score():
    assert polarity.polarity_score('I am awesome') >= 0.3


def test_neg_polarity_score():
    assert polarity.polarity_score('I am terrible') <= -0.3


def test_neutral_polarity_score():
    assert polarity.polarity_score('I am a carrot') == 0


def test_pos_polarity_result():
    assert polarity.polarity_result(0.8) == 'positive'


def test_neg_polarity_result():
    assert polarity.polarity_result(-0.8) == 'negative'


def test_neutral_polarity_result():
    assert polarity.polarity_result(0) == 'neutral'


def test_pos_polarity():
    assert polarity.polarity('I am awesome') == 'positive'


def test_neg_polarity():
    assert polarity.polarity('I am terrible') == 'negative'


def test_neutral_polarity():
    assert polarity.polarity('I am a carrot') == 'neutral'
