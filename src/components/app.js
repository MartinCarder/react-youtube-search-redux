import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import Search from './search/search'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Search />
  </Provider>
)

export default App
