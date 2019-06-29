import React from 'react'
import { render } from '@testing-library/react'

import LandingPage from './LandingPage'
import { ThemeProvider } from '../../theme'
import { exportAllDeclaration } from '@babel/types'

describe('Landing Page', () => {
  it('should display Puppies message', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <LandingPage />
      </ThemeProvider>
    )
    expect(getByTestId('welcome-message').textContent).toEqual('PUPPIES')
  })
})
