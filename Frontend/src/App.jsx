import { useState } from 'react'
import Register from './components/Register/Register.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Register/>
    </>
  )
}

export default App
