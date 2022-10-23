import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NewsList from '../pages/NewsList'
import Business from '../pages/Business'
import Technology from '../pages/Technology'
import Sports from '../pages/Sports'
import Entertainment from '../pages/Entertainment'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<NewsList/>} />
          <Route path='/business' element={<Business/>} />
          <Route path='/technology' element={<Technology/>} />
          <Route path='/sports' element={<Sports/>} />
          <Route path='/entertainment' element={<Entertainment/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App