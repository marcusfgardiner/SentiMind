import React from 'react';
import { shallow } from 'enzyme';
import SubHeader from '../../components/SubHeader';

describe('SubHeader', () => {
  const props = {text: 'Flexible Subheader'}
  const subHeader = shallow(<SubHeader {...props}/>)

  it('renders correctly', () => {
    expect(subHeader).toMatchSnapshot()
  })

  it('renders flexible subheader', () => {
    expect(subHeader.find('h3').text()).toEqual('Flexible Subheader')
  })
})
