import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import { Header } from "./Component/Header/Header"
import { Search } from './Component/Search'
import { Select } from './Component/Select'
import { Country } from './Component/Country'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
    <Header/>
    <div className='w-5/6 m-auto'>
    <Country/>
    </div>
    </div>
    </>
  )
}

export default App
