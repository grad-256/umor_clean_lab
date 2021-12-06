import React from 'react'

const TestView = () => {
  const Clickhandle = () => {
    console.log('Clickhandle')
  }

  return (
    <div>
      <h1>test</h1>
      <button type="button" onClick={() => Clickhandle()}>
        test
      </button>
    </div>
  )
}

export default TestView
