import React from 'react'
import useMicroFrontend from 'react-micro-frontends'
import logo from './logo.svg'
import './App.css'

function App() {
  const [App1] = useMicroFrontend('http://localhost:3000/build/index.js')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <App1 />
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
