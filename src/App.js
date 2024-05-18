import React from 'react'
import Login from './Component/Login/Login'
import Register from './Component/Register/Register'
import DashBoard from './Component/DashBoard/DashBoard';
import Cart from './Component/Cart/Cart';
import Menu from './Component/Menu/Menu';
import Contact from './Component/Contact/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Register />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
            <Route
            path="/Dashboard"
            element={<DashBoard />}
          />
               <Route
            path="/Cart"
            element={<Cart />}
          />
                     <Route
            path="/Menu"
            element={<Menu />}
          />
                        <Route
            path="/Contact"
            element={<Contact />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App