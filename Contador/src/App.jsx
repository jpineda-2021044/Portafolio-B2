import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(100)

  function aumentar(){
    if(count!=200) setCount(count + 1)
  }

  function disminuir(){
    if(count!=-200) setCount(count - 1)
  }

  function aumentar8(){
    if(count != 200 || count<200){
      if((count+8)<=200)
        setCount(count+8)
      else
        setCount(200)
    } 
  }
  function disminuir8(){
    if(count != -200 || count>-200){
      if((count-8)>=-200)
        setCount(count-8)
      else
        setCount(-200)
    } 
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div className='card'>
          <button onClick={disminuir}>
            Restar
          </button>
          <button onClick={disminuir8}>
            Restar -8
          </button>
          <h3>
            Count is {count}
          </h3>
          <button onClick={aumentar8}>
            Aumentar +8
          </button>
          <button onClick={aumentar}>
            Aumentar
          </button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
