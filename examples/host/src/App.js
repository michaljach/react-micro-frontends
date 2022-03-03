import React from 'react'
import useMicroFrontend from 'react-micro-frontends'

function App() {
  const [App1] = useMicroFrontend('http://localhost:3000/build/index.js')
  const [App2] = useMicroFrontend('http://localhost:3000/build/index.js')

  return (
    <div className="App">
      <App1 />
      <App2 />
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
