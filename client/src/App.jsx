import { useState } from 'react'
import Home from './pages/Home/Home';
import Chat from './pages/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {useAuth} from "./context/AuthContext";
import { SocketProvider } from './context/SocketContext';
import Switch from './components/Switch/Switch';
import { useTheme } from './context/ThemeContext';
import './index.css';
import Header from './pages/Header/Header';

const App = () => {

  const { isAuth, isLoading } = useAuth();
  const { theme } = useTheme();
  
  if(isLoading) {
    return <div />
  }

  if(isAuth){
    return(
      <SocketProvider >
        <div className="App" theme={theme}>
          <Router>
            <Header/>
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/chat" element={<Chat/>} />
              <Route path='/*' element={<Home />} />
            </Routes>
          </Router>
        </div>
      </SocketProvider>
    )
  }

  return (
    <div className="App" theme={theme}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/*' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
