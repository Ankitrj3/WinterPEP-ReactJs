import { useState } from 'react'
import Counter from './componets/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
    </>
  )
}

export default App
