import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.9);
  opacity: ${props => (props.open ? 1 : 0)};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  max-width: 1000px;
  width: 1000px;
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`
export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Close = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
`
