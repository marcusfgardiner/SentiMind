import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  const wrapper = shallow(<Wrapper />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Header component', () => {
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  it('renders a SubHeader component', () => {
    expect(wrapper.find('SubHeader').exists()).toBe(true);
  });

  it('renders a InputBox component', () => {
    expect(wrapper.find('InputBox').exists()).toBe(true);
  });

  it('renders a Button component', () => {
    expect(wrapper.find('Button').exists()).toBe(true);
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
      it('passes handleQueryInput down to InputBox', () => {
        expect(wrapper.find('InputBox').prop('handleQueryInput')).toBe(
          wrapper.instance().handleQueryInput
        );
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

  describe('handleSubmitClick()', () => {
    it('changes `buttonClicked` to true', () => {
      wrapper.instance().handleSubmitClick();
      expect(wrapper.state('buttonClicked')).toBe(true);
    });
  });
});
