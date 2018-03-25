import { youtubeSearch } from '../services/youtube'
export const SEARCH_REQESTED = 'SEARCH_REQESTED'
export const SEARCH_FAILED = 'SEARCH_FAILED'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'

export const searchRequested = searchQuery => {
  return dispatch => {
    return youtubeSearch(searchQuery)
      .then(data => dispatch(searchSuccess(data)))
      .catch(err => {
        dispatch(searchFailed(err))
      })
  }
}

export const searchFailed = message => ({
  type: SEARCH_FAILED,
  message,
})

export const searchSuccess = data => ({
  type: SEARCH_SUCCESS,
  data,
})
