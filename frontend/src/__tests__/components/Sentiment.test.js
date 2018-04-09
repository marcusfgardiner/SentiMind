import React from 'react';
import { shallow } from 'enzyme';

import Sentiment from '../../components/Sentiment';

describe('Sentiment', () => {
  const props = { sentiment: 'negative' };
  const sentiment = shallow(<Sentiment {...props} />);

  it('renders correctly', () => {
    expect(sentiment).toMatchSnapshot();
  });

  it('renders sentiment prop as its text', () => {
    expect(sentiment.find('#sentiment').text()).toEqual('negative');
  });
});
