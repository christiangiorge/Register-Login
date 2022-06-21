import { useState } from 'react'
import { BackgroundBase } from './components/BackgroundBase';
import { Register } from './components/Forms/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BackgroundBase />
      <Register />
    </>
  )
}

export default App
