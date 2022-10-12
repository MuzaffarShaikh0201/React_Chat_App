import { useState } from 'react'
import Register from './components/pages/Register'
import './styles.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Register />
  )
}

export default App
