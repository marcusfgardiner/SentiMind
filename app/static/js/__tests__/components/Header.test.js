import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../Header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  })
})
