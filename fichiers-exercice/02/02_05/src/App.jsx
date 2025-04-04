import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
}

function FirstComponent() {
  return <h1>Mon Projet React</h1>
}

function Documentation({ content }) {
  return (<p className="read-the-docs">{content}</p>)
}

function Welcome({ name }) {
  return (<h2>Hello {name}</h2>)
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <FirstComponent />
      <Welcome name="Sandra" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {2 + 2}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Documentation content="Click on the Vite and React logos to learn more" />
      <Documentation content="React can change how you think about the designs you look at and the apps you build." />
    </>
  )
}

export default App
