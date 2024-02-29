import React, {useContext, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import UserAuthProvider from "../Context/UserAuthProvider";
import UserInfo from "./UserInfo";

const Header = () => {
  const [toggle, setToggle] = useState( false );

  const handleToggle = () => setToggle( !toggle );

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <Link href="/" className="logo text-2xl font-bold text-accent">
        Dharam
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <NavLink to="about/dharam-gfx"   >About</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              without="true"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
          <UserAuthProvider>
            <UserInfo></UserInfo>
          </UserAuthProvider>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a href="/#resume">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden  relative">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};



export default Header;
