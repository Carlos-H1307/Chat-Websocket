import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Chat from './pages/Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
