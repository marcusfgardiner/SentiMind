import React from 'react';
import {shallow} from 'enzyme';

import Sentiment from '../../components/Sentiment';

describe('Sentiment', () => {
  const sentiment = shallow(<Sentiment/>)

  it('renders correctly', () => {
    expect(sentiment).toMatchSnapshot();
  })
});
