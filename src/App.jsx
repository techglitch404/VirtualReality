import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App