import React from 'react'
import { shallow, render } from 'enzyme'
import VideoItem from './video-item'
import { VideoWrapper } from './video-item.styles'
import { SearchResultRecord } from '../../../redux/reducers/search/immutable-records'

const video = new SearchResultRecord({
  id: '1234',
  title: 'Another cat video',
  description: 'Cats cats cats!!',
  publishedAt: '2017-05-31T09:30:02.000Z',
  thumbnail: 'image',
})

describe('<VideoItem>', () => {
  it('component renders correctly', () => {
    const wrapper = render(<VideoItem video={video} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('selectVideo called with correct id when video clicked', () => {
    const selectVideo = jest.fn()
    const wrapper = shallow(<VideoItem video={video} selectVideo={selectVideo} />)

    wrapper.find(VideoWrapper).simulate('click')
    expect(selectVideo.mock.calls[0][0]).toBe('1234')
  })
})
