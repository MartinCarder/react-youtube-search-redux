import searchReducer, { initialState } from './search'
import { Map, List } from 'immutable'
import { reviveSearchResultRecord } from './immutable-records'
import { SEARCH_REQESTED, SEARCH_FAILED, SEARCH_SUCCESS } from '../../actions/search'
import { youtubeMock } from './youtube-mock'

describe('jobs reducer', () => {
  it('Sets status to loading on SEARCH_REQESTED', () => {
    const action = {
      type: SEARCH_REQESTED,
    }

    const state = searchReducer(initialState, action)
    expect(state.get('status')).toEqual('loading')
  })

  it('Sets status to error on SEARCH_FAILED', () => {
    const action = {
      type: SEARCH_FAILED,
    }

    const state = searchReducer(initialState, action)
    expect(state.get('status')).toEqual('error')
  })

  it('reducer updates on SEARCH_SUCCESS', () => {
    const action = {
      type: SEARCH_SUCCESS,
      data: {
        items: youtubeMock,
        nextPageToken: 'next',
      },
    }

    const expectedState = Map({
      searchTerm: '',
      status: null,
      data: List([reviveSearchResultRecord(youtubeMock[0]), reviveSearchResultRecord(youtubeMock[1])]),
      nextPageToken: 'next',
    })

    const state = searchReducer(initialState, action)
    expect(state).toEqual(expectedState)
  })
})
