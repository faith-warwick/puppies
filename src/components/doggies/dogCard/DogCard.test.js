import React from 'react'
import { render } from '@testing-library/react'

import DogCard from './DogCard'
import { ThemeProvider } from '../../../theme'

describe('Landing Page', () => {
  it('should display Puppies message', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <DogCard />
      </ThemeProvider>
    )
    expect(getByTestId('dog-card-text').textContent).toEqual('Dog card')
  })
})
