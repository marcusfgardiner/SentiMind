import React from 'react';
import { shallow } from 'enzyme';
import OutputView from '../../components/OutputView';

describe('OutputView', () => {
  const outputView = shallow(<OutputView/>)

  it('renders correctly', () => {
    expect(outputView).toMatchSnapshot();
  })

  it('renders subheader component', () => {
    expect(outputView.find('SubHeader').exists()).toBe(true)
  })

  describe('SubHeader props', () => {
    it('passes flexible SubHeaderText down to SubHeader', () => {
      expect(outputView.find('SubHeader').prop('subHeaderText')).toBe(
        'So, the world thinks...'
      );
    });
  });
})
