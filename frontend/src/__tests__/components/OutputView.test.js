import React from 'react';
import { shallow } from 'enzyme';
import OutputView from '../../components/OutputView';

describe('OutputView', () => {
  const mockHandleSubmit = jest.fn();
  const props = {
    handleSubmit: mockHandleSubmit,
    average_sentiment: 'negative',
    sentiments: { positive: 0, neutral: 0, negative: 0 }
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
    expect(outputView.find('BarChart').exists()).toBe(true);
  });

  it('renders a PieChart component', () => {
    expect(outputView.find('PieChart').exists()).toBe(true);
  });

  it('renders a TwitterTweetEmbed component', () => {
    expect(outputView.find('TwitterTweetEmbed').exists()).toBe(true);
  });

  describe('passing props', () => {
    describe('SubHeader props', () => {
      it('passes flexible SubHeaderText down to SubHeader', () => {
        expect(outputView.find('SubHeader').prop('subHeaderText')).toBe(
          'So, the world thinks...'
        );
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
  });
});
