import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function Header() {
  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </>
  )
}
function CountdownTimer() {
  const [count, setCount] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;

    if (isActive && count > 0) {
      timer = setInterval(() => {
        setCount(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive, count]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setCount(10);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {count > 0 ? (
        <h1 style={{ fontSize: '3rem' }}>
          {count} {count === 1 ? 'second' : 'seconds'}
        </h1>
      ) : (
        <>
          <h1 style={{ fontSize: '3rem', color: 'red' }}>0 second</h1>
          <div style={{ fontSize: '2rem' }}>💥 BOOM 💥</div>
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} style={{ marginLeft: '10px' }}>Reset</button>
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className="card">
      <button onClick={() => setCount((count) => count - 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

function Title({ content }) {
  return <h1 className="text-success"> {content}</h1>
}

function Welcome({ name }) {
  return (<h2>Hello {name} </h2>)
}

function Footer() {
  return <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
}

function App() {

  return (
    <>
      {/*<Header />*/}
      <Title content="CountdownTimer" />
      <CountdownTimer />
      {/*<Welcome name="Sandra" />*/}
      {/*<Counter />*/}
      {/*<Footer />*/}
    </>
  )
}

export default App
