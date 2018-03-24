import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchRequested } from '../../redux/actions/search'
import SearchBar from './search-bar/search-bar'

export class Search extends PureComponent {
  render() {
    const { startSearch } = this.props
    return (
      <div>
        <SearchBar startSearch={startSearch} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startSearch: searchTerm => dispatch(searchRequested(searchTerm)),
})
export default connect(null, mapDispatchToProps)(Search)
