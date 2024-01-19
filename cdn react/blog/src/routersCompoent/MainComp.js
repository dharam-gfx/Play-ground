
import React from 'react'
import NavLinkComp from './NavLinkComp';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contect';
import UserDetails from '../Components/UserDetails';
import UseSearchParamsHooks from '../hooksMethod/UseSearchParamsHooks';
import Presnol from './pages/Presnol';
import Company from './pages/Company';
import Login from './pages/Login';
import Protected from './pages/Protected';

const MainComp = () => {
  return (
    <div>
      <h1>MainComp</h1>
      <Router>
        <NavLinkComp></NavLinkComp>
        <Routes>
          <Route path="/"element={<Protected Component={Home}></Protected>}></Route>
          <Route path="/about"  element={<About />}></Route>
          <Route path="/contact/" element={<Contact />}>
            <Route path="/contact/presnol" element={<Presnol />}/>
            <Route path="/contact/company" element={<Company />}/>
          </Route>
          <Route path="/userdetails/:userId" element={<UserDetails />}></Route>
          <Route path="/flitter" element={<UseSearchParamsHooks />}></Route>
          <Route path="/login" element={<Login />}></Route>
          \
          {/* page not found  */}
          {/* <Route path="/*" element={<h1>404 page not found</h1>} ></Route> */}

          {/* // redirect  */}
          <Route path="/*" element={<Navigate to="/"></Navigate>} ></Route>
        </Routes>
      </Router>





    </div>
  )
}

export default MainComp