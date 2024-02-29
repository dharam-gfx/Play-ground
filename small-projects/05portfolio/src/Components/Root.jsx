import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  )
}

export default Root