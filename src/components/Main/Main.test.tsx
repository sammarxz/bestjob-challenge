import React from 'react'
import { render } from '@testing-library/react'

import { Main } from './'

describe('<Main />', () => {
  it('should render the <h1> as children of component', () => {
    const { container, getByText } = render(
      <Main>
        <h1>BestJob</h1>
      </Main>
    )

    expect(getByText('BestJob')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot(`
      <h1>BestJob</h1>
    `)
  })
})
