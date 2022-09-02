import React, { FC } from 'react'
import './App.css'
import Users from './pages/Users'
import Todos from './pages/Todos'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
