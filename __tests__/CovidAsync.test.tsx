/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import 'jest-canvas-mock'
import osakaCovidSlice from '../features/osakaCovidSlice'
import Covid from '../pages/covid'

let instanceResize: ResizeObserver | null = null
let callbackResize: ResizeObserverCallback | null = null
global.ResizeObserver = class mockResizeObjerver {
  constructor(callback: ResizeObserverCallback) {
    instanceResize = this
    callbackResize = callback
  }
  disconnect() {}
  observe(target: Element, options?: ResizeObserverOptions) {}
  unobserve(target: Element) {}
}

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
    }
  },
}))

afterEach(() => {
  cleanup()
})

describe('CovidAsync.test', () => {
  let store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        osakaCovidState: osakaCovidSlice,
      },
    })
  })
  it('Should display', async () => {
    render(
      <Provider store={store}>
        <Covid />
      </Provider>
    )

    screen.getByText('- 大阪のコロナ感染データ -')
    // screen.debug()
    // userEvent.click(screen.getByText('FetchDummy'))
    // expect(await screen.findByTestId('count-value')).toHaveTextContent('105')
  })
})
