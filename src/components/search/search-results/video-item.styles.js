import styled from 'styled-components'

export const VideoWrapper = styled.div`
  flex: 0 0 33.33%;
  box-sizing: border-box;
  padding: 7px 5px;
  width: 33.33%;
  overflow: hidden;
  position: relative;
`

export const VideoImage = styled.div`
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('${props => props.thumbnail}');
  &:after {
    content: '';
    display: block;
    padding-top: 56.2%;
  }
`

export const InnerWrapper = styled.div`
  padding: 2px;
  height: 100%;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    z-index: -1;
    margin: 7px 5px;
  }
`

export const Title = styled.h5`
  font-weight: bold;
  font-size: 17px;
  text-align: center;
  color: #167ac6;
  margin: 15px;
`

export const Description = styled.p`
  font-size: 13px;
  margin: 0 15px 15px 15px;
`
