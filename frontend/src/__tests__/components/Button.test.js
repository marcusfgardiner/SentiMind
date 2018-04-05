import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('Button', () => {
  const mockHandleSubmitClick = jest.fn();
  const props = { handleSubmit: mockHandleSubmitClick };
  const button = shallow(<Button {...props} />);

  it('renders correctly', () => {
    expect(button).toMatchSnapshot();
  });

  describe('when clicked', () => {
    beforeEach(() => {
      button.find('button').prop('onClick')();
    });

    it('fires handleSubmit()', () => {
      expect(mockHandleSubmitClick).toHaveBeenCalled();
    });
  });
});
