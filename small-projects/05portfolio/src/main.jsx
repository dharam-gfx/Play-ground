import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './page/Home.jsx'
import Projects from './Components/Projects'
import About, { AboutInfo } from "./Components/About";
import Contact from "./Components/Contact";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/projects' element={<Projects />} />
      <Route loader={AboutInfo} path='/about/:userId' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Root />
    </RouterProvider>
  </React.StrictMode>,
)
