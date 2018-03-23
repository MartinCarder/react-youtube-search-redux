import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from './search-bar'

describe('<SearchBar>', () => {
  it('Component renders correctly', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
  })
})
