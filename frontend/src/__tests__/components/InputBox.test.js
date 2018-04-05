import React from 'react';
import { shallow } from 'enzyme';
import InputBox from '../../components/InputBox';

describe('InputBox', () => {
  const mockHandleTextBoxInput = jest.fn();
  const props = { handleTextBoxInput: mockHandleTextBoxInput };
  const inputBox = shallow(<InputBox {...props} />);

  it('renders correctly', () => {
    expect(inputBox).toMatchSnapshot();
  });

  describe('when a user types into the input', () => {
    beforeEach(() => {
      inputBox.find('input').simulate('change');
    });

    it('calls the handleTextBoxInput function passed in from parent', () => {
      expect(mockHandleTextBoxInput).toHaveBeenCalled();
    });
  });
});
