import React from 'react'
import { shallow } from 'enzyme'
import VideoModal from './video-modal'
import { Close } from './video-modal.styles'

describe('<VideoModal>', () => {
  it('Component hidden when closed', () => {
    const wrapper = shallow(<VideoModal selectedId={null} />)
    const wrapperModal = wrapper.dive()

    expect(wrapperModal).toHaveStyleRule('visibility', 'hidden')
    expect(wrapperModal).toHaveStyleRule('opacity', '0')
  })

  it('Component visable when open', () => {
    const wrapper = shallow(<VideoModal selectedId={'123'} />)
    const wrapperModal = wrapper.dive()

    expect(wrapperModal).toHaveStyleRule('visibility', 'visible')
    expect(wrapperModal).toHaveStyleRule('opacity', '1')
  })

  it('Close callback called', () => {
    const closeModal = jest.fn()
    const wrapper = shallow(<VideoModal selectedId={'123'} closeModal={closeModal} />)

    wrapper.find(Close).simulate('click')
    expect(closeModal.mock.calls.length).toBe(1)
  })
})
