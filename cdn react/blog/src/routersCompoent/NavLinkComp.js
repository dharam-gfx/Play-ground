import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { isLogin, logOut,setLogin } from '../Validations/Auth';
import { Button } from 'react-bootstrap';
const NavLinkComp = () => {

  const [loginState,setLoginState]= useState(isLogin());
  let navigation = useNavigate()
  function logout(){
    setLoginState(false);
    logOut();
    navigation("login");

  }

  function HandelLogin(){
  //  setLogin();
  //  setLoginState(true);
  }
  useEffect(()=>{
    setLoginState(true)
  },[localStorage])

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
            {loginState ? <Button  variant='danger' onClick={()=>{logout()}} >LogOut</Button> : 
            <Button  variant='success' onClick={()=>{HandelLogin()}} >SingUp</Button>}
            
          </Nav>
        </Container>
      </Navbar>

    </header>
  )
}

export default NavLinkComp