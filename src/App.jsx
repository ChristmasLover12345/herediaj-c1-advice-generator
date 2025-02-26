import { useState } from 'react'
import AdviceCardComponent from './Components/AdviceCardComponent'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-[#202632] h-screen w-screen flex items-center justify-center'>

    <AdviceCardComponent />

   </div>
  )
}

export default App
