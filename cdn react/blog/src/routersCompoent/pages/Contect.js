import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contect = () => {
  return (
    <div>
    <h4>Contect</h4>

    <NavLink to="company">Company </NavLink>
    <NavLink to="presnol">presnol </NavLink>

    <Outlet></Outlet>
    </div>
  )
}

export default Contect