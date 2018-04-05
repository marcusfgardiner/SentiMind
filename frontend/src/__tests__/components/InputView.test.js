import React from 'react';
import { shallow } from 'enzyme';
import InputView from '../../components/InputView';

describe('InputView', () => {
  const mockHandleQueryInput = jest.fn();
  const mockHandleSubmit = jest.fn();
  const props = { handleQueryInput: mockHandleQueryInput,
    handleSubmit: mockHandleSubmit }
  const inputView = shallow(<InputView {...props} />);

  it('renders a SubHeader component', () => {
    expect(inputView.find('SubHeader').exists()).toBe(true);
  });

  it('renders a InputBox component', () => {
    expect(inputView.find('InputBox').exists()).toBe(true);
  });

  it('renders a Button component', () => {
    expect(inputView.find('Button').exists()).toBe(true);
  });

  describe('passing props', () => {
    describe('InputBox props', () => {
      it('passes handleQueryInput down to InputBox', () => {
        expect(inputView.find('InputBox').prop('handleQueryInput')).toBe(
          mockHandleQueryInput
        );
      });

      describe('Button props', () => {
        it('passes handleSubmit down to Button', () => {
          expect(inputView.find('Button').prop('handleSubmit')).toBe(
            mockHandleSubmit
          );
        });
      });
    });
  });

});
