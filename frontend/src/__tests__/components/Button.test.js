import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', () => {
  const button = shallow(<Button />);

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  })
})
