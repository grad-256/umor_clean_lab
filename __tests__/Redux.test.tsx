import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import CovidDataComponents from '@/components/CovidDataComponents'
import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from '@/features/Slice'

const dateLastUpdate = '0'
const dateMainSummary = {
  attr: 'test',
}

afterEach(() => {
  cleanup()
})

describe('Redux Integration Test', () => {
  let store
  beforeEach(() => {
    store = configureStore({
      reducer: {
        customCounter: sliceReducer,
      },
    })
  })
  it('Should display value with increment by 1 per click', () => {
    render(
      <Provider store={store}>
        <CovidDataComponents
          dateMainSummary={dateMainSummary}
          dateLastUpdate={dateLastUpdate}
        />
      </Provider>
    )

    screen.debug()
    // userEvent.click(screen.getByText('+'))
    // userEvent.click(screen.getByText('+'))
    // userEvent.click(screen.getByText('+'))
    // expect(screen.getByTestId('count-value')).toHaveTextContent(3)
  })
})
