import React from 'react'
import './Main.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Dashboard,AuthWrapper,Error,Login,PrivateRoute} from './pages'
const Main = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Main