import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { VideoWrapper, VideoImage, InnerWrapper, Title, Description } from './video-item.styles'

class VideoItem extends PureComponent {
  showVideo = () => {
    const { selectVideo, video: { id } } = this.props
    selectVideo(id)
  }

  render() {
    const { title, thumbnail, description } = this.props.video
    return (
      <VideoWrapper onClick={this.showVideo}>
        <InnerWrapper>
          <VideoImage thumbnail={thumbnail} />
          <Title>{title}</Title>
          <Description>{description}</Description>
        </InnerWrapper>
      </VideoWrapper>
    )
  }
}

VideoItem.propTypes = {
  results: ImmutablePropTypes.contains(
    ImmutablePropTypes.recordOf({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ),
}

export default VideoItem
