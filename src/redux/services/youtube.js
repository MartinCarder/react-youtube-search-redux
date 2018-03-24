import queryStringFromObj from '../../utils/queryStringFromObj'
// API Key restricted to use on localhost only
const API_KEY = 'AIzaSyCp87z8jW2cmlSijMiJyNdIGPhK-vP3xjE'
const SEARCH_END_POINT = 'https://www.googleapis.com/youtube/v3/search'

export const youtubeSearch = searchQuery => {
  let query = {
    part: 'snippet',
    maxResults: 50,
    type: 'video',
    videoDefinition: 'high',
    key: API_KEY,
    q: searchQuery,
  }

  query = queryStringFromObj(query)

  return fetch(`${SEARCH_END_POINT}?${query}`)
    .then(d => d.json())
    .then(d => d)
}
