import styled, { css } from 'styled-components'

export const SearchBarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid #d5d5d5;
  background-color: #ffffff;
  z-index: 2;
  padding: 10px 5px;
`

export const StyledForm = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
`

const searchItem = css`
  height: 30px;
  box-sizing: border-box;
`

export const SearchInput = styled.input`
  ${searchItem};
  flex: 1 1 0;
  padding: 0 5px;
  font-size: 14px;
`

export const SearchButton = styled.button`
  ${searchItem};
  flex: 0 0 70px;
`
