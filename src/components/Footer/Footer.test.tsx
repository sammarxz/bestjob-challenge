import React from 'react'
import { render, screen } from '@testing-library/react'

import { Footer } from './'

describe('<Footer />', () => {
  it('should render the correclty', () => {
    render(<Footer />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
