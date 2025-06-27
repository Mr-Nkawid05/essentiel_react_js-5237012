import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
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
function CountdownTimer(){
  const [time, setTime] = useState(10);
  const start = () => {
    if (time > 0) {
      const start = () => {
        if (time > 0) {
          const timer = setInterval(() =>{
            setTime((prevTimer) => prevTime - 1);
          },1000);
          return () => clearInterval(timer);
        }
      }

      return(
        <>
        <p>{time} seconds</p>
        <button className="btn btn-outline-secondary" onClick={start}>Go!</button>
        </>
      )
    }
  }
}

function Counter (){
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

function Title ({ content }) {
  return <h1> {content}</h1>
}

function Welcome({name}){
  return (<h2>Hello { name } </h2>)
}

function Footer() {
  return <p className="read-the-docs">
    Click on the Vite and React logos to learn more
  </p>
}

function App() {
  
 return (
    <>
      <Header />
     <Title content="Mon Premier projet React"/>
     <CountdownTimer />
     <Welcome name="Sandra" />
      <Counter />
     {/*<Footer />*/}
    </>
  )
}

export default App
