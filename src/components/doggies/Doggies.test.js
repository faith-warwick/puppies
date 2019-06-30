import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Doggies from './Doggies'
import { ThemeProvider } from '../../theme'

describe('Doggies Container', () => {
  const puppies = ['floof', 'nugget', 'woofer']

  afterEach(cleanup)

  it('should render accurate amount of cards', () => {
    const { getAllByTestId } = render(
      <ThemeProvider>
        <Doggies puppies={puppies} />
      </ThemeProvider>
    )
    expect(getAllByTestId('dog-cards').length).toEqual(3)
  })
  it('onClick should call setBreed', () => {
    const setBreed = jest.fn()
    const { getAllByTestId } = render(
      <ThemeProvider>
        <Doggies puppies={puppies} setBreed={setBreed} />
      </ThemeProvider>
    )

    fireEvent.click(getAllByTestId('puppy-button')[0])
    expect(setBreed).toHaveBeenCalled()
  })
})
