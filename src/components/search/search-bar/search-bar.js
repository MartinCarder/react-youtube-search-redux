import React from 'react'
import { SearchBarWrapper, StyledForm, SearchInput, SearchButton } from './search-bar.styles'

const SearchBar = ({ startSearch }) => {
  let formRef = null

  const submitSearch = ev => {
    ev.preventDefault()
    console.log(formRef.elements.search.value)
    startSearch(formRef.elements.search.value)
  }

  return (
    <SearchBarWrapper>
      <StyledForm innerRef={ref => (formRef = ref)}>
        <SearchInput name="search" type="text" placeholder="Search youtube" />
        <SearchButton onClick={submitSearch}>Search</SearchButton>
      </StyledForm>
    </SearchBarWrapper>
  )
}

export default SearchBar
