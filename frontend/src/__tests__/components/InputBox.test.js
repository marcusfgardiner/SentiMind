import React from 'react';
import { shallow } from 'enzyme';
import InputBox from '../../components/InputBox';

describe('InputBox', () => {
  const inputBox = shallow(<InputBox />);

  it('renders correctly', () => {
    expect(inputBox).toMatchSnapshot();
  })
})
