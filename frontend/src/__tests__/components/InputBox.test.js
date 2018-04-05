import React from 'react';
import { shallow } from 'enzyme';
import InputBox from '../../components/InputBox';

describe('InputBox', () => {
  const mockHandleQueryInput = jest.fn();
  const props = { handleQueryInput: mockHandleQueryInput };
  const inputBox = shallow(<InputBox {...props} />);

  it('renders correctly', () => {
    expect(inputBox).toMatchSnapshot();
  });

  describe('when a user types into the input', () => {
    beforeEach(() => {
      inputBox.find('input').simulate('change');
    });

    it('calls the handleQueryInput function passed in from parent', () => {
      expect(mockHandleQueryInput).toHaveBeenCalled();
    });
  });
});
