/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { render, screen, fireEvent } from '@testing-library/react'
import TestView from '@/components/TestView'

describe(`HomePage`, () => {
  it('matches document', async () => {
    render(<TestView />)

    userEvent.click(screen.getByRole('button'))
  })
})
