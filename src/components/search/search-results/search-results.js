import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import VideoItem from './video-item'
import { Results } from './search-results.styles'

class SearchResults extends PureComponent {
  render() {
    const { results, selectVideo } = this.props
    return (
      <Results>{results.map(video => <VideoItem video={video} key={video.id} selectVideo={selectVideo} />)}</Results>
    )
  }
}

SearchResults.propTypes = {
  results: ImmutablePropTypes.list.isRequired,
  selectVideo: PropTypes.func.isRequired,
}

export default SearchResults
