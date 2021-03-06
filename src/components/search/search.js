import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { searchRequested } from '../../redux/actions/search'
import SearchBar from './search-bar/search-bar'
import SearchResults from './search-results/search-results'
import VideoModal from './video-modal/video-modal'

export class Search extends PureComponent {
  state = {
    selectedId: null,
  }

  selectVideo = selectedId => {
    this.setState({ selectedId })
  }

  closeModal = () => {
    this.selectVideo(null)
  }

  render() {
    const { startSearch, results } = this.props
    const { selectedId } = this.state
    return (
      <div>
        <SearchBar startSearch={startSearch} />
        <SearchResults results={results} selectVideo={this.selectVideo} />
        <VideoModal selectedId={selectedId} closeModal={this.closeModal} />
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
