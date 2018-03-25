import queryStringFromObj from './queryStringFromObj'

describe('queryStringFromObj returns formated query string', () => {
  it('multiple keys', () => {
    const query = queryStringFromObj({
      key1: '1',
      key2: '2',
    })
    expect(query).toEqual('key1=1&key2=2')
  })

  it('singal key', () => {
    const query = queryStringFromObj({
      key1: '1',
    })
    expect(query).toEqual('key1=1')
  })

  it('empty object', () => {
    const query = queryStringFromObj({})
    expect(query).toEqual('')
  })
})
