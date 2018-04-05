import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', () => {
  const mockHandleSubmit = jest.fn();
  const props = { handleSubmit: mockHandleSubmit, buttonText: 'Go' };
  const button = shallow(<Button {...props} />);

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  });

  it('renders buttonText as its text', () => {
    expect(button.find('button').text()).toEqual('Go');
  });

  describe('when clicked', () => {
    beforeEach(() => {
      button.find('button').prop('onClick')();
    });

    it('fires handleSubmit()', () => {
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });
});
