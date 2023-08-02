import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {useAuth} from "./context/AuthContext";

const App = () => {

  const { isAuth, isLoading } = useAuth();
console.log(isAuth)
  if(isLoading) {
    return <div />
  }

  if(isAuth){
    return(
      <div className="App">
        <Router>
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/chat" element={<Chat/>} />
          </Routes>
        </Router>
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
