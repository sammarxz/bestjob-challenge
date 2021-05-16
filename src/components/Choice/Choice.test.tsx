import React from 'react'
import { render } from '@testing-library/react'

import { Choice } from './'

describe('<Choice type="lizard" />', () => {
  it('should render a choice of lizard', () => {
    const { container, getByText } = render(<Choice type="lizard" />)

    expect(getByText('🦎')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot(`
      <body>
        <div>
          <div
            class="bg-white text-4xl border border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl duration-300 undefined"
          >
            🦎
          </div>
        </div>
      </body>
    `)
  })
})
