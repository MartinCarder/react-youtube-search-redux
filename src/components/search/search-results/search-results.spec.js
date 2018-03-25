import React from 'react'
import { shallow } from 'enzyme'
import { List } from 'immutable'
import SearchResults from './search-results'
import { SearchResultRecord } from '../../../redux/reducers/search/immutable-records'

describe('<SearchResults>', () => {
  const results = List([
    SearchResultRecord({
      id: '1234',
      title: 'Another cat video',
      description: 'Cats cats cats!!',
      publishedAt: '2018-03-24T09:30:02.000Z',
    }),
    SearchResultRecord({
      id: '1235',
      title: 'Another cat video Two',
      description: 'More cats cats!!',
      publishedAt: '2018-03-25T09:30:02.000Z',
    }),
  ])

  it('component renders results', () => {
    const wrapper = shallow(<SearchResults selectVideo={jest.fn()} results={results} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('component styles', () => {
    const wrapper = shallow(<SearchResults selectVideo={jest.fn()} results={results} />).dive()
    expect(wrapper).toMatchSnapshot()
  })
})
