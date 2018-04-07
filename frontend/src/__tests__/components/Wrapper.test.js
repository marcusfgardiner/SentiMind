import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '../../components/Wrapper';

describe('Wrapper', () => {
  fetch.mockResponse(JSON.stringify({ sentiment: 'good' }));
  let wrapper = shallow(<Wrapper />);

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

      it('doesnt render an OutputView component', () => {
        expect(wrapper.find('OutputView').exists()).toBe(false);
      });

      describe('button is clicked', () => {
        beforeEach(() => {
          wrapper.setState({ buttonClicked: true });
        });

        it('renders an OutputView component', () => {
          expect(wrapper.find('OutputView').exists()).toBe(true);
        });

        it('doesnt render an InputView component', () => {
          expect(wrapper.find('InputView').exists()).toBe(false);
        });
      });
    });
  });

  describe('state initialization', () => {
    beforeEach(() => {
      wrapper = shallow(<Wrapper />);
    });

    it('has a `query` piece of state initialized as undefined', () => {
      expect(wrapper.state('query')).toEqual(undefined);
    });

    it('has a `buttonClicked` piece of state initialized as false', () => {
      expect(wrapper.state('buttonClicked')).toEqual(false);
    });
  });

  describe('passing props to input', () => {
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

  describe('passing props to output', () => {
    beforeEach(() => {
      wrapper.setState({ buttonClicked: true });
    });
    describe('Button props', () => {
      it('passes handleSubmit down to OutputView', () => {
        expect(wrapper.find('OutputView').prop('handleSubmit')).toBe(
          wrapper.instance().handleSubmit
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

  describe('fetchSentiment()', () => {
    it('sets the sentiment state to the response received', async () => {
      await wrapper.instance().fetchSentiment();
      expect(wrapper.state('sentiment')).toEqual('good');
    });
  });

  describe('handleSubmit()', () => {
    beforeEach(() => {
      wrapper = shallow(<Wrapper />);
      wrapper.setState({ query: 'hello' });
      wrapper.instance().handleSubmit();
    });

    it('changes `query` to undefined', () => {
      expect(wrapper.state('query')).toBe(undefined);
    });

    describe('switches `buttonClicked` between true/false', () => {
      it('clicked once - expect to be true', () => {
        expect(wrapper.state('buttonClicked')).toBe(true);
      });

      it('clicked twice - expect to be false', () => {
        wrapper.instance().handleSubmit();
        expect(wrapper.state('buttonClicked')).toBe(false);
      });
    });
  });
});
