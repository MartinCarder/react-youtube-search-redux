import { Record } from 'immutable'

export const SearchResultRecord = Record(
  {
    id: null,
    title: '',
    publishedAt: '',
    description: '',
    thumbnail: '',
  },
  'SearchResultRecord'
)

export const reviveSearchResultRecord = video =>
  new SearchResultRecord({
    id: video.id.videoId,
    thumbnail: video.snippet.thumbnails.high.url,
    ...video.snippet,
  })
