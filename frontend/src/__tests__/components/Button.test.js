import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Button', () => {
  const button = shallow(<Button />);

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  })
})
