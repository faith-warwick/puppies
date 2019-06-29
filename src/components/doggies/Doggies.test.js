import React from 'react'
import { render } from '@testing-library/react'

import Doggies from './Doggies'
import { ThemeProvider } from '../../theme'

describe('Doggies Container', () => {
  it('should render accurate amount of cards', () => {
    const { getAllByTestId } = render(
      <ThemeProvider>
        <Doggies />
      </ThemeProvider>
    )
    expect(getAllByTestId('dog-cards').length).toEqual(2)
  })
})
