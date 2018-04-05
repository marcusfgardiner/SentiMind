import React from 'react';
import { shallow } from 'enzyme';
import InputView from '../../components/InputView';

describe('InputView', () => {
  const mockHandleQueryInput = jest.fn();
  const mockHandleSubmit = jest.fn();
  const props = {
    handleQueryInput: mockHandleQueryInput,
    handleSubmit: mockHandleSubmit
  };
  const inputView = shallow(<InputView {...props} />);

  it('renders correctly', () => {
    expect(inputView).toMatchSnapshot();
  });

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

      describe('SubHeader props', () => {
        it('passes flexible SubHeaderText down to SubHeader', () => {
          expect(inputView.find('SubHeader').prop('subHeaderText')).toBe(
            'Type in a topic, find out what the twitter-verse thinks'
          );
        });
      });

      describe('Button props', () => {
        it('passes handleSubmit down to Button', () => {
          expect(inputView.find('Button').prop('handleSubmit')).toBe(
            mockHandleSubmit
          );
        });

        it('passes buttonText down', () => {
          expect(inputView.find('Button').prop('buttonText')).toEqual('Go!');
        });
      });
    });
  });
});
