import React from 'react'
import { shallow, render } from 'enzyme'
import SearchBar from './search-bar'
import { SearchInput, SearchButton } from './search-bar.styles'

describe('<SearchBar>', () => {
  it('Component renders correctly', () => {
    const wrapper = render(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
  })

  it('Returns value in text input on search', () => {
    const startSearch = jest.fn()
    const wrapper = shallow(<SearchBar startSearch={startSearch} />)
    const CATS = 'cats'

    wrapper
      .find(SearchInput)
      .first()
      .simulate('change', { target: { value: CATS } })
    wrapper
      .find(SearchButton)
      .first()
      .simulate('click', { preventDefault: () => {} })

    expect(startSearch.mock.calls[0][0]).toBe(CATS)
  })
})
