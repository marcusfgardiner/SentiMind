import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  const sentiments = { positive: 3, neutral: 3, negative: 4 };
  const top_tweets = { positive: '124434343', negative: '12435532222' };
  const top_words = { hello: 4, goodbye: 3, again: 2 };
  fetch.mockResponse(
    JSON.stringify({
      polarity: 'good',
      sentiments,
      top_tweets,
      top_words
    })
  );
  let wrapper = shallow(<Wrapper />);

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders a Header component', () => {
      expect(wrapper.find('Header').exists()).toBe(true);
    });

    describe('conditional rendering', () => {
      it('renders an InputView component', () => {
        expect(wrapper.find('InputView').exists()).toBe(true);
      });

      it('doesnt render an OutputView component', () => {
        expect(wrapper.find('OutputView').exists()).toBe(false);
      });

      describe('button is clicked', () => {
        beforeEach(() => {
          wrapper.setState({ buttonClicked: true });
        });

        it('renders an OutputView component', () => {
          expect(wrapper.find('OutputView').exists()).toBe(true);
        });

        it('doesnt render an InputView component', () => {
          expect(wrapper.find('InputView').exists()).toBe(false);
        });
      });
    });
  });

  describe('state initialization', () => {
    beforeEach(() => {
      wrapper = shallow(<Wrapper />);
    });

    it('has a `query` piece of state initialized as undefined', () => {
      expect(wrapper.state('query')).toEqual(undefined);
    });

    it('has a `buttonClicked` piece of state initialized as false', () => {
      expect(wrapper.state('buttonClicked')).toEqual(false);
    });

    it('has a `average_sentiment` state initialized as undefined', () => {
      expect(wrapper.state('average_sentiment')).toEqual(undefined);
    });

    it('has a `sentiments` state initialized as object', () => {
      expect(wrapper.state('sentiments')).toEqual({
        positive: 0,
        neutral: 0,
        negative: 0
      });

      it('has a `top_tweets` state initialized as object', () => {
        expect(wrapper.state('top_tweets')).toEqual({
          positive: undefined,
          negative: undefined
        });
      });

      it('has a `top_words` state initialized as object', () => {
        expect(wrapper.state('top_words')).toEqual(undefined);
      });
    });
  });

  describe('passing props to input', () => {
    describe('InputBox props', () => {
      it('passes handleQueryInput down to InputView', () => {
        expect(wrapper.find('InputView').prop('handleQueryInput')).toBe(
          wrapper.instance().handleQueryInput
        );
      });

      describe('Button props', () => {
        it('passes handleSubmit down to InputView', () => {
          expect(wrapper.find('InputView').prop('handleSubmit')).toBe(
            wrapper.instance().handleSubmit
          );
        });
      });
    });
  });

  describe('passing props to output', () => {
    beforeEach(() => {
      wrapper.setState({ buttonClicked: true });
    });
    describe('handleSubmit props', () => {
      it('passes handleSubmit down to OutputView', () => {
        expect(wrapper.find('OutputView').prop('handleSubmit')).toBe(
          wrapper.instance().handleSubmit
        );
      });

      it('passes sentiments down to OutputView', () => {
        wrapper.setState({ sentiments });
        expect(wrapper.find('OutputView').prop('sentiments')).toBe(
          wrapper.state('sentiments')
        );
      });

      it('passes top_tweets down to OutputView', () => {
        wrapper.setState({ sentiments });
        expect(wrapper.find('OutputView').prop('top_tweets')).toBe(
          wrapper.state('top_tweets')
        );
      });
    });

    describe('sentiment props', () => {
      it('passes average_sentiment state down to OutputView', () => {
        wrapper.setState({ average_sentiment: 'hi' });
        expect(wrapper.find('OutputView').prop('average_sentiment')).toBe(
          wrapper.state('average_sentiment')
        );
      });
    });
  });

  describe('handleQueryInput', () => {
    it('sets `query` to the value input by the user', () => {
      const event = { target: { value: 'hello' } };
      wrapper.instance().handleQueryInput(event);
      expect(wrapper.state('query')).toEqual('hello');
    });
  });

  describe('fetchSentiment()', () => {
    beforeEach(async () => {
      await wrapper.instance().fetchSentiment();
    });
    it('sets the sentiment state to the response received', () => {
      expect(wrapper.state('average_sentiment')).toEqual('good');
    });

    it('sets the sentiments state to sentiments response', () => {
      expect(wrapper.state('sentiments')).toEqual(sentiments);
    });

    it('sets the top_tweets state to top_tweets response', () => {
      expect(wrapper.state('top_tweets')).toEqual(top_tweets);
    });

    it('sets the top_words state to top_words response', () => {
      expect(wrapper.state('top_words')).toEqual(top_words);
    });
  });

  describe('handleSubmit()', () => {
    beforeEach(() => {
      wrapper = shallow(<Wrapper />);
      wrapper.setState({ query: 'hello' });
      wrapper.instance().handleSubmit();
    });

    describe('switches `buttonClicked` between true/false', () => {
      it('clicked once - expect to be true', () => {
        expect(wrapper.state('buttonClicked')).toBe(true);
      });

      describe('when true', () => {
        beforeEach(() => {
          wrapper.instance().handleSubmit();
        });

        it('clicked twice - expect to be false', () => {
          expect(wrapper.state('buttonClicked')).toBe(false);
        });

        it('changes `query` to undefined', () => {
          expect(wrapper.state('query')).toBe(undefined);
        });

        it('changes `average_sentiment` to undefined', () => {
          expect(wrapper.state('average_sentiment')).toBe(undefined);
        });

        it('changes `sentiments` to undefined', () => {
          expect(wrapper.state('sentiments')).toEqual({
            positive: 0,
            neutral: 0,
            negative: 0
          });
        });

        it('changes `top_tweets` to 0', () => {
          expect(wrapper.state('top_tweets')).toEqual(undefined);
        });
      });
    });
  });
});
