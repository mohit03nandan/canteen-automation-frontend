import React from 'react'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import DashBoard from './Component/DashBoard/DashBoard';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<DashBoard />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App