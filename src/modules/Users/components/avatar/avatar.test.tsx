import { render, screen } from '@testing-library/react'
import Avatar from './avatar'

describe('Avatar component', () => {
  it('should render Avatar with a valid URL', () => {
    const testUrl = 'https://example.com/avatar.png'
    render(<Avatar url={testUrl} />)

    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', testUrl)
    expect(avatarImage).toHaveAttribute('alt', testUrl)
    expect(avatarImage).toHaveClass('avatar')
  })

  it('should render Avatar with an empty URL', () => {
    const testUrl = ''
    render(<Avatar url={testUrl} />)

    const avatarImage = screen.getByRole('img')
    expect(avatarImage).toBeInTheDocument()
    expect(avatarImage).toHaveAttribute('src', testUrl)
    expect(avatarImage).toHaveAttribute('alt', '')
    expect(avatarImage).toHaveClass('avatar')
  })
})
