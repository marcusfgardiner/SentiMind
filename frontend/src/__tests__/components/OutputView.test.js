import React from 'react';
import { shallow } from 'enzyme';
import OutputView from '../../components/OutputView';

describe('OutputView', () => {
  const mockHandleSubmit = jest.fn();
  const props = {
    handleSubmit: mockHandleSubmit,
    average_sentiment: 'negative',
    query: 'Donald Trump',
    sentiments: { positive: 0, neutral: 0, negative: 0 },
    top_tweets: { positive: '102389292', negative: '02392039420' },
    top_words: { hello: 4, goodbye: 3, again: 2 }
  };
  const outputView = shallow(<OutputView {...props} />);

  it('renders correctly', () => {
    expect(outputView).toMatchSnapshot();
  });

  it('renders subheader component', () => {
    expect(outputView.find('SubHeader').exists()).toBe(true);
  });

  it('renders sentiment component', () => {
    expect(outputView.find('Sentiment').exists()).toBe(true);
  });

  it('renders Button component', () => {
    expect(outputView.find('Button').exists()).toBe(true);
  });

  it('renders a BarChart component', () => {
    expect(outputView.find('VictoryChart').exists()).toBe(true);
  });

  describe('tweets', () => {
    it('renders a TwitterTweetEmbed component for positive tweet', () => {
      expect(outputView.find('#positiveTweet').exists()).toBe(true);
    });

    it('renders a TwitterTweetEmbed component for negative tweet', () => {
      expect(outputView.find('#negativeTweet').exists()).toBe(true);
    });
  });

  describe('passing props', () => {
    describe('SubHeader props', () => {
      it('passes flexible SubHeaderText down to main-subheader', () => {
        expect(outputView.find('#main-subheader').prop('subHeaderText')).toBe(
          'The weighted sentiment on "Donald Trump" is:'
        );
      });

      it('passes flexible SubHeaderText down to positiveTweet subheader', () => {
        expect(
          outputView.find('#positiveTweet-subheader').prop('subHeaderText')
        ).toBe('Most Positive Tweet');
      });

      it('passes flexible SubHeaderText down to negativeTweet subheader', () => {
        expect(
          outputView.find('#negativeTweet-subheader').prop('subHeaderText')
        ).toBe('Most Negative Tweet');
      });
    });

    describe('Sentiment props', () => {
      it('passes sentiment down to Sentiment', () => {
        expect(outputView.find('Sentiment').prop('average_sentiment')).toBe(
          'negative'
        );
      });
    });

    describe('Button props', () => {
      it('passes flexible buttonText down to Button', () => {
        expect(outputView.find('Button').prop('buttonText')).toBe(
          'Choose another topic'
        );
      });
      it('handle submit function down to Button', () => {
        expect(outputView.find('Button').prop('handleSubmit')).toBe(
          mockHandleSubmit
        );
      });
    });

    describe('formatTopWords()', () => {
      it('correctly formats json data', () => {
        const json_data = { hello: 4, goodbye: 3, again: 2 };
        const formatted_data = [
          { text: 'hello', value: 400 },
          { text: 'goodbye', value: 300 },
          { text: 'again', value: 200 }
        ];
        expect(outputView.instance().formatTopWords(json_data)).toEqual(
          formatted_data
        );
      });
    });
  });
});
