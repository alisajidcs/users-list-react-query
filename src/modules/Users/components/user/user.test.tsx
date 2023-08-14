import React from 'react'
import { render, screen } from '@testing-library/react'

import User from './user' // Assuming the component is imported from a file named User.js

describe('User component', () => {
  const props = {
    id: 1,
    email: 'johndoe@example.com',
    avatar: 'https://example.com/avatar.png',
    firstName: 'John',
    lastName: 'Doe',
  }

  it('renders the user avatar', () => {
    render(<User {...props} />)

    const avatarElement = screen.getByAltText(props.avatar)
    expect(avatarElement).toBeInTheDocument()
    expect(avatarElement).toHaveAttribute('src', props.avatar)
  })

  it('renders the user full Name', () => {
    render(<User {...props} />)
    const fullNameElement = screen.getByText(
      `${props.firstName} ${props.lastName}`,
    )
    expect(fullNameElement).toBeInTheDocument()
  })

  it('trims extra spaces between first and last name', () => {
    const extraSpaceProps = {
      ...props,
      firstName: '   John   ',
      lastName: '   Doe   ',
    }
    render(<User {...extraSpaceProps} />)
    const fullNameElement = screen.getByText('John Doe')
    expect(fullNameElement).toBeInTheDocument()
  })
})
