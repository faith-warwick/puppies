import React from 'react'
import { render, cleanup } from '@testing-library/react'

import LandingPage from './LandingPage'
import { ThemeProvider } from '../../theme'

describe('Landing Page', () => {
  afterEach(cleanup)

  it('should display Puppies message', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    )
    expect(getByTestId('welcome-message').textContent).toEqual('PUPPIES')
  })
})
