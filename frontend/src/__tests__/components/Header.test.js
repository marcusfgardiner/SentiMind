import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

describe('Header', () => {
  const header = shallow(<Header />);

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  })
})
