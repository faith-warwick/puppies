import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'

import PuppyDialog from './PuppyPics'
import { ThemeProvider } from '../../theme'

describe('PuppyPics Container', () => {
  const puppyImages = ['floof', 'nugget', 'woofer']
  afterEach(cleanup)

  it('should render first in props on initial', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <PuppyDialog
          puppyImages={puppyImages}
          breed="corgi"
          open={true}
          close={jest.fn()}
        />
      </ThemeProvider>
    )

    const expected = 'http://localhost/floof'
    expect(getByTestId('image-for-breed').src).toEqual(expected)
  })
  it('onClick showMore should set source to next in array', () => {
    const { getAllByTestId, getByTestId } = render(
      <ThemeProvider>
        <PuppyDialog
          puppyImages={puppyImages}
          breed="corgi"
          open={true}
          close={jest.fn()}
        />
      </ThemeProvider>
    )
    fireEvent.click(getAllByTestId('show-more')[0])

    const expected = 'http://localhost/nugget'

    expect(getByTestId('image-for-breed').src).toEqual(expected)
  })
  it('onClick close should close dialog', () => {
    const close = jest.fn()
    const { getAllByTestId } = render(
      <ThemeProvider>
        <PuppyDialog
          puppyImages={puppyImages}
          breed="corgi"
          open={true}
          close={close}
        />
      </ThemeProvider>
    )
    fireEvent.click(getAllByTestId('close')[0])

    expect(close).toHaveBeenCalled()
  })
})
