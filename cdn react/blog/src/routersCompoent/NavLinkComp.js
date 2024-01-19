import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logOut } from '../Validations/Auth';
import { Button } from 'react-bootstrap';
const NavLinkComp = ( props) => {

  const [loginState,setLoginState]= useState(false);
  let navigation = useNavigate();
  useEffect(()=>{
setLoginState(JSON.parse(props.loginInfo))
  },[props.loginInfo])

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about" state={{name:"Dharam"}}>About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-link" to="/flitter">flitter</NavLink>
            {
              loginState ?
            <Button  variant='danger' onClick={()=>{
              setLoginState(false)
              logOut();
              navigation("login");
            }} >LogOut</Button>  
            :
            <NavLink className="nav-link" to="/login">Login</NavLink>
            }
            
          </Nav>
        </Container>
      </Navbar>

    </header>
  )
}

export default NavLinkComp