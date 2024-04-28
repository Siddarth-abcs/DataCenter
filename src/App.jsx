import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import { Header } from "./Component/Header/Header"
import { Search } from './Component/Search'
import { Select } from './Component/Select'
import { Country } from './Component/Country'
import { Countrycard } from './Component/Countrycard'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
    <Header/>
    <div className='w-5/6 m-auto'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Country/>} />
    <Route path='Countrycard/:countryName' element={<Countrycard/>} />
    <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </div>
    </div>
    </>
  )
}

export default App
