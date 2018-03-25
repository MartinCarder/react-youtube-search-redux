import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { searchRequested, searchFailed, searchSuccess } from './search'

jest.mock('../services/youtube', () => ({
  youtubeSearch: jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve('test'))
    .mockImplementationOnce(() => Promise.reject('err')),
}))

describe('Search actions', () => {
  it('searchSuccess dispatches', () => {
    const payload = 'data'
    const action = searchSuccess(payload)
    expect(action).toEqual({
      type: 'SEARCH_SUCCESS',
      data: payload,
    })
  })

  it('SearchFailed action', () => {
    const payload = 'data'
    const action = searchFailed(payload)
    expect(action).toEqual({
      type: 'SEARCH_FAILED',
      message: payload,
    })
  })

  describe('searchRequested action', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const initialState = {}

    it('successful request', () => {
      const store = mockStore(initialState)
      return store.dispatch(searchRequested('cats')).then(() => {
        const expectedActions = store.getActions()
        expect(expectedActions.length).toBe(1)
        expect(expectedActions).toContainEqual({ type: 'SEARCH_SUCCESS', data: 'test' })
      })
    })

    it('failed request', () => {
      const store = mockStore(initialState)
      return store.dispatch(searchRequested('cats')).then(() => {
        const expectedActions = store.getActions()
        expect(expectedActions.length).toBe(1)
        expect(expectedActions).toContainEqual({ type: 'SEARCH_FAILED', message: 'err' })
      })
    })
  })
})
