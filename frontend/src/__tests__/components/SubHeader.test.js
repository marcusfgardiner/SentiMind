import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from '../../components/SubHeader';

describe('SubHeader', () => {
  const subHeader = shallow(<SubHeader />)

  it('renders correctly', () => {
    expect(subHeader).toMatchSnapshot()
  })
})
