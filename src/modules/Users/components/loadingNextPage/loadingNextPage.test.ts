import { loadNewUsersInfo } from './loadingNextPage'

describe('loadNewUsersInfo', () => {
  it('should display "Loading More Users..." when isFetching is true', () => {
    const result = loadNewUsersInfo(true, true)
    expect(result).toBe('Loading More Users...')
  })

  it('should display "Load Newer" when isFetching is false and hasNext is true', () => {
    const result = loadNewUsersInfo(false, true)
    expect(result).toBe('Load Newer')
  })

  it('should display "Nothing more to load" when isFetching is false and hasNext is false', () => {
    const result = loadNewUsersInfo(false, false)
    expect(result).toBe('Nothing more to load')
  })

  it('should display "Nothing more to load" when isFetching is false and hasNext is undefined', () => {
    const result = loadNewUsersInfo(false, undefined)
    expect(result).toBe('Nothing more to load')
  })
})
