import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  const wrapper = shallow(<Wrapper />);

  describe('rendering', () => {
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders a Header component', () => {
      expect(wrapper.find('Header').exists()).toBe(true);
    });

    describe('conditional rendering', () => {
      it('renders an InputView component', () => {
        expect(wrapper.find('InputView').exists()).toBe(true);
      });
    });
  });

  describe('state initialization', () => {
    it('has a `query` piece of state initialized as undefined', () => {
      expect(wrapper.state('query')).toEqual(undefined);
    });

    it('has a `buttonClicked` piece of state initialized as false', () => {
      expect(wrapper.state('buttonClicked')).toEqual(false);
    });
  });

  describe('passing props', () => {
    describe('InputBox props', () => {
      it('passes handleQueryInput down to InputView', () => {
        expect(wrapper.find('InputView').prop('handleQueryInput')).toBe(
          wrapper.instance().handleQueryInput
        );
      });

      describe('Button props', () => {
        it('passes handleSubmit down to InputView', () => {
          expect(wrapper.find('InputView').prop('handleSubmit')).toBe(
            wrapper.instance().handleSubmit
          );
        });
      });
    });
  });

  describe('handleQueryInput', () => {
    it('sets `query` to the value input by the user', () => {
      const event = { target: { value: 'hello' } };
      wrapper.instance().handleQueryInput(event);
      expect(wrapper.state('query')).toEqual('hello');
    });
  });

  describe('handleSubmit()', () => {
    it('changes `buttonClicked` to true', () => {
      wrapper.instance().handleSubmit();
      expect(wrapper.state('buttonClicked')).toBe(true);
    });
  });
});
