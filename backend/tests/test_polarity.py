from .context import polarity


def test_pos_polarity_result():
    assert polarity.polarity_result(0.8) == 'positive'


def test_neg_polarity_result():
    assert polarity.polarity_result(-0.8) == 'negative'


def test_neutral_polarity_result():
    assert polarity.polarity_result(0) == 'neutral'
