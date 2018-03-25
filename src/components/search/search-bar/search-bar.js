import React, { PureComponent } from 'react'
import { SearchBarWrapper, StyledForm, SearchInput, SearchButton } from './search-bar.styles'

class SearchBar extends PureComponent {
  state = {
    search: '',
  }

  submitSearch = ev => {
    ev.preventDefault()
    const { search } = this.state
    const { startSearch } = this.props

    startSearch(search)
  }

  handleSearchChange = event => {
    this.setState({ search: event.target.value })
  }

  render() {
    return (
      <SearchBarWrapper>
        <StyledForm>
          <SearchInput
            name="search"
            type="text"
            placeholder="Search youtube"
            value={this.state.name}
            onChange={this.handleSearchChange}
          />
          <SearchButton onClick={this.submitSearch}>Search</SearchButton>
        </StyledForm>
      </SearchBarWrapper>
    )
  }
}

export default SearchBar
