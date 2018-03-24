import React, { PureComponent } from 'react'
import { VideoWrapper } from './youtube-player.styles'

let playerLoaded

class YoutubePlayer extends PureComponent {
  componentDidMount() {
    if (!playerLoaded) {
      playerLoaded = new Promise(resolve => {
        const scriptTag = document.createElement('script')
        scriptTag.src = 'https://www.youtube.com/iframe_api'
        const firstScriptTag = document.getElementsByTagName('script')[0]
        firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag)
        window.onYouTubeIframeAPIReady = () => resolve(window.YT)
      })
    }

    playerLoaded.then(YT => {
      this.player = new YT.Player(this.youtubePlayerAnchor, {
        height: '100%',
        width: '100%',
        videoId: this.props.videoId,
        playerVars: {
          autoplay: '1',
        },
      })
    })
  }

  render() {
    return (
      <VideoWrapper>
        <div
          ref={r => {
            this.youtubePlayerAnchor = r
          }}
        />
      </VideoWrapper>
    )
  }
}

export default YoutubePlayer
