import { Map, List } from 'immutable'
import { reviveSearchResultRecord } from './immutable-records'
import { SEARCH_REQESTED, SEARCH_FAILED, SEARCH_SUCCESS } from '../../actions/search'

const initialState = Map({
  searchTerm: '',
  status: null,
  data: List(),
  nextPageToken: null,
})

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQESTED:
      return state.set('status', 'loading')
    case SEARCH_FAILED:
      return state.set('status', 'error')
    case SEARCH_SUCCESS:
      const { data } = action
      return state.withMutations(searchState => {
        searchState.set('data', List(data.items.map(video => reviveSearchResultRecord(video))))
        searchState.set('nextPageToken', data.nextPageToken)
        searchState.set('status', null)
      })
    default:
      return state
  }
}

export default searchReducer
