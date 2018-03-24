import { combineReducers } from 'redux'
import searchReducer from './search/search'

const rootReducer = combineReducers({
  searchReducer,
})

export default rootReducer
