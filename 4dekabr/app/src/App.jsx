import React from 'react'
import Home from './Components/Home'
import Details from './Components/Details'
import { Routes, Route } from 'react-router-dom';
import "./style.scss";

function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App