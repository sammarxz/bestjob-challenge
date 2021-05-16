import React from 'react'
import { render, screen } from '@testing-library/react'

import { Header } from './'

describe('<Header />', () => {
  it('should render the score correctly', () => {
    render(<Header />)

    expect(screen.getByRole('heading', { name: /score/i })).toBeInTheDocument()
  })

  it('should render the spock correctly', () => {
    render(<Header />)

    expect(
      screen.getByRole('img', {
        name: 'Spock. a character in the Star Trek media franchise'
      })
    )
  })
})
