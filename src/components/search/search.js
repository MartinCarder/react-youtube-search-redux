import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchRequested } from '../../redux/actions/search'
import SearchBar from './search-bar/search-bar'
import SearchResults from './search-results/search-results'

export class Search extends PureComponent {
  state = {
    selectedId: null,
  }

  selectVideo = selectedId => {
    this.setState({ selectedId })
  }

  render() {
    const { startSearch, results } = this.props
    return (
      <div>
        <SearchBar startSearch={startSearch} />
        <SearchResults results={results} selectVideo={this.selectVideo} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.searchReducer.get('data'),
  nextPageToken: state.searchReducer.get('nextPageToken'),
  status: state.searchReducer.get('status'),
})

const mapDispatchToProps = dispatch => ({
  startSearch: searchTerm => dispatch(searchRequested(searchTerm)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)
