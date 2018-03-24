import React from 'react'
import YoutubePlayer from './youtube-player'
import { Modal, Wrapper, Container, Close } from './video-modal.styles'

const VideoModal = ({ selectedId, closeModal }) => {
  const open = selectedId !== null
  return (
    <Modal open={open}>
      <Close onClick={closeModal}>X</Close>
      <Wrapper>
        <Container>{open && <YoutubePlayer videoId={selectedId} />}</Container>
      </Wrapper>
    </Modal>
  )
}

export default VideoModal
