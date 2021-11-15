/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '@testing-library/react'
import TestView from '@/components/TestView'

describe(`HomePage`, () => {
  it('matches document', async () => {
    const onClick = jest.fn()
    render(<TestView />)

    const heading = screen.getByRole('heading', {
      name: 'test',
    })

    expect(heading).toBeInTheDocument()
    userEvent.click(screen.getByRole('button'))
    await userEvent.type(screen.getByRole('button'), 'JavaScript')
    expect(onClick).toHaveBeenCalledTimes(0)
  })
})
