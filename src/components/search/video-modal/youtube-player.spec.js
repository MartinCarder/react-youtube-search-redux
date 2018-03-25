import React from 'react'
import { render } from 'enzyme'
import YoutubePlayer from './youtube-player'

describe('<YoutubePlayer>', () => {
  it('component renders', () => {
    const wrapper = render(<YoutubePlayer />)
    expect(wrapper).toMatchSnapshot()
  })
})

// TODO test player mounting script
