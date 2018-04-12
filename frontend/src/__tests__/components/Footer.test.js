import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer', () => {
  const footer = shallow(<Footer />);

  it('renders correctly', () => {
    expect(footer).toMatchSnapshot();
  });
});
